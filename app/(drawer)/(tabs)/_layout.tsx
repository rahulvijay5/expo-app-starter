import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, Redirect, Tabs } from 'expo-router';
import {Text} from 'react-native'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSignIn } from '@clerk/clerk-expo'
import {  useRouter } from 'expo-router'
import {  TextInput, View, Pressable } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { useColorScheme } from '~/lib/useColorScheme';
// import { useUserData } from '~/hooks/useUserData';

const Drawer = createDrawerNavigator();

export default function TabLayout() {
  const {isDarkColorScheme} = useColorScheme() 

  // const { userData, isLoading, isAuthenticated } = useUserData();
  // const router = useRouter();
  // console.log("User Data", userData)
  // console.log("Is Loading", isLoading)
  // console.log("Is Authenticated", isAuthenticated)

  // useEffect(() => {
  //   if (!userData?.isOnboarded) {
  //     router.push('/(auth)/onboarding');
  //   }
  // }, []);

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <>
    <SignedIn>
      
    <Tabs screenOptions={{ tabBarActiveTintColor: '#84cc16', tabBarStyle:{backgroundColor:isDarkColorScheme ? "black" : "white"} }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        headerShown:false,
        tabBarLabel:'Home',
        tabBarIcon: ({ color }) => <Feather name="home" size={28} color={color} />,
      }}
    />
    <Tabs.Screen
      name="mySubscription"
      options={{
        headerTitleAlign:'left',
        headerTitleStyle:{fontSize:20,marginTop:10},
        headerShadowVisible:false,
        title: 'My Subscription',
        tabBarIcon: ({ color }) => <MaterialIcons name="subscriptions" size={28} color={color} />,
      }}
    />
    <Tabs.Screen
      name="downloads"
      options={{
        headerTitleAlign:'left',
        headerTitleStyle:{fontSize:20,marginTop:10},
        headerShadowVisible:false,
        title: 'Downloads',
        tabBarIcon: ({ color }) => <Feather name="download" size={28} color={color} />,
      }}
    />
  </Tabs>
      </SignedIn>
      <SignedOut>
       <Redirect href={'/(auth)/sign-in'} />
      </SignedOut>

    </>
  );
}