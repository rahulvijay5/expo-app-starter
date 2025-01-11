import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";

const videos = [
  { id: 1, title: "Samay SamaySamaySamaySamay", image: require("@/assets/images/samay.avif") },
  { id: 2, title: "Samay SamaySamaySamaySamay", image: require("@/assets/images/samay.avif") },
  { id: 3, title: "Samay SamaySamaySamaySamay", image: require("@/assets/images/samay.avif") },
];
const BonusEpisodes = () => {
return (
  <ScrollView className="p-2 mt-2 gap-4 flex-1">
    {videos.map((video) => (
      <View key={video.id} className="h-32 mb-2 flex flex-row bg-slate-100 dark:bg-stone-950 rounded-3xl p-2">
        <Image
          source={video.image}
          className="w-1/2 h-full border-white/10 border-2 rounded-3xl mb-2 relative dark:opacity-70 opacity-80 focus:opacity-100"
          resizeMode="cover"
        />
        <View className="bg-[#84cc16] absolute rounded-full w-10 h-10 flex items-center justify-center">
          <AntDesign name="lock" size={24} color="black" />
        </View>
        <View className="w-1/2 flex items-start justify-center p-2 gap-1">
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

// const BonusEpisodes = () => {
//   return (
//     <View className="p-2 mt-2 gap-4 flex-1" style={{flex:1}}>
//       <View className="h-32 flex flex-row bg-slate-100 dark:bg-stone-950 rounded-3xl p-2 ">
//         <Image
//           source={require("@/assets/images/samay.avif")}
//           className="w-1/2 h-full border-white/10 border-2 rounded-3xl mb-2 relative dark:opacity-70 opacity-80 focus:opacity-100"
//           resizeMode="cover"
//         />
//         <View className="bg-[#84cc16] absolute rounded-full w-10 h-10 flex items-center justify-center">
//           <AntDesign name="lock" size={24} color="black" />
//         </View>
//         <View className="w-1/2 flex items-start justify-center p-2 gap-1">
//           <Text className="text-black dark:text-white truncate line-clamp-1">
//             Samay SamaySamaySamaySamay
//           </Text>
//           <View className="text-black dark:text-white flex flex-row items-center justify-center gap-2">
//             <View className="bg-[#84cc16] rounded-full w-6 h-6 flex items-center justify-center">
//               <AntDesign name="caretright" size={12} color="black" />
//             </View>
//             <Text className="text-black dark:text-white truncate line-clamp-1">
//               Play Video
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View className="h-32 flex flex-row bg-slate-100 dark:bg-stone-950 rounded-3xl p-2 ">
//         <Image
//           source={require("@/assets/images/samay.avif")}
//           className="w-1/2 h-full border-white/10 border-2 rounded-3xl mb-2 relative dark:opacity-70 opacity-80 focus:opacity-100"
//           resizeMode="cover"
//         />
//         <View className="bg-[#84cc16] absolute rounded-full w-10 h-10 flex items-center justify-center">
//           <AntDesign name="lock" size={24} color="black" />
//         </View>
//         <View className="w-1/2 flex items-start justify-center p-2 gap-1">
//           <Text className="text-black dark:text-white truncate line-clamp-1">
//             Samay SamaySamaySamaySamay
//           </Text>
//           <View className="text-black dark:text-white flex flex-row items-center justify-center gap-2">
//             <View className="bg-[#84cc16] rounded-full w-6 h-6 flex items-center justify-center">
//               <AntDesign name="caretright" size={12} color="black" />
//             </View>
//             <Text className="text-black dark:text-white truncate line-clamp-1">
//               Play Video
//             </Text>
//           </View>
//         </View>
//       </View><View className="h-32 flex flex-row bg-slate-100 dark:bg-stone-950 rounded-3xl p-2 ">
//         <Image
//           source={require("@/assets/images/samay.avif")}
//           className="w-1/2 h-full border-white/10 border-2 rounded-3xl mb-2 relative dark:opacity-70 opacity-80 focus:opacity-100"
//           resizeMode="cover"
//         />
//         <View className="bg-[#84cc16] absolute rounded-full w-10 h-10 flex items-center justify-center">
//           <AntDesign name="lock" size={24} color="black" />
//         </View>
//         <View className="w-1/2 flex items-start justify-center p-2 gap-1">
//           <Text className="text-black dark:text-white truncate line-clamp-1">
//             Samay SamaySamaySamaySamay
//           </Text>
//           <View className="text-black dark:text-white flex flex-row items-center justify-center gap-2">
//             <View className="bg-[#84cc16] rounded-full w-6 h-6 flex items-center justify-center">
//               <AntDesign name="caretright" size={12} color="black" />
//             </View>
//             <Text className="text-black dark:text-white truncate line-clamp-1">
//               Play Video
//             </Text>
//           </View>
//         </View>
//       </View><View className="h-32 flex flex-row bg-slate-100 dark:bg-stone-950 rounded-3xl p-2 ">
//         <Image
//           source={require("@/assets/images/samay.avif")}
//           className="w-1/2 h-full border-white/10 border-2 rounded-3xl mb-2 relative dark:opacity-70 opacity-80 focus:opacity-100"
//           resizeMode="cover"
//         />
//         <View className="bg-[#84cc16] absolute rounded-full w-10 h-10 flex items-center justify-center">
//           <AntDesign name="lock" size={24} color="black" />
//         </View>
//         <View className="w-1/2 flex items-start justify-center p-2 gap-1">
//           <Text className="text-black dark:text-white truncate line-clamp-1">
//             Samay SamaySamaySamaySamay
//           </Text>
//           <View className="text-black dark:text-white flex flex-row items-center justify-center gap-2">
//             <View className="bg-[#84cc16] rounded-full w-6 h-6 flex items-center justify-center">
//               <AntDesign name="caretright" size={12} color="black" />
//             </View>
//             <Text className="text-black dark:text-white truncate line-clamp-1">
//               Play Video
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

export default BonusEpisodes;
