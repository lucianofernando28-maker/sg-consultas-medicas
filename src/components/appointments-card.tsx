import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface AppointmentsCardProps {
  date: string;
  doctor: string;
  type: string;
  onPress?: () => void;   
}

const AppointmentsCard = ({
  date,
  doctor,
  type,
  onPress,
}: AppointmentsCardProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-gray-100 flex-row justify-between items-center py-4 px-4 rounded-2xl mb-6 shadow-sm border border-gray-400 active:bg-gray-300"
  >
    <View className="flex-row items-center flex-1">
      <View className="w-12 h-12 rounded-full items-center justify-center mr-4 bg-gray-300">
        <Ionicons name="calendar-outline" size={32} color="#4B5563" />
      </View>

      <View className="flex-1 items-start">
        <Text className="text-xl font-bold text-gray-900">{date}</Text>
        <Text className="text-xl font-bold text-slate-800">Dr{doctor}</Text>
        <Text className="text-base font-bold text-slate-600">{type}</Text>
      </View>
    </View>

    <View className="bg-green-400 rounded-2xl flex-row mr-4 p-3 items-center">
      <Text className="text-lg font-bold text-slate-100">Confirmada </Text>
      <Ionicons name="checkmark-circle-outline" size={25} color="white" />
    </View>
  </TouchableOpacity>
);

export default AppointmentsCard;
