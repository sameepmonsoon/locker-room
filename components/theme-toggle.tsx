import { useTheme } from "next-themes";
import { Platform } from "react-native";
import { Fab } from "./ui/fab";
import { Icon, MoonIcon, SunIcon } from "./ui/icon";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as SecureStore from "expo-secure-store";

export function ThemeToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    const newTheme = isDarkColorScheme ? "light" : "dark";

    if (Platform.OS === "web") {
      setTheme(theme === "dark" ? "light" : "dark");
    } else {
      setColorScheme(newTheme);
      SecureStore.setItem("theme", newTheme);
    }
  };
  return (
    <Fab
      className="bottom-10 sm:right-10 right-6 p-4 z-0"
      onPress={handleToggleTheme}
    >
      <Icon
        as={isDarkColorScheme ? SunIcon : MoonIcon}
        className="text-typography-0"
      />
    </Fab>
  );
}
