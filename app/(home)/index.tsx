import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "~/components/ui/button";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <View className="p-4">
          <Button className="bg-blue-500" variant={"default"}>
            <Link href="/(auth)/sign-in">
              <Text className="text-white">Sign in</Text>
            </Link>
          </Button>
        </View>
      </SignedOut>
    </View>
  );
}
