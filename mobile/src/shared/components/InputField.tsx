import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  Pressable,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  errorText?: string | null;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerClassName?: string;
}

// Simple reusable input with optional label and right icon slot.
export const InputField: React.FC<InputFieldProps> = ({
  label,
  errorText,
  rightIcon,
  onRightIconPress,
  containerClassName,
  style,
  ...rest
}) => {
  return (
    <View className={containerClassName ?? "mb-6"}>
      {label ? (
        <Text className="text-dark text-sm font-medium mb-3">{label}</Text>
      ) : null}
      <View
        className="flex-row items-center bg-light rounded-2xl px-4 border border-gray-300"
        style={{ height: 50 }}
      >
        <TextInput
          className="flex-1 text-dark text-sm"
          placeholderTextColor="#9ca3af"
          style={style}
          {...rest}
        />
        {rightIcon ? (
          <Pressable
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
            style={{ paddingHorizontal: 2, paddingVertical: 4 }}
          >
            {rightIcon}
          </Pressable>
        ) : null}
      </View>
      {errorText ? (
        <Text className="text-red-500 text-xs mt-2">{errorText}</Text>
      ) : null}
    </View>
  );
};
