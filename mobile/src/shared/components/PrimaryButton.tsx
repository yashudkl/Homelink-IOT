import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  loading?: boolean;
}

export const PrimaryButton = ({ title, onPress, className, loading = false }: PrimaryButtonProps) => {
  return (
    <Pressable
      className={`py-4 px-8 rounded-xl items-center justify-center bg-primary ${className ?? ''}`}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text className="text-light text-md font-semibold">{title}</Text>
      )}
    </Pressable>
  );
};
