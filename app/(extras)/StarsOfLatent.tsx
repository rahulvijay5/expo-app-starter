import { View, Image, ImageSourcePropType, Linking, ScrollView } from "react-native";
import React from "react";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

interface StarProps { 
  name: string;
  imageSource: ImageSourcePropType;
  link: string;
}

const stars: StarProps[] = [
  {
    name: "Keshav Jha",
    imageSource: require("@/assets/images/samay.avif"),
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "Keshav Jha",
    imageSource: require("@/assets/images/samay.avif"),
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "Keshav Jha",
    imageSource: require("@/assets/images/samay.avif"),
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const Star = ({ name, imageSource, link }: StarProps) => {
  return (
    <View className="p-2">
      <View className="p-2 rounded-2xl flex flex-row gap-2 border border-gray-200 dark:border-gray-800">
        <Image
          source={imageSource}
          className="rounded-2xl h-28 w-2/5 aspect-video"
          resizeMode="cover"
        />
        <View className="flex flex-col gap-2 items-start justify-between">
          <Text className="text-lg">{name}</Text>
          <Button onPress={() => Linking.openURL(link)} className="bg-black dark:bg-white" size={"sm"}>
            <Text className="text-white dark:text-black">View</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const StarsOfLatent = () => {
  return (
    <ScrollView className="p-2">
      <Text className="text-2xl font-bold text-left my-2">Stars Of Latent</Text>
      {stars.map((star) => (
        <Star key={star.name} {...star} />
      ))}
    </ScrollView>
  );
};

export default StarsOfLatent;
