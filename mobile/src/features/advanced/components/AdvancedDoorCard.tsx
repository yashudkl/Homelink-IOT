import React from 'react';
import { View, Text, Switch } from 'react-native';
import { TimePicker } from '../../../shared/components';

interface AdvancedDoorCardProps {
  autoLockWhenOutside: boolean;
  automatedSettings: boolean;
  lockTime: string;
  unlockTime: string;
  biometricsEnabled: boolean;
  onAutoLockWhenOutsideChange: (value: boolean) => void;
  onAutomatedSettingsChange: (value: boolean) => void;
  onLockTimeChange: (value: string) => void;
  onUnlockTimeChange: (value: string) => void;
  onBiometricsChange: (value: boolean) => void;
}

export const AdvancedDoorCard: React.FC<AdvancedDoorCardProps> = ({
  autoLockWhenOutside,
  automatedSettings,
  lockTime,
  unlockTime,
  biometricsEnabled,
  onAutoLockWhenOutsideChange,
  onAutomatedSettingsChange,
  onLockTimeChange,
  onUnlockTimeChange,
  onBiometricsChange,
}) => {
  return (
    <View className="mb-8">
      <View className="mb-6">
        <Text className="text-lg font-bold text-dark">Door Settings</Text>
        <Text className="text-gray-500 text-sm">Configure advanced door controls</Text>
      </View>

      {/* Auto lock when user is outside */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Auto lock when user is outside</Text>
          <Text className="text-gray-500 text-xs mt-1">Automatically lock door when you leave</Text>
        </View>
        <Switch
          value={autoLockWhenOutside}
          onValueChange={onAutoLockWhenOutsideChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Automated door settings */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Automated door settings</Text>
          <Text className="text-gray-500 text-xs mt-1">Enable smart door automation</Text>
        </View>
        <Switch
          value={automatedSettings}
          onValueChange={onAutomatedSettingsChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Lock time */}
      <View className="py-3 border-b border-gray-100">
        <Text className="text-dark text-sm font-medium mb-2">Lock door everytime at</Text>
        <TimePicker
          value={lockTime}
          onChange={onLockTimeChange}
          placeholder="Select time"
        />
      </View>

      {/* Unlock time */}
      <View className="py-3 border-b border-gray-100">
        <Text className="text-dark text-sm font-medium mb-2">Unlock door everytime at</Text>
        <TimePicker
          value={unlockTime}
          onChange={onUnlockTimeChange}
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