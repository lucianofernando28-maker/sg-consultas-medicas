import AppointmentsCard from "@/src/components/appointments-card";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddAppointments from "../screen/add-appointments";

const Consult = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <SafeAreaView
      className="flex-1 bg-gray-50"
      edges={["top", "left", "right"]}
    >
      <ScrollView
        className="flex-1 px-5 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View className="flex-row items-center justify-between py-4 mb-2">
            <Text className="text-2xl font-bold text-gray-900">
              CONSULTAS CONFIRMADAS
            </Text>
            <TouchableOpacity
              onPress={() => setShowAddForm(!showAddForm)}
              className="w-11 h-11 rounded-full bg-blue-600 items-center justify-center shadow-sm active:bg-blue-700"
            >
              <Ionicons name="add" size={26} color="white" />
            </TouchableOpacity>
          </View>

          <AppointmentsCard
            date="12:30 - 12/08/2026"
            doctor="ª Edeltrudes Fernando"
            type="Medicina Geral"
          />
        </View>

        {showAddForm && (
          <AddAppointments
            visible={showAddForm}
            onClose={() => setShowAddForm(false)}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Consult;
