import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, LightTheme } from '@/lib/theme';
import { useThemeStore } from '@/store/useThemeStore';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useThemeStore((state) => state.colorScheme);

  const [loaded] = useFonts({
    'Pretendard-Bold': require('../assets/fonts/Pretendard/public/static/Pretendard-Bold.otf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard/public/static/Pretendard-Medium.otf'),
    'Pretendard-Regular': require('../assets/fonts/Pretendard/public/static/Pretendard-Regular.otf'),
    'Pretendard-Light': require('../assets/fonts/Pretendard/public/static/Pretendard-Light.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack>
        <Stack.Screen name="index" options={{
          headerTitle: 'Home'
        }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
