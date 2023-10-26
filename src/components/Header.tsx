import { Text, View, Image } from "react-native";
import { Bell, BellDot } from "lucide-react-native";
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

type FinancePropsComponent = {
  name: string;
  status: string;
  value: number;
  date?: string;
};

export default function Header({
  name,
  status,
  value,
  date,
}: FinancePropsComponent) {
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
        position: "relative",
        alignItems: "flex-start",
        backgroundColor: "#ffd500",
        height: "22%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#000",
          width: "100%",
          height: 100,
        }}
      >
        <Image
          source={require("../../assets/logo.jpg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            position: "absolute",
            bottom: -70,
            left: 10,
            borderColor: "#ffd500",
            borderWidth: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: -65,
            right: 30,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 13,
              fontFamily: "Poppins_500Medium",
            }}
          >
            Valor {status}
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 24,
              fontFamily: "Poppins_500Medium",
            }}
          >
            R$ {valorFormatado}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            position: "relative",
            alignItems: "flex-end",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              padding: 5,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#ffd500",
                  fontSize: 24,
                  fontFamily: "Poppins_300Light_Italic",
                }}
              >
                {name}
              </Text>

              {true ? (
                <BellDot
                  size={24}
                  color="#ffd500"
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -10,
                  }}
                />
              ) : (
                <Bell size={24} color="#ffd500" />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
