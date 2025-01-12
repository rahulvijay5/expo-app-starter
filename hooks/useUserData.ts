import { useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserData = {
  id: string;
  email: string;
  fullName: string | null;
  phoneNumber: string | null;
  state: string | null;
  isOnboarded: boolean;
};

export function useUserData() {
  const { user, isLoaded: clerkLoaded } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadUserData = async () => {
      if (!clerkLoaded || !user) {
        if (isMounted) {
          setIsLoading(false);
        }
        return;
      }

      try {
        const storedData = await AsyncStorage.getItem(`user_data_${user.id}`);
        const additionalData = storedData ? JSON.parse(storedData) : null;

        if (isMounted) {
          setUserData({
            id: user.id,
            email: user.emailAddresses[0].emailAddress,
            fullName: additionalData?.fullName || null,
            phoneNumber: additionalData?.phoneNumber || null,
            state: additionalData?.state || null,
            isOnboarded: Boolean(additionalData?.fullName && additionalData?.phoneNumber && additionalData?.state),
          });
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        if (isMounted) {
          setUserData({
            id: user.id,
            email: user.emailAddresses[0].emailAddress,
            fullName: null,
            phoneNumber: null,
            state: null,
            isOnboarded: false,
          });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadUserData();

    return () => {
      isMounted = false;
    };
  }, [user, clerkLoaded]);

  const updateUserData = async (newData: Partial<Omit<UserData, 'id' | 'email' | 'isOnboarded'>>) => {
    if (!userData?.id) return;

    const updatedData = {
      ...userData,
      ...newData,
      isOnboarded: Boolean(
        (newData.fullName || userData.fullName) &&
        (newData.phoneNumber || userData.phoneNumber) &&
        (newData.state || userData.state)
      ),
    };

    try {
      await AsyncStorage.setItem(
        `user_data_${userData.id}`,
        JSON.stringify({
          fullName: updatedData.fullName,
          phoneNumber: updatedData.phoneNumber,
          state: updatedData.state,
        })
      );
      setUserData(updatedData);
      return updatedData;
    } catch (error) {
      console.error('Error saving user data:', error);
      throw new Error('Failed to save user data');
    }
  };

  return {
    userData,
    isLoading,
    isAuthenticated: Boolean(user && clerkLoaded),
    updateUserData,
  };
} 