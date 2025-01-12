import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SignedIn } from "@clerk/clerk-expo";
import { Drawer } from 'expo-router/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { useState, useEffect } from 'react'

const _layout = () => {
  const router = useRouter()
  const [hasNewNotifications, setHasNewNotifications] = useState(false)

  // Simulate fetching notifications
  useEffect(() => {
    const checkNotifications = () => {
      // In a real app, this would be an API call
      setHasNewNotifications(true)
    }
    checkNotifications()
  }, [])

  return (
    <SignedIn>
      <Stack>
        <Stack.Screen
          name="ApplyForIGL"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Apply For IGL",
          }}
        />
        <Stack.Screen
          name="Feedback"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Feedback",
          }}
        />
        <Stack.Screen
          name="SupportChat"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Support Chat",
          }}
        />
        <Stack.Screen
          name="StarsOfLatent"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Stars Of Latent",
          }}
        />
        <Stack.Screen
          name="Membership"
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Memberships",
          }}
        />
        <Stack.Screen
          name="ConnectMembership"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Connect Membership",
          }}
        />
        <Stack.Screen
          name="Settings"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Connect Membership",
          }}
        />
        <Stack.Screen
          name="Notifications"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Notifications",
          }}
        />
        <Stack.Screen
          name="Onboarding"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Onboarding",
          }}
        />
        <Stack.Screen
          name="UpdateProfile"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 20 },
            title: "Update Profile",
          }}
        />
      </Stack>
    </SignedIn>
  );
};

export default _layout;
