import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface PatientCardProps {
  name: string;
  details: string;
  onPress?: () => void;
}

const PatientCard = ({ name, details, onPress }: PatientCardProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-gray-100 flex-row justify-between items-center py-4 px-4 rounded-2xl mb-6 shadow-sm border border-gray-400 active:bg-gray-300"
  >
    <View className="flex-row items-center flex-1">
      <View className="w-12 h-12 rounded-full items-center justify-center mr-4 bg-gray-300">
        <Ionicons name="person" size={32} color="#4B5563" />
      </View>

      <View className="flex-1 items-start">
        <Text className="text-xl font-bold text-gray-900">{name}</Text>
        <Text className="text-base font-bold text-slate-600">{details}</Text>
      </View>
    </View>

    <Ionicons name="chevron-forward" size={25} color="grey" />
  </TouchableOpacity>
);

export default PatientCard;
