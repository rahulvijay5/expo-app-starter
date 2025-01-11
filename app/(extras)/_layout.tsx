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
            headerShown: true,
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
      </Stack>
      {/* <Drawer
        screenOptions={{
          headerRight: () => (
            <Pressable 
              onPress={() => router.push('/(extras)/Notifications')}
              className="mr-4 relative"
            >
              <MaterialCommunityIcons 
                name="bell-outline" 
                size={24} 
                color="#84cc16" 
              />
              {hasNewNotifications && (
                <View className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#84cc16]" />
              )}
            </Pressable>
          ),
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="Notifications"
          options={{
            drawerLabel: 'Notifications',
            title: 'Notifications',
          }}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
        <Drawer.Screen
          name="UpdateProfile"
          options={{
            drawerLabel: 'Update Profile',
            title: 'Update Profile',
            drawerItemStyle: { display: 'none' }
          }}
        />
      </Drawer> */}
    </SignedIn>
  );
};

export default _layout;
