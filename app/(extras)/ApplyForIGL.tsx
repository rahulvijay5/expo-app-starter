import { View } from "react-native";
import React from "react";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

const ApplyForIGL = () => {
  return (
    <View className="p-2">
      <Text className="text-xl mb-4 font-semibold text-black dark:text-white">
        Apply for Latent
      </Text>
      <View className="p-2 rounded-2xl flex flex-col gap-2 border border-gray-200 dark:border-gray-800 py-4">
        <Text className="text-xl">Title</Text>
        <Text className="text-lg">
          It may take upto 24 hours to connect your youtube membership to app.
        </Text>
        <Button className="bg-black dark:bg-white">
          <Text className="text-white dark:text-black">Connect Membership</Text>
        </Button>
      </View>
    </View>
  );
};
export default ApplyForIGL;
