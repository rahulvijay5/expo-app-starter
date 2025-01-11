import { View, Text, Pressable, Switch } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

// Mock user data
const mockUser = {
  name: "John Doe",
  email: "captaincool@gmail.com",
  phone: "9259913444",
  address: "New York, USA",
};

const Settings = () => {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleColorScheme();
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  const handleUpdateProfile = () => {
    router.push({
      pathname: "/(extras)/UpdateProfile",
      params: mockUser
    });
  };

  const SettingItem = ({
    icon,
    text,
    isDestructive = false,
    onPress,
  }: {
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    text: string;
    isDestructive?: boolean;
    onPress?: () => void;
  }) => (
    <Pressable
      onPress={onPress}
      className="flex-row items-center py-4 px-4 border-b border-gray-100 dark:border-stone-800"
    >
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={isDestructive ? "#ef4444" : "#84cc16"}
      />
      <Text
        className={`flex-1 ml-3 text-base ${
          isDestructive ? "text-red-500" : "text-black dark:text-white"
        }`}
      >
        {text}
      </Text>
      {!isDestructive && (
        <MaterialCommunityIcons name="chevron-right" size={24} color="#999" />
      )}
    </Pressable>
  );

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <View className="py-4">
        <View className="px-4 mb-4">
          <Text className="text-lg font-semibold text-black dark:text-white mb-1">
            {mockUser.name}
          </Text>
          <Text className="text-gray-500 dark:text-gray-400">
            {mockUser.email}
          </Text>
          <Text className="text-gray-500 dark:text-gray-400">
            {mockUser.phone}
          </Text>
          <Text className="text-gray-500 dark:text-gray-400">
            {mockUser.address}
          </Text>
        </View>

        <View className="mb-8">
          <SettingItem
            icon="account-edit"
            text="Update Profile"
            onPress={handleUpdateProfile}
          />

          <View className="flex-row items-center py-4 px-4 border-b border-gray-100 dark:border-stone-800">
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#84cc16"
            />
            <Text className="flex-1 ml-3 text-base text-black dark:text-white">
              Dark Mode
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={handleThemeToggle}
              trackColor={{ false: "#767577", true: "#84cc16" }}
              thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
            />
          </View>

          <SettingItem
            icon="logout"
            text="Logout"
            isDestructive={true}
            onPress={handleLogout}
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;
