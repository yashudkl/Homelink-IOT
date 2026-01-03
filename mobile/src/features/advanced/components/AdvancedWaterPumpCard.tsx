import React from 'react';
import { View, Text, Switch } from 'react-native';
import { PercentagePicker } from '../../../shared/components';

interface AdvancedWaterPumpCardProps {
  autoStartWhenLow: boolean;
  automatedSettings: boolean;
  waterLevelThreshold: string;
  biometricsEnabled: boolean;
  onAutoStartWhenLowChange: (value: boolean) => void;
  onAutomatedSettingsChange: (value: boolean) => void;
  onWaterLevelThresholdChange: (value: string) => void;
  onBiometricsChange: (value: boolean) => void;
}

export const AdvancedWaterPumpCard: React.FC<AdvancedWaterPumpCardProps> = ({
  autoStartWhenLow,
  automatedSettings,
  waterLevelThreshold,
  biometricsEnabled,
  onAutoStartWhenLowChange,
  onAutomatedSettingsChange,
  onWaterLevelThresholdChange,
  onBiometricsChange,
}) => {
  return (
    <View className="mb-8">
      <View className="mb-6">
        <Text className="text-lg font-bold text-dark">Water Pump Settings</Text>
        <Text className="text-gray-500 text-sm">Configure advanced pump controls</Text>
      </View>

      {/* Auto start when water level is low */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Auto start when water level is low</Text>
          <Text className="text-gray-500 text-xs mt-1">Automatically start pump when water is low</Text>
        </View>
        <Switch
          value={autoStartWhenLow}
          onValueChange={onAutoStartWhenLowChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Automated water pump settings */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
        <View className="flex-1">
          <Text className="text-dark text-sm font-medium">Automated water pump settings</Text>
          <Text className="text-gray-500 text-xs mt-1">Enable smart pump automation</Text>
        </View>
        <Switch
          value={automatedSettings}
          onValueChange={onAutomatedSettingsChange}
          trackColor={{ false: '#E5E7EB', true: '#000000' }}
          thumbColor="#ffffff"
        />
      </View>

      {/* Water level threshold */}
      <View className="py-3 border-b border-gray-100">
        <Text className="text-dark text-sm font-medium mb-2">Start pump when water level below</Text>
        <PercentagePicker
          value={waterLevelThreshold}
          onChange={onWaterLevelThresholdChange}
          placeholder="Select percentage"
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