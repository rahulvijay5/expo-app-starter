import { View, Text, Image, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import * as Audio from 'expo-av'
import { ScrollView } from 'react-native'

interface Message {
  id: string;
  text?: string;
  image?: string;
  audio?: string;
  timestamp: Date;
  sender: 'user' | 'support';
}

const dummyMessages: Message[] = [
  {
    id: '1',
    text: 'Write to us we will get back to you',
    timestamp: new Date('2024-02-20T10:30:00'),
    sender: 'support'
  },
  {
    id: '2',
    image: require('@/assets/images/icon.png'),
    timestamp: new Date(),
    sender: 'user'
  }
]

const SupportChat = () => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages)
  const [inputMessage, setInputMessage] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  // const [recording, setRecording] = useState<Audio.Recording | null>(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })

    if (!result.canceled) {
      const newMessage: Message = {
        id: Date.now().toString(),
        image: result.assets[0].uri,
        timestamp: new Date(),
        sender: 'user'
      }
      setMessages([...messages, newMessage])
    }
  }

  // const startRecording = async () => {
  //   try {
  //     await Audio.requestPermissionsAsync()
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     })

  //     const { recording } = await Audio.Recording.createAsync(
  //       Audio.RecordingOptionsPresets.HIGH_QUALITY
  //     )
  //     setRecording(recording)
  //     setIsRecording(true)
  //   } catch (err) {
  //     console.error('Failed to start recording', err)
  //   }
  // }

  // const stopRecording = async () => {
  //   if (!recording) return

  //   setIsRecording(false)
  //   await recording.stopAndUnloadAsync()
  //   const uri = recording.getURI()
  //   setRecording(null)

  //   if (uri) {
  //     const newMessage: Message = {
  //       id: Date.now().toString(),
  //       audio: uri,
  //       timestamp: new Date(),
  //       sender: 'user'
  //     }
  //     setMessages([...messages, newMessage])
  //   }
  // }

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage.trim(),
        timestamp: new Date(),
        sender: 'user'
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
    }
  }

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <Stack.Screen 
        options={{
          headerTitle: 'Support Chat',
          headerTitleStyle: { fontSize: 16 },
          headerShadowVisible: false,
        }}
      />
      
      <ScrollView className="flex-1 px-2">
        <View className="py-4">
          <Text className="text-gray-400 text-center text-xs">Yesterday</Text>
        </View>
        
        {messages.map((message) => (
          <View 
            key={message.id}
            className={`mb-4 max-w-[80%]  ${message.sender === 'user' ? 'self-end ml-auto' : 'self-start mr-auto'}`}
          >
            {message.text && (
              <View className={`p-4 ${message.sender === 'user' ? 'bg-[#84cc16] rounded-l-2xl rounded-tr-2xl' : 'bg-gray-100 dark:bg-stone-900 rounded-r-2xl rounded-tl-2xl'}`}>
                <Text className={message.sender === 'user' ? 'text-white' : 'text-black dark:text-white'}>
                  {message.text}
                </Text>
              </View>
            )}
            
            {message.image && (
              <View className="rounded-l-2xl rounded-tr-2xl overflow-hidden">
                <Image 
                  source={typeof message.image === 'string' ? { uri: message.image } : message.image}
                  className="w-48 h-36"
                  resizeMode="cover"
                />
              </View>
            )}

            {message.audio && (
              <View className={`rounded-full p-3 flex-row items-center gap-2 ${message.sender === 'user' ? 'bg-[#84cc16]' : 'bg-gray-100 dark:bg-stone-900'}`}>
                <Ionicons name="play" size={20} color={message.sender === 'user' ? 'white' : '#84cc16'} />
                <View className="w-32 h-1 bg-white/20 rounded-full" />
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className=" border-gray-100 dark:border-stone-800 mb-8 px-2"
      >
        <View className="flex-row items-center p-2 gap-2">
          <Pressable 
            onPress={pickImage}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-stone-900 items-center justify-center"
          >
            <MaterialCommunityIcons name="image-plus" size={24} color="#84cc16" />
          </Pressable>
          

          <TextInput
            value={inputMessage}
            onChangeText={setInputMessage}
            placeholder="Type your message here"
            placeholderTextColor="#999"
            className="flex-1 bg-gray-100 dark:bg-stone-900 rounded-xl px-4 py-3 text-black dark:text-white"
          />
          
          <Pressable 
            onPress={sendMessage}
            className="w-10 h-10 rounded-xl bg-[#84cc16] items-center justify-center"
          >
            <Ionicons name="send" size={20} color="white" />
          </Pressable>

          <Pressable 
            // onPress={isRecording ? stopRecording : startRecording}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-stone-900 items-center justify-center"
          >
            <MaterialCommunityIcons 
              name={isRecording ? "stop" : "microphone"} 
              size={24} 
              color={isRecording ? "red" : "#84cc16"} 
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default SupportChat