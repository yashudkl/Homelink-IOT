import React from 'react';
import { View, Text, Switch } from 'react-native';
import { TemperaturePicker } from '../../../shared/components';

interface AdvancedFanCardProps {
  turnOnWhenInside: boolean;
  automatedSettings: boolean;
  temperatureThreshold: string;
  biometricsEnabled: boolean;
  onTurnOnWhenInsideChange: (value: boolean) => void;
  onAutomatedSettingsChange: (value: boolean) => void;
  onTemperatureThresholdChange: (value: string) => void;
  onBiometricsChange: (value: boolean) => void;
}

export const AdvancedFanCard: React.FC<AdvancedFanCardProps> = ({
  turnOnWhenInside,
  automatedSettings,
  temperatureThreshold,
  biometricsEnabled,
  onTurnOnWhenInsideChange,
  onAutomatedSettingsChange,
  onTemperatureThresholdChange,
  onBiometricsChange,
}) => {
  return (
    <View className="mb-8">
      <View className="mb-6">
        <Text className="text-lg font-bold text-dark">Fan Settings</Text>
        <Text className="text-gray-500 text-sm">Configure advanced fan controls</Text>
      </View>

      {/* Turn on when user is inside */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Turn on when user is inside</Text>
          <Text className="text-gray-500 text-xs mt-1">Automatically turn on fan when you enter</Text>
        </View>
        <Switch
          value={turnOnWhenInside}
          onValueChange={onTurnOnWhenInsideChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Automated fan settings */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Automated fan settings</Text>
          <Text className="text-gray-500 text-xs mt-1">Enable smart fan automation</Text>
        </View>
        <Switch
          value={automatedSettings}
          onValueChange={onAutomatedSettingsChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Temperature threshold */}
      <View className="py-3 border-b border-gray-100">
        <Text className="text-dark text-sm font-medium mb-2">Turn on fan at temperature</Text>
        <TemperaturePicker
          value={temperatureThreshold}
          onChange={onTemperatureThresholdChange}
          placeholder="Select temperature"
        />
      </View>

      {/* Biometrics */}
      <View className="flex-row items-center justify-between py-3">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Requires biometric</Text>
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