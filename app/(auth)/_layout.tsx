import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{ animation: "slide_from_right", headerShown: false }}>
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Register" }} />
      </Stack>
      <StatusBar backgroundColor="#640046" style="light" />
    </>
  );
};

export default AuthLayout;
