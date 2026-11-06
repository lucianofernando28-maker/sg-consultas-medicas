import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/*
const links = [
  { id: 1, title: "Início", url: "/index" as const },
  { id: 2, title: "Pacientes", url: "/patient" as const },
  { id: 3, title: "Consultas", url: "/consult" as const },
  { id: 4, title: "Perfil", url: "" as const },
];*/

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 bg-gray-50"
      edges={["top", "left", "right"]}
    >
      <ScrollView
        className="flex-1 px-5 pt-2"
        showsVerticalScrollIndicator={false}
      >
       
        <Text className="text-gray-500 text-base mb-6">
          RESUMO DE CONSULTAS
        </Text>

        {/* Cards de Resumo */}
        <View className="flex-row justify-between mb-6">
          {/* Card Consultas Futuras */}
          <View className="w-[48%] bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
            <View className="w-10 h-10 rounded-xl bg-blue-100 items-center justify-center mb-3">
              <Ionicons name="calendar" size={20} color="#2563EB" />
            </View>
            <Text className="text-2xl font-bold text-gray-900 mb-1">3</Text>
            <Text className="text-gray-500 font-medium text-sm">
              Consultas futuras
            </Text>
          </View>

          {/* Card Consultas Anteriores */}
          <View
            className="w-[48%] bg-emerald-50/60 p-4 rounded-2xl border 
border-emerald-100"
          >
            <View
              className="w-10 h-10 rounded-xl bg-emerald-100 items-center justify-center 
mb-3"
            >
              <Ionicons
                name="checkmark-done-circle"
                size={20}
                color="#059669"
              />
            </View>
            <Text className="text-2xl font-bold text-gray-900 mb-1">5</Text>
            <Text className="text-gray-500 font-medium text-sm">
              Consultas anteriores
            </Text>
          </View>
        </View>

        {/* Botão Marcar Nova Consulta */}
        <TouchableOpacity
          className="bg-blue-600 flex-row justify-center items-center py-4 
rounded-2xl mb-8 shadow-sm active:bg-blue-700"
        >
          <Link
            href={"/consult"}
            className="text-white font-semibold text-base ml-2"
          >
            <Ionicons name="add" size={20} color="#FFFFFF" />
            <Text className="text-white font-bold text-base ml-2">
              Marcar nova consulta
            </Text>
          </Link>
        </TouchableOpacity>

        {/* Seção Próximas Consultas */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-900">
            Próximas consultas
          </Text>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-blue-600 font-medium mr-1">Ver todas</Text>
            <Ionicons name="chevron-forward" size={16} color="#2563EB" />
          </TouchableOpacity>
        </View>

        {/* Card Médico 1 */}
        <TouchableOpacity
          className="bg-white p-4 rounded-2xl border border-gray-100 flex-row 
items-center justify-between mb-3 shadow-xs"
        >
          <View className="flex-row items-center flex-1">
            <View
              className="w-12 h-12 rounded-full bg-emerald-100 items-center justify-center 
mr-3"
            >
              <Ionicons name="medkit-outline" size={24} color="#059669" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-gray-900">
                Dr. Carlos Silva
              </Text>
              <Text className="text-gray-400 text-sm mb-1">Medicina Geral</Text>
              <Text className="text-gray-500 text-xs font-medium">
                12 Jan 2027 • 10:30
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Card Médico 2 */}
        <TouchableOpacity
          className="bg-white p-4 rounded-2xl border border-gray-100 flex-row 
items-center justify-between mb-8 shadow-xs"
        >
          <View className="flex-row items-center flex-1">
            <View
              className="w-12 h-12 rounded-full bg-rose-100 items-center justify-center 
mr-3"
            >
              <Ionicons name="heart-outline" size={24} color="#E11D48" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-gray-900">
                Dra. Mariana Costa
              </Text>
              <Text className="text-gray-400 text-sm mb-1">Cardiologia</Text>
              <Text className="text-gray-500 text-xs font-medium">
                28 Dez 2026 • 14:00
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  link: {
    color: "red",
    fontWeight: "bold",
  },
});
