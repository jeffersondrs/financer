import { View, ScrollView, StatusBar, FlatList } from "react-native";
import React, { useState } from "react";
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
import Header from "../components/Header";
import ButtonAdd from "../components/ButtonAdd";
import Items from "../components/Items";
import { DataItem, data } from "../data/data";

export default function Page() {
  const calcularTotalEntradasESaidas = (data: DataItem) => {
    const totalEntradas = data
      .filter((item) => item.status === "Entrada")
      .reduce((total, item) => total + item.value, 0);

    const totalSaidas = data
      .filter((item) => item.status === "Saída")
      .reduce((total, item) => total + item.value, 0);

    return totalEntradas - totalSaidas;
  };

  const totalEntradasMenosSaidas = calcularTotalEntradasESaidas(data);

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <StatusBar hidden={true} />

      <Header
        name="Jefferson Santos"
        status="não disponível"
        value={totalEntradasMenosSaidas}
      />
      <ButtonAdd />

      <FlatList
        data={data}
        style={{
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <Items
            date={item.date}
            status={item.status}
            title={item.title}
            value={item.value}
          />
        )}
      />
    </View>
  );
}
