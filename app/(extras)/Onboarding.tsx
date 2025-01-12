import { useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useUserData } from '@/hooks/useUserData';

export default function OnboardingPage() {
  const router = useRouter();
  const { userData, updateUserData, isLoading: userDataLoading } = useUserData();
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 p-4 justify-end items-start mb-8 w-full">
        <View className="items-center mb-6">
          <Text className="text-2xl font-semibold mb-2">Complete Your Profile</Text>
          <Text className="text-sm text-gray-500">Please provide your details to continue</Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="mb-2">Full Name</Text>
            <Input
              placeholder="John Doe"
              value={formData.fullName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, fullName: text }))}
            />
          </View>

          <View>
            <Text className="mb-2">Phone Number</Text>
            <Input
              placeholder="+1234567890"
              value={formData.phoneNumber}
              onChangeText={(text) => setFormData(prev => ({ ...prev, phoneNumber: text }))}
              keyboardType="phone-pad"
            />
          </View>

          <View>
            <Text className="mb-2">State</Text>
            <Input
              placeholder="Your state"
              value={formData.state}
              onChangeText={(text) => setFormData(prev => ({ ...prev, state: text }))}
            />
          </View>

          <Button
            onPress={handleSubmit}
            disabled={loading}
            className="w-full dark:bg-white dark:text-black bg-black text-white"
          >
            <Text className="text-white">
              {loading ? 'Updating...' : 'Complete Profile'}
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}