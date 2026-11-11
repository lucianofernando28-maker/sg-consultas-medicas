import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
}

export const Input = ({
  label,
  error,
  leftIcon,
  isPassword = false,
  secureTextEntry,
  ...rest
}: CustomInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className="mb-4 w-full">
      {/* Rótulo do Input */}
      {label && (
        <Text className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">
          {label}
        </Text>
      )}

      {/* Caixa do Input */}
      <View
        className={`flex-row items-center bg-gray-100 border rounded-2xl px-4 py-3.5 shadow-xs ${
          error
            ? "border-red-500 bg-red-50/30"
            : "border-gray-300 focus:border-emerald-600"
        }`}
      >
        {/* Ícone à Esquerda */}
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color="#6B7280"
            className="mr-3"
          />
        )}

        {/* Campo de Texto */}
        <TextInput
          className="flex-1 text-base text-gray-900 p-1"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={isPassword && !isPasswordVisible}
          {...rest}
        />

        {/* Botão para alternar visibilidade de senha */}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="ml-2"
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#6B7280"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Mensagem de Erro */}
      {error && (
        <Text className="text-xs font-medium text-red-500 mt-1 ml-1">
          {error}
        </Text>
      )}
    </View>
  );
};
