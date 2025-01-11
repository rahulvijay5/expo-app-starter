import { View } from 'react-native'
import React, { useState } from 'react'
import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'

const ConnectMembership = () => {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <View  className="p-2">
    <View className="p-2 rounded-2xl flex flex-col gap-2 border border-gray-200 dark:border-gray-800 py-4">
      {isConnected ? (
        <Button className="bg-red-500"> <Text className="text-white dark:text-black">Disconnect Your Youtube Membership</Text></Button>
      ) : (
        <Button className="bg-black dark:bg-white"> <Text className="text-white dark:text-black">Connect Membership</Text></Button>
      )}<Text className="text-lg">It may take upto 24 hours to connect your youtube membership to app.</Text>
    </View>
    </View>
  )
}

export default ConnectMembership