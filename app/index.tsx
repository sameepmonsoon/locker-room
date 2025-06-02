import { SafeAreaView } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";
import { cssInterop } from "nativewind";
import OnBoardingCarousel from "@/components/custom/carousel/on-boarding-carousel";

cssInterop(SafeAreaView, { className: "style" });
cssInterop(ExpoImage, { className: "style" });

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-0 relative">
      <OnBoardingCarousel />
    </SafeAreaView>
  );
}
