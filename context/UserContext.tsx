import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useUser } from "@clerk/clerk-expo";
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserData = {
  id: string;
  email: string;
  fullName: string | null;
  phoneNumber: string | null;
  state: string | null;
  isOnboarded: boolean;
};

type UserContextType = {
  userData: UserData | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  updateUserData: (newData: Partial<Omit<UserData, 'id' | 'email' | 'isOnboarded'>>) => Promise<UserData | undefined>;
  refreshUserData: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded: clerkLoaded } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUserData = async () => {
    if (!clerkLoaded || !user) {
      setIsLoading(false);
      return;
    }

    try {
      const storedData = await AsyncStorage.getItem(`user_data_${user.id}`);
      const additionalData = storedData ? JSON.parse(storedData) : null;

      setUserData({
        id: user.id,
        email: user.emailAddresses[0].emailAddress,
        fullName: additionalData?.fullName || null,
        phoneNumber: additionalData?.phoneNumber || null,
        state: additionalData?.state || null,
        isOnboarded: Boolean(additionalData?.fullName && additionalData?.phoneNumber && additionalData?.state),
      });
    } catch (error) {
      console.error('Error loading user data:', error);
      setUserData({
        id: user.id,
        email: user.emailAddresses[0].emailAddress,
        fullName: null,
        phoneNumber: null,
        state: null,
        isOnboarded: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
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

  const refreshUserData = async () => {
    setIsLoading(true);
    await loadUserData();
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        isLoading,
        isAuthenticated: Boolean(user && clerkLoaded),
        updateUserData,
        refreshUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
} 