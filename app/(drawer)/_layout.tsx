import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Feather from "@expo/vector-icons/Feather";
import { router, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Share, Text, View } from "react-native";
import { SignedOut, useClerk, useUser } from "@clerk/clerk-expo";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import * as Linking from "expo-linking";
import { ThemeToggle } from "~/components/ThemeToggle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "~/lib/useColorScheme";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  const user = useUser();
  const { signOut } = useClerk();

  const handleShareApp = () => {
    Share.share({
      message: "Download the app from the link below",
      url: "https://play.google.com/store/apps/details?id=com.latent.app",
    });
  };

  const handleRateApp = () => {
    Linking.openURL(
      "https://play.google.com/store/apps/details?id=com.whatsapp.com"
    );
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to your desired page
      Linking.openURL(Linking.createURL("/"));
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const { isDarkColorScheme } = useColorScheme();

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#black" }}>
      <Image
        source={require("@/assets/images/icon.png")}
        className="h-28 w-28 aspect-video"
      />
      <Text className="dark:text-white text-black">{user.user?.fullName}</Text>
      <Text className="dark:text-white text-black ">
        {user.user?.emailAddresses[0]?.emailAddress}
      </Text>
      <Separator className="my-4 dark:bg-white bg-black w-2/3" />
      <DrawerItem
        icon={({ color, size }) => (
          <Feather name="home" size={size} color={"#84cc16"} />
        )}
        label="Home"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={() => router.push("/(drawer)/(tabs)")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="stars" size={24} color={"#84cc16"} />
        )}
        label="Stars of Latent"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={() => router.push("/(extras)/StarsOfLatent")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Feather name="home" size={size} color={"#84cc16"} />
        )}
        label="Apply for IGL"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={() => router.push("/(extras)/ApplyForIGL")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Entypo name="chat" size={24} color={"#84cc16"} />
        )}
        label="Support Chat"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={() => router.push("/(extras)/SupportChat")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="contact-support" size={24} color={"#84cc16"} />
        )}
        label="Feedback"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={() => router.push("/(extras)/Feedback")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign name="setting" size={24} color={"#84cc16"} />
        )}
        label="Settings"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={() => router.push("/(extras)/Settings")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Feather name="share" size={size} color={"#84cc16"} />
        )}
        label="Share"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={handleShareApp}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign name="star" size={24} color={"#84cc16"} />
        )}
        label="Rate"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={handleRateApp}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Feather name="log-in" size={24} color={"#84cc16"} />
        )}
        label="Log Out"
        labelStyle={{ color: isDarkColorScheme ? "white" : "black" }}
        onPress={handleSignOut}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  const { isDarkColorScheme } = useColorScheme();
  const router = useRouter();
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  // Simulate fetching notifications
  useEffect(() => {
    const checkNotifications = () => {
      // In a real app, this would be an API call
      setHasNewNotifications(true);
    };
    checkNotifications();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveBackgroundColor: "#84cc16",
          drawerActiveTintColor: "#84cc16",
          drawerType: "front",
          drawerIcon() {
            return <Feather name="list" size={24} color={"white"} />;
          },
          headerStyle: {
            backgroundColor: isDarkColorScheme ? "black" : "white",
          },
          headerTitle(props) {
            return (
              <Image
                source={require("@/assets/images/icon.png")}
                className="h-14 w-14 aspect-video"
              />
            );
          },
          headerTitleStyle: { color: "#A9A9A9" },
          headerRight: () => (
            <Button
              onPress={() => router.push("/(extras)/Notifications")}
              className="mr-4 relative"
            >
              <Feather
                name="bell"
                size={20}
                color={isDarkColorScheme ? "white" : "black"}
              />
              {hasNewNotifications && (
                <View className="absolute top-1.5 right-5 w-3 h-3 rounded-full bg-[#84cc16]" />
              )}
            </Button>
          ),
          headerShadowVisible: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      />
    </GestureHandlerRootView>
  );
}
