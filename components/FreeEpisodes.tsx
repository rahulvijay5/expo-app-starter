import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Button } from "./ui/button";

const videos = [
  { id: 1, title: "Samay SamaySamaySamaySamay",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ", image: require("@/assets/images/samay.avif") },
  { id: 2, title: "Samay SamaySamaySamaySamay", url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ", image: require("@/assets/images/samay.avif") },
  { id: 3, title: "Samay SamaySamaySamaySamay", url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ", image: require("@/assets/images/samay.avif") },
];
const FreeEpisodes = () => {
return (
  <ScrollView className="p-2 mt-2 gap-4 flex-1">
    {videos.map((video) => (
      <View key={video.id} className="mb-2 h-32 flex flex-row bg-slate-100 dark:bg-stone-950 rounded-3xl p-2">
        <Image
          source={video.image}
          className="w-2/5 h-full border-white/10 border-2 rounded-3xl mb-2 relative"
          resizeMode="cover"
        />
        <View className="w-3/5 flex items-start justify-center p-2 gap-1">
          <Text className="text-black dark:text-white truncate line-clamp-1">
            {video.title}
          </Text>
          <View className="text-black dark:text-white flex flex-row items-center justify-center gap-2">
            <View className="bg-[#84cc16] rounded-full w-6 h-6 flex items-center justify-center">
              <AntDesign name="caretright" size={12} color="black" />
            </View>
            <Text className="text-black dark:text-white truncate line-clamp-1">
              Play Video
            </Text>
          </View>
        </View>
      </View>
    ))}
  </ScrollView>
  );
};
export default FreeEpisodes;
