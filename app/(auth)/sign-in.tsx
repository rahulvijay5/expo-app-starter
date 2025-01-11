import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Alert, Text, TextInput, View } from "react-native";
import React from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      // console.error(JSON.stringify(err, null, 2));
      Alert.alert("Error", JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View className="flex-1 justify-end gap-2 p-2">
      <Text className="dark:text-white text-black text-2xl font-bold mb-4">Login to Continue</Text>
      <Input
        placeholder="Enter Email Id/Phone Number"
        className="dark:outline-white h-16 py-1 outline-black  border dark:border-white border-black dark:text-white text-black"
        value={emailAddress}
        onChangeText={(emailAddress: string) => setEmailAddress(emailAddress)}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <Input
        placeholder="Enter password"
        className="dark:outline-white h-16 py-1 outline-black  border dark:border-white border-black dark:text-white text-black"
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        onPress={onSignInPress}
        className="bg-lime-500 my-4 p-2 flex-row justify-center items-center h-16"
      >
        <Text className="font-semibold text-2xl h-full">Sign in</Text>
        <FontAwesome name="long-arrow-right" size={24} color="black" />
      </Button>
      <View className="flex-row justify-start items-center gap-4">
        <Text className="dark:text-white text-black ">
          Don't have an account?
        </Text>
        <Link href="/sign-up">
          <Text className="text-blue-500">Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
