import { Text, View, ActivityIndicator } from 'react-native';
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'P-Bold': require('./../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'P-Regular': require('./../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Light':require('./../assets/fonts/Poppins/Poppins-Light.ttf'),
    'SemiBold':require('./../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'G-Bold':require('@/assets/fonts/GowunBatang/GowunBatang-Bold.ttf'),
    'G-Regular':require('./../assets/fonts/GowunBatang/GowunBatang-Regular.ttf')
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error loading fonts</Text>
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="Login" options={{headerShown: false}}/>
      <Stack.Screen name='SignUp' options={{headerShown: false}}/>
      <Stack.Screen name='MainPage' options={{headerShown: false}}/>
    </Stack>
  );
}
