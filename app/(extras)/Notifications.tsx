import { View, Text, Image, Pressable, ScrollView, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { formatDistanceToNow } from 'date-fns'

interface Notification {
  id: string;
  title: string;
  description: string;
  image?: ImageSourcePropType;
  timestamp: Date;
  isLiked: boolean;
  isNew: boolean;
}

const dummyNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Episode Released!',
    description: 'Watch the latest episode of "Comedy Nights" with Samay Raina',
    image: require('@/assets/images/icon.png'),
    timestamp: new Date(2025, 1, 6, 14, 30),
    isLiked: false,
    isNew: true
  },
  {
    id: '2',
    title: 'Membership Expiring Soon',
    description: 'Your premium membership will expire in 3 days. Renew now to continue enjoying exclusive content!',
    timestamp: new Date(2025, 1, 5, 10, 15),
    isLiked: false,
    isNew: true
  },
  {
    id: '3',
    title: 'Live Show Alert',
    description: 'Samay is going live in 30 minutes. Don\'t miss out!',
    image: require('@/assets/images/icon.png'),
    timestamp: new Date(2025, 1, 3, 20, 45),
    isLiked: true,
    isNew: false
  },
  {
    id: '4',
    title: 'New Comment on Your Post',
    description: 'John Doe replied to your comment: "That was hilarious! 😂"',
    timestamp: new Date(2024, 12, 31, 15, 20),
    isLiked: false,
    isNew: false
  }
]

const NotificationItem = ({ 
  notification,
  onLike 
}: { 
  notification: Notification
  onLike: (id: string) => void
}) => (
  <View className="p-4 border-b border-gray-100 dark:border-stone-800">
    <View className="flex-row items-start">
      {notification.isNew && (
        <View className="w-2 h-2 rounded-full bg-[#84cc16] mt-2 mr-2" />
      )}
      <View className="flex-1">
        <View className="flex-row items-start justify-between">
          <Text className="text-base font-medium text-black dark:text-white flex-1">
            {notification.title}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
          </Text>
        </View>
        
        <Text className="text-gray-500 dark:text-gray-400 mt-1">
          {notification.description}
        </Text>

        {notification.image && (
          <Image 
            source={notification.image}
            className="w-full h-48 rounded-xl mt-2"
            resizeMode="cover"
          />
        )}

        <View className="flex-row items-center justify-end mt-2">
          <Pressable
            onPress={() => onLike(notification.id)}
            className="flex-row items-center"
          >
            <MaterialCommunityIcons
              name={notification.isLiked ? "heart" : "heart-outline"}
              size={20}
              color={notification.isLiked ? "#ef4444" : "#84cc16"}
            />
            <Text className="ml-1 text-gray-500 dark:text-gray-400">
              Like
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  </View>
)

const Notifications = () => {
  const [notifications, setNotifications] = useState(dummyNotifications)
  const hasNewNotifications = notifications.some(n => n.isNew)

  const handleLike = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, isLiked: !notification.isLiked }
        : notification
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isNew: false
    })))
  }

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-stone-800">
        <Text className="text-lg font-semibold text-black dark:text-white">
          Notifications
        </Text>
        {hasNewNotifications && (
          <Pressable onPress={markAllAsRead}>
            <Text className="text-[#84cc16]">
              Mark all as read
            </Text>
          </Pressable>
        )}
      </View>

      <ScrollView>
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onLike={handleLike}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Notifications