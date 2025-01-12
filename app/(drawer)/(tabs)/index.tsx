import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, ActivityIndicator } from "react-native";
import BonusEpisodes from "~/components/BonusEpisodes";
import FreeEpisodes from "~/components/FreeEpisodes";
import {Button} from "~/components/ui/button";
const Tab = createMaterialTopTabNavigator();
import { Image } from "react-native";
import { Link, Redirect, router, useRouter } from "expo-router";
import { useEffect } from "react";
import { useUserContext } from "@/context/UserContext";
import { Text } from "~/components/ui/text";

// import { View } from "react-native";
// import { Text } from "~/components/ui/text";
// import { useUserContext } from "~/context/UserContext";

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
  const { userData, isLoading, isAuthenticated } = useUserContext();

  useEffect(() => {
    if (!isLoading && isAuthenticated && !userData?.isOnboarded) {
      router.replace('/(extras)/Onboarding');
    }
  }, [isLoading, isAuthenticated, userData?.isOnboarded]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text className="mt-2">Loading...</Text>
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

// export default function Home() {
//   const userData = useUserContext()
//   return (
//     <View>
//       <Text>{userData?.userData?.email}</Text>
//       <Text>{userData?.userData?.fullName}</Text>
//       <Text>{userData?.userData?.phoneNumber}</Text>
//       <Text>{userData?.userData?.state}</Text>
//       <Text>{userData?.userData?.isOnboarded}</Text>
//       <Text>{userData?.userData?.id}</Text>
//     </View>
//   );
// }