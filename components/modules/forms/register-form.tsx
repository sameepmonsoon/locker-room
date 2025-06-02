import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { EyeIcon, EyeOffIcon, Phone } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
import { Link } from "expo-router";
import { RegisterSchema, RegisterSchemaType } from "@/schema/auth/register";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Form submitted:", data);
    // Handle sign in logic here
  };
  return (
    <Center className="rounded-xl bg-background-0 gap-4">
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl isInvalid={!!errors.phoneNumber} className="w-full">
            <FormControlLabel>
              <FormControlLabelText size="sm">
                Phone Number
              </FormControlLabelText>
            </FormControlLabel>
            <Input className="h-12 rounded-lg">
              <InputSlot
                onPress={() => setShowPassword(!showPassword)}
                className="w-[40px] h-full">
                <InputIcon as={Phone} />
              </InputSlot>
              <HStack>
                <Text className="px-0">+977</Text>
              </HStack>
              <InputField
                placeholder="Enter your phone number"
                value={value.replace(/[^0-9]/g, "")}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="phone-pad"
                maxLength={10}
              />
            </Input>
            {errors.phoneNumber && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText size="xs">
                  {errors.phoneNumber.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl isInvalid={!!errors.password} className="w-full">
            <FormControlLabel>
              <FormControlLabelText size="sm">Password</FormControlLabelText>
            </FormControlLabel>
            <Input className="h-12 rounded-lg">
              <InputField
                placeholder="Enter your password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!showPassword}
              />
              <InputSlot
                onPress={() => setShowPassword(!showPassword)}
                className="mr-3">
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
            {errors.password && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText size="xs">
                  {errors.password.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl isInvalid={!!errors.confirmPassword} className="w-full">
            <FormControlLabel>
              <FormControlLabelText size="sm">
                Confirm Password
              </FormControlLabelText>
            </FormControlLabel>
            <Input className="h-12 rounded-lg">
              <InputField
                placeholder="Confirm your password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!showConfirmPassword}
              />
              <InputSlot
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="mr-3">
                <InputIcon as={showConfirmPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
            {errors.confirmPassword && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText size="xs">
                  {errors.confirmPassword.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        )}
      />
      <Button
        className="mt-4 w-full bg-primary-600 h-12 rounded-lg"
        size="sm"
        onPress={handleSubmit(onSubmit)}>
        <ButtonText>Create Account</ButtonText>
      </Button>

      <HStack className="mt-4 text-center justify-center items-center gap-2">
        <Text>{`Already have an account?`}</Text>
        <Link
          href="/(auth)/login"
          replace
          className="flex flex-row justify-center items-center">
          <LinkText className="no-underline">Sign In</LinkText>
        </Link>
      </HStack>

      <Text className="mt-6 text-xs text-center text-typography-400">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </Text>
    </Center>
  );
};

export default RegisterForm;
