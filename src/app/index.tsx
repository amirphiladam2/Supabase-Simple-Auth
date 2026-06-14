import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const launched = await AsyncStorage.getItem('already_launched');

      if (!launched) {
        await AsyncStorage.setItem('already_launched', 'true');
        setIsFirstLaunch(true);
      }
      setIsLoading(false);
    };

    checkFirstLaunch();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isFirstLaunch) {
    return <Redirect href="/OnboardingScreen" />;
  }

  return <Redirect href="/(auth)/AuthScreen" />;
}