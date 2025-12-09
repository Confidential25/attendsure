import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      
      {/* Main entry */}
      <Stack.Screen name="index" />

      {/* Auth Screens */}
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />

      {/* QR Screens */}
      <Stack.Screen name="scan-qr" />
      <Stack.Screen name="scan-result" />

      {/* Other screens */}
      <Stack.Screen name="create-account" />
      <Stack.Screen name="forgot-password" />

      {/* Tabs folder */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
    </Stack>
  );
}
