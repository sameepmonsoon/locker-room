import { useState } from "react";
import PhoneInput from "react-native-international-phone-number";

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
       <PhoneInput
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
      />
        );
}
