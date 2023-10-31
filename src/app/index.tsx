import { View, StatusBar, FlatList } from "react-native";
import Header from "../components/Header";
import ButtonAdd from "../components/ButtonAdd";
import Items from "../components/Items";
import { data } from "../data/data";
import MonthComponent from "../components/Month";
import{ calcularTotalEntradasESaidas } from "../utils/calcularTotalEntradasESaidas";

export default function Page() {

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
      <MonthComponent />

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
