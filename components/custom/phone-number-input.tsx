import React, { useState } from "react";
import { View, Text } from "react-native";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-native-international-phone-number";
import { HStack } from "../ui/hstack";

export default function PhoneNumberInput() {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country: any) {
    setSelectedCountry(country);
  }

  return (
    <HStack className="p-6 w-full flex-1">
      <PhoneInput
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
      />
      <View style={{ marginTop: 10 }}>
        <Text>
          Country: {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
        </Text>
        <Text>
          Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
        </Text>
        <Text>
          isValid:{" "}
          {isValidPhoneNumber(inputValue, selectedCountry) ? "true" : "false"}
        </Text>
      </View>
    </HStack>
  );
}
