import { Text, View, Image } from "react-native";
import { Bell, BellDot } from "lucide-react-native";
import {
  useFonts,
  Poppins_300Light_Italic,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { FinancePropsComponent } from "../types/global-types";

export default function Header({
  name,
  status,
  value,
  date,
}: FinancePropsComponent) {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light_Italic,
    Poppins_500Medium,
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
        height: 180,
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
            left: 15,
            borderColor: "#ffd500",
            borderWidth: 5,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: -70,
            right: 20,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 13,
              fontFamily: "Poppins_500Medium",
              textAlign: "right",
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
                    right: -5,
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
