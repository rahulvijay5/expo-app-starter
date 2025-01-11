import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import BonusEpisodes from "~/components/BonusEpisodes";
import FreeEpisodes from "~/components/FreeEpisodes";

const Tab = createMaterialTopTabNavigator();
import { Image } from "react-native";
import { Link } from "expo-router";

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
  return (
    <View style={{ flex: 1, padding: 6, paddingTop: 14 ,height:"100%"}}>
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