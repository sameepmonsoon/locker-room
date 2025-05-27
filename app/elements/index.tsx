import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { componentsList } from "@/utils/list";
import { ScrollView } from "@/components/ui/scroll-view";
import { Box } from "@/components/ui/box";
import { Image as ExpoImage } from "expo-image";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { cssInterop } from "nativewind";
import { HStack } from "@/components/ui/hstack";
import { ChevronRightIcon, Icon } from "@/components/ui/icon";
import { useTheme } from "@/context/theme-context";

cssInterop(SafeAreaView, { className: "style" });
cssInterop(ExpoImage, { className: "style" });

const ComponentCard = ({ component, onPress }: any) => {
  const { colorMode }: any = useTheme();
  return (
    <Pressable
      className={`flex-1 rounded-xl bg-background-0 w-full h-full sm:gap-2 gap-1 flex flex-col lg:p-4 ${colorMode === "light" ? "lg:shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)] data-[hover=true]:lg:border data-[hover=true]:border-outline-100" : "lg:shadow-soft-1 lg:border border-outline-50 data-[hover=true]:border-outline-200"}`}
      onPress={onPress}
    >
      <Box className="rounded-lg bg-background-50 px-3 lg:px-6 py-[14px] lg:py-7 aspect-[17/12]">
        <ExpoImage
          source={{
            uri: colorMode === "light" ? component.url : component.darkUrl,
          }}
          alt={component.title}
          className={`flex-1 rounded lg:rounded-md shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]`}
          cachePolicy="memory-disk"
        />
      </Box>
      <HStack className="justify-between px-1.5 mt-1">
        <Text className="text-typography-900 font-medium sm:text-base text-sm lg:text-xl">
          {component.title}
        </Text>
        <Icon
          as={ChevronRightIcon}
          size="sm"
          className="text-background-400 lg:hidden"
        />
      </HStack>
    </Pressable>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView>
      <HStack className="bg-background-0 relative flex-wrap justify-center gap-x-3 gap-y-4 md:gap-x-4 lg:gap-x-7 lg:gap-y-8 py-6 px-5 md:px-8 md:pt-9 xl:pt-[90px] lg:pt-[70px] lg:px-[70px] xl:px-[100px] max-w-[1730px] mx-auto">
        {componentsList.map((component, index) => (
          <Box
            key={index}
            className="w-[160px] h-[145px] md:w-[224px] md:h-[194px] lg:w-[274px] lg:h-[244px] xl:w-[390px] xl:h-[328px]"
          >
            <ComponentCard
              component={component}
              //@ts-ignore
              onPress={() => router.push(component.link)}
            />
          </Box>
        ))}
      </HStack>
    </ScrollView>
  );
}
