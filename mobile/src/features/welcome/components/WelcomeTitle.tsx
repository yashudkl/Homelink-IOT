import React from 'react';
import { View, Text } from 'react-native';

export const WelcomeTitle = () => {
  return (
    <View className="mb-15 mt-6 px-10">
      <Text className="text-2xl text-center leading-9">
        <Text className="font-bold text-primary">Home</Text>
        <Text className="font-normal text-textPrimary">, Simply Within Reach</Text>
      </Text>
    </View>
  );
};
