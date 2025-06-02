import { Box } from "@/components/ui/box";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import RegisterForm from "@/components/modules/forms/register-form";
import GoogleBtn from "@/components/custom/buttons/google-btn";
import HorizontalDivider from "@/components/custom/divider/horizontal-divider";

const RegisterPage = () => {
  return (
    <ScrollView
      className="bg-background-0"
      contentContainerClassName="px-3 pb-6 h-full">
      <Box className="p-5 rounded-lg m-3 mt-5 bg-background-0 gap-2 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full h-full justify-center self-center overflow-hidden">
        <Text className="text-2xl font-bold text-center h-8">
          Welcome to Locker Room
        </Text>
        <Text className="text-sm text-center h-6">Create your account</Text>
        <Divider className="my-2" />
        <GoogleBtn />
        <HorizontalDivider />
        <RegisterForm />
      </Box>
    </ScrollView>
  );
};

export default RegisterPage;
