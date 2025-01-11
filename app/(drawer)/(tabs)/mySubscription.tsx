import { View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Text } from '~/components/ui/text'
const mySubscription = () => {
  return (
    <View className="flex-1 items-center justify-end">
      <Text>No Content available right now.</Text>
      <Image source={require("@/assets/images/cart.png")} className="h-60 w-60 opacity-70 translate-y-4" />
    </View>
  )
}

export default mySubscription