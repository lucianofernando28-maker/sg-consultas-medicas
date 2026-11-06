import PatientCard from "@/src/components/patient-card";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Patient = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-gray-50"
      edges={["top", "left", "right"]}
    >
      <ScrollView
        className="flex-1 px-5 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center justify-between py-4 mb-2">
          <Text className="text-2xl font-bold text-gray-900">
            LISTA DE PACIENTES
          </Text>
          <TouchableOpacity
            onPress={() => console.log("Cadastrar novo paciente")}
            className="w-11 h-11 rounded-full bg-blue-600 items-center justify-center shadow-sm active:bg-blue-700"
          >
            <Ionicons name="add" size={26} color="white" />
          </TouchableOpacity>
        </View>
        {/* Lista de pacientes */}
        <View>
          <PatientCard
            name="Abel Samuel"
            details="29 anos - 922 445 680"
            onPress={() => console.log("Selecionado: Abel Samuel")}
          />

          <PatientCard
            name="Sapalo Fernando"
            details="25 anos - 933 425 498"
            onPress={() => console.log("Selecionado: Sapalo Fernando")}
          />

          <PatientCard
            name="Lucas Maria Pedro"
            details="22 anos - 944 425 555"
            onPress={() => console.log("Selecionado: Lucas Maria Pedro")}
          />

          <PatientCard
            name="Mariana Sapalo"
            details="22 anos - 978 425 960"
            onPress={() => console.log("Selecionado: Mariana Sapalo")}
          />

          <PatientCard
            name="Julio Miguel"
            details="20 anos - 976 425 895"
            onPress={() => console.log("Selecionado: Mariana Sapalo")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Patient;
