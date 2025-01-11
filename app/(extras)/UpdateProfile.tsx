import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Input } from '~/components/ui/input'

type RouteParams = {
  name: string
  email: string
  phone: string
  address: string
}

const UpdateProfile = () => {
  const router = useRouter()
  const params = useLocalSearchParams<RouteParams>()
  const [formData, setFormData] = useState({
    name: params.name || '',
    email: params.email || '',
    phone: params.phone || '',
    address: params.address || ''
  })
  const [isSaving, setIsSaving] = useState(false)

  const handleUpdate = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    // In a real app, you would update the data in your backend here
    router.back()
  }

  return (
    <View className="flex-1 bg-white dark:bg-black p-4">
      <Input
        label="Full Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        leftIcon={<MaterialCommunityIcons name="account" size={20} color="#84cc16" />}
        placeholder="Enter your full name"
      />

      <Input
        label="Email Address"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        leftIcon={<MaterialCommunityIcons name="email" size={20} color="#84cc16" />}
        keyboardType="email-address"
        placeholder="Enter your email"
      />

      <Input
        label="Phone Number"
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        leftIcon={<MaterialCommunityIcons name="phone" size={20} color="#84cc16" />}
        keyboardType="phone-pad"
        placeholder="Enter your phone number"
      />

      <Input
        label="Address"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
        leftIcon={<MaterialCommunityIcons name="map-marker" size={20} color="#84cc16" />}
        placeholder="Enter your address"
      />

      <Pressable
        onPress={handleUpdate}
        disabled={isSaving}
        className={`mt-6 rounded-xl py-3 px-4 ${isSaving ? 'bg-gray-400' : 'bg-[#84cc16]'}`}
      >
        <Text className="text-white text-center text-base font-medium">
          {isSaving ? 'Updating...' : 'Update Profile'}
        </Text>
      </Pressable>
    </View>
  )
}

export default UpdateProfile 