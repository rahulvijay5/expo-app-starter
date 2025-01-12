import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, ActivityIndicator } from "react-native";
import BonusEpisodes from "~/components/BonusEpisodes";
import FreeEpisodes from "~/components/FreeEpisodes";
import {Button} from "~/components/ui/button";
const Tab = createMaterialTopTabNavigator();
import { Image } from "react-native";
import { Link, Redirect, router, useRouter } from "expo-router";
import { useEffect } from "react";
import { useUserData } from "@/hooks/useUserData";
import { Text } from "~/components/ui/text";

function HeaderImage() {
  return (
    <View className="w-full h-fit">
      <Image
        source={require("@/assets/images/icon.png")}
        className="w-full h-44 border-white/10 border-2 mb-4"
        resizeMode="contain"
      />
      <Link href="/(extras)/Membership" className="mb-2">
        <Image
          source={require("@/assets/images/icon.png")}
          className="w-full h-32 border-white/10 border-2 rounded-2xl"
          resizeMode="contain"
        />
      </Link>
        {/* <Button
          className="bg-white/10"
          onPress={() => router.push("/(extras)/Onboarding")}
        >
          <Text>Onboarding</Text>
        </Button> */}
      <Link href="/(extras)/ConnectMembership" className="mb-2">
        <Image
          source={require("@/assets/images/icon.png")}
          className="w-full h-32 border-white/10 border-2 rounded-2xl mb-2"
          resizeMode="contain"
        />
      </Link>
    </View>
  );
}

export default function MyTabs() {
  const router = useRouter();
  const { userData, isLoading, isAuthenticated } = useUserData();

  useEffect(() => {
    const checkOnboarding = async () => {
      if (!isLoading && isAuthenticated && !userData?.isOnboarded) {
        router.push('/(extras)/Onboarding');
      }
    };

    checkOnboarding();
  }, [isLoading, isAuthenticated, userData?.isOnboarded]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 6, paddingTop: 14, height: "100%" }}>
      <HeaderImage />
      <Tab.Navigator
        style={{ flex: 1 }}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#84cc16",
          },
        }}
      >
        <Tab.Screen name="Bonus Episodes" component={BonusEpisodes} />
        <Tab.Screen name="Free Episodes" component={FreeEpisodes} />
      </Tab.Navigator>
    </View>
  );
}
