import { Image, ScrollView, View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import AntDesign from '@expo/vector-icons/AntDesign';

interface MembershipProps {
  imageSource: any; // Image source can be a require statement or a URI
  title: string;
  price: number;
  likes: string;
  buttonText: string;
}

const programs = [
  {
    imageSource: require('@/assets/images/samay.avif'), // Example image source
    title: "Access to Bonus Episodes and More",
    price: 49,
    likes: "124.4k",
    buttonText: "Join Now"
  },
  // {
  //   imageSource: require('@/assets/images/samay.avif'), // Example image source
  //   title: "Bawal Membership",
  //   price: 999,
  //   likes: "50k",
  //   buttonText: "Subscribe"
  // }
];

const MembershipProgram: React.FC<MembershipProps> = ({ imageSource, title, price, likes, buttonText }) => {
  return (
    <View  className="p-2">
      <View className="p-2 rounded-2xl flex flex-col gap-2 border border-gray-200 dark:border-gray-700 py-4">
        <Image
          source={imageSource}
          className="rounded-2xl h-60 w-full"
          resizeMode="contain"
        />
        <Text className="font-semibold text-2xl">{title}</Text>
        <View className="flex-row items-center gap-2 justify-between">
          <View className="flex-row items-center gap-1">
            <Text className="text-lg">Starts from ₹</Text>
            <Text className="text-lg">{price}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <AntDesign name="like1" size={14} color="#2563EB" />
            <Text style={{ color: "#2563EB" }}>{likes}</Text>
          </View>
        </View>
        <Button className="bg-black dark:bg-white">
          <Text className="text-white dark:text-black">{buttonText}</Text>
        </Button>
      </View>
    </View>
  );
};


const Membership = () => {
  return (
    <ScrollView style={{ flex: 1 }} className="flex flex-col gap-1 ">
      {programs.map((program, index) => (
        <MembershipProgram key={index} {...program} />
      ))}
    </ScrollView>
  );
};

export default Membership;
