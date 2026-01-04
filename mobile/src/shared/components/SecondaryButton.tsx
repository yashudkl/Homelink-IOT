import React from 'react';
import { Pressable, Text } from 'react-native';

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

export const SecondaryButton = ({ title, onPress, className }: SecondaryButtonProps) => {
  return (
    <Pressable
      className={`py-4 px-8 rounded-xl items-center justify-center border border-gray-300 bg-light ${className ?? ''}`}
      onPress={onPress}
    >
      <Text className="text-textPrimary text-md font-medium">{title}</Text>
    </Pressable>
  );
};
