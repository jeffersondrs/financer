import { Text, View, TouchableOpacity } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

type ItemsProps = {
  title: string;
  value: number;
  date: string;
  status: string;
  month?: string;
};

export default function Items({ title, value, date, status }: ItemsProps) {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const valorFormatado = (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomColor: "#ffd500",
        borderBottomWidth: 5,
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins_400Regular",
            color: "#ffd500",
            letterSpacing: 1.3,
            lineHeight: 30,
            maxWidth: 250,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Poppins_400Regular",
            color: "#ffd500",
            letterSpacing: 1.3,
            lineHeight: 30,
          }}
        >
          {date}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 17,
          fontFamily: "Poppins_400Regular",
          color: status === "Entrada" ? "#1eff00" : "#fa3b1a",
          letterSpacing: 1.3,
          lineHeight: 30,
        }}
      >
        {status === "Entrada" ? "" : "-"} {}
        {valorFormatado}
      </Text>
    </TouchableOpacity>
  );
}
