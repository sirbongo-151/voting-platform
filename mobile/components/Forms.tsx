import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface FormsProps extends TextInputProps {
  title?: string;
}

export default function Forms({
  title,
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  ...rest
}: FormsProps) {
  const [showSecretKey, setShowSecretKey] = useState(false);

  const togglePasswordVisibility = () => {
    setShowSecretKey(!showSecretKey);
  };

  const isSecretKeyField = title === "Secret Key" && secureTextEntry;

  return (
    <View className="mb-5">
      {title ? (
        <Text className="text-gray-500 text-xl font-semibold mb-2">
          {title}
        </Text>
      ) : null}

      <View className="flex-row items-center border border-gray-500 rounded-lg bg-gray-800">
        <TextInput
          className="flex-1 p-4 text-white"
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isSecretKeyField && !showSecretKey}
          {...rest}
        />

        {isSecretKeyField && (
          <TouchableOpacity onPress={togglePasswordVisibility} className="px-3">
            <Ionicons
              name={showSecretKey ? "eye-off-sharp" : "eye-sharp"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
