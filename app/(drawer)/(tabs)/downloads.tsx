import React from "react";
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ViewComponent,
} from "react-native";
import { useState } from "react";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme } from "~/lib/useColorScheme";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isDarkColorScheme } = useColorScheme();

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
      }}
      className=""
    >
      <TextInput
        style={{
          flex: 1,
          height: 40,

          paddingHorizontal: 10,
        }}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        className="dark:text-white text-black"
      />
      <Button onPress={handleSearch} variant={"default"} size={"icon"}>
        <AntDesign
          name="search1"
          size={24}
          color={isDarkColorScheme ? "white" : "black"}
        />
      </Button>
    </View>
  );
};

const downloads = () => {
  return (
    <View className="h-full">
      <SearchBar />
      <View className="flex-1 items-center justify-end">
        <Text>No Downloads.</Text>
        <Image
          source={require("@/assets/images/cart.png")}
          className="h-60 w-60 opacity-70 translate-y-4"
        />
      </View>
    </View>
  );
};

export default downloads;
