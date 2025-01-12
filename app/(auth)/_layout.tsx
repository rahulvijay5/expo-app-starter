import { Redirect, Slot, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <SafeAreaView className="flex-1 p-2">
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: true,
            headerBackTitle: "Back",
            headerShadowVisible:false,
            headerTitleStyle:{color:"black"}
            
            // headerStyle:{backgroundColor:"white"}
          }}
        />
        {/* <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack>
    </SafeAreaView>
  );
}
