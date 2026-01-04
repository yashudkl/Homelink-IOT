import React from 'react';
import { View, Text, Switch } from 'react-native';
import { TimePicker } from '../../../shared/components';

interface AdvancedLightCardProps {
  turnOnWhenInside: boolean;
  automatedSettings: boolean;
  turnOffTime: string;
  turnOnTime: string;
  biometricsEnabled: boolean;
  onTurnOnWhenInsideChange: (value: boolean) => void;
  onAutomatedSettingsChange: (value: boolean) => void;
  onTurnOffTimeChange: (value: string) => void;
  onTurnOnTimeChange: (value: string) => void;
  onBiometricsChange: (value: boolean) => void;
}

export const AdvancedLightCard: React.FC<AdvancedLightCardProps> = ({
  turnOnWhenInside,
  automatedSettings,
  turnOffTime,
  turnOnTime,
  biometricsEnabled,
  onTurnOnWhenInsideChange,
  onAutomatedSettingsChange,
  onTurnOffTimeChange,
  onTurnOnTimeChange,
  onBiometricsChange,
}) => {
  return (
    <View className="mb-8">
      <View className="mb-6">
        <Text className="text-lg font-bold text-dark">Light Settings</Text>
        <Text className="text-gray-500 text-sm">Configure advanced light controls</Text>
      </View>

      {/* Turn on when user is inside */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Turn on when user is inside</Text>
          <Text className="text-gray-500 text-xs mt-1">Automatically turn on lights when you enter</Text>
        </View>
        <Switch
          value={turnOnWhenInside}
          onValueChange={onTurnOnWhenInsideChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Automated light settings */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Automated light settings</Text>
          <Text className="text-gray-500 text-xs mt-1">Enable smart lighting automation</Text>
        </View>
        <Switch
          value={automatedSettings}
          onValueChange={onAutomatedSettingsChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Turn off time */}
      <View className="py-3 border-b border-gray-100">
        <Text className="text-dark text-sm font-medium mb-2">Turn off light everytime at</Text>
        <TimePicker
          value={turnOffTime}
          onChange={onTurnOffTimeChange}
          placeholder="Select time"
        />
      </View>

      {/* Turn on time */}
      <View className="py-3 border-b border-gray-100">
        <Text className="text-dark text-sm font-medium mb-2">Turn on light everytime at</Text>
        <TimePicker
          value={turnOnTime}
          onChange={onTurnOnTimeChange}
          placeholder="Select time"
        />
      </View>

      {/* Biometrics */}
      <View className="flex-row items-center justify-between py-3">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Biometrics (Face/Fingerprint)</Text>
          <Text className="text-gray-500 text-xs mt-1">Require biometric authentication</Text>
        </View>
        <Switch
          value={biometricsEnabled}
          onValueChange={onBiometricsChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>
    </View>
  );
};