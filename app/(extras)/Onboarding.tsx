import { useState } from 'react';
import { View, ScrollView, ActivityIndicator, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useUserContext } from '@/context/UserContext';

export default function OnboardingPage() {
  const router = useRouter();
  const { userData, updateUserData, isLoading: userDataLoading } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: userData?.fullName || '',
    phoneNumber: userData?.phoneNumber || '',
    state: userData?.state || '',
  });

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await updateUserData({
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        state: formData.state,
      });

      router.push('/');
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (userDataLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 justify-end items-start mb-8 w-full">
      <Image source={require("@/assets/images/icon.png")} className="w-full h-60 aspect-video" />
      <View className="items-start mb-6">
        <Text className="dark:text-white text-black text-3xl font-bold mb-2">Complete Your Profile</Text>
        {/* <Text className="dark:text-gray-300 text-gray-600 text-base">Please provide your details to continue</Text> */}
      </View>

      <View className="space-y-6 w-full">
        <View>
          <Text className="mb-2 dark:text-white text-black">Full Name</Text>
          <Input
            placeholder="John Doe"
            value={formData.fullName}
            onChangeText={(text) => setFormData(prev => ({ ...prev, fullName: text }))}
            className="h-12 "
          />
        </View>

        <View>
          <Text className="mb-2 dark:text-white text-black">Phone Number</Text>
          <Input
            placeholder="+1234567890"
            value={formData.phoneNumber}
            onChangeText={(text) => setFormData(prev => ({ ...prev, phoneNumber: text }))}
            keyboardType="phone-pad"
            className="h-12 "
          />
        </View>

        <View>
          <Text className="mb-2 dark:text-white text-black">State</Text>
          <Input
            placeholder="Your state"
            value={formData.state}
            onChangeText={(text) => setFormData(prev => ({ ...prev, state: text }))}
            className="h-12 "
          />
        </View>

        <Button
          onPress={handleSubmit}
          disabled={loading}
          className="w-full bg-lime-500"
        >
          <Text className="text-white font-semibold">
            {loading ? 'Updating...' : 'Complete Profile'}
          </Text>
        </Button>
      </View>
    </View>
  );
}