import { Input } from "@/src/components/input";
import { Ionicons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface AddAppointmentsProps {
  visible: boolean;
  onClose: () => void;
}

const AddAppointments = ({ visible, onClose }: AddAppointmentsProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-5">
        <View className="w-full bg-white rounded-2xl p-5 shadow-xl">
          
          <View className="flex-row items-center justify-between pb-4 mb-4 border-b border-gray-100">
            <Text className="text-lg font-bold text-gray-900">
              Nova Consulta
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#6b7280" />
            </TouchableOpacity>
          </View>

          <View className="flex-col space-y-4">
            <Input label="Paciente" leftIcon="person" />
            <Input label="Data" leftIcon="calendar" />
            <Input label="Médico" leftIcon="medical" />
            <Input label="Tipo Consulta" leftIcon="fitness" />
          </View>

          <TouchableOpacity
            onPress={onClose}
            className="w-full h-12 bg-blue-600 rounded-xl items-center justify-center mt-6"
          >
            <Text className="text-white font-semibold text-base">Salvar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default AddAppointments;