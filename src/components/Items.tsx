import { Text, View } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

type ItemsProps = {
  title: string;
  value: number;
  date: string;
  status: string;
};

export default function Items({ title, value, date, status }: ItemsProps) {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const valorFormatado = (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomColor: "#ffd500",
        borderBottomWidth: 1,
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
        <Text style={{ fontSize: 20, fontFamily: "Poppins_200ExtraLight", color: "#fff" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 15, fontFamily: "Poppins_200ExtraLight",  color: "#fff"  }}>
          {date}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Poppins_200ExtraLight",
          color: status === "Entrada" ? "#1eff00" : "#fa3b1a",
        }}
      >
        {status === "Entrada" ? "" : "-"} {}
        {valorFormatado}
      </Text>
    </View>
  );
}
