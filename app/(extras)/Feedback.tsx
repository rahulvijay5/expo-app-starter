import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import { MaterialIcons } from '@expo/vector-icons';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleStarPress = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Handle feedback submission logic here
    if (rating === 0) {
      Alert.alert('Please select a rating');
      return;
    }else{
      console.log('Rating:', rating);
      console.log('Feedback:', feedback);
      Alert.alert('Feedback submitted successfully');
    }
    
  };

  return (
    <View className="p-2 mt-2">
      <View className="flex flex-col gap-2 borderpy-4 rounded-2xl">
        <View className="flex-row justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Pressable key={star} onPress={() => handleStarPress(star)}>
              <MaterialIcons
                name={star <= rating ? 'star' : 'star-border'}
                size={50}
                color={star <= rating ? '#84cc16' : 'gray'}
              />
            </Pressable>
          ))}
        </View>
        <TextInput
          value={feedback}
          onChangeText={setFeedback}
          placeholder="Write your feedback here..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={4}
          className="bg-gray-200 rounded-lg p-2 h-44"
        />
        <Button onPress={handleSubmit} className="bg-black dark:bg-white">
          <Text className="text-white dark:text-black font-semibold">Submit</Text>
        </Button>
      </View>
    </View>
  );
};

export default Feedback;