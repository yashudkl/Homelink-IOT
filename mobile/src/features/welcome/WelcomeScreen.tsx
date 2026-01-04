import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Logo, WelcomeTitle, ButtonGroup, SignUpLink } from './components';

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();

  const handleGetStarted = () => {
    navigation.navigate('AuthEmail');
  };

  const handleLogin = () => {
    navigation.navigate('AuthEmail');
  };

  const handleSignUp = () => {
    navigation.navigate('AuthEmail');
  };

  return (
    <SafeAreaView className="flex-1 bg-light">
      <View className="flex-1 justify-between py-10 bg-light">
        <View className="flex-1 justify-center items-center">
          <Logo />
          <WelcomeTitle />
        </View>
        
        <View className="pb-5">
          <ButtonGroup 
            onGetStarted={handleGetStarted}
            onLogin={handleLogin}
          />
          <SignUpLink onSignUp={handleSignUp} />
        </View>
      </View>
    </SafeAreaView>
  );
}
