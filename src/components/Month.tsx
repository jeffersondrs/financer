import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { dataMonth } from "../data/data";
import { useState } from "react";

export default function MonthComponent() {
  const [selectMonth, setSelectMonth] = useState();
  return (
    <View
      style={{
        position: "relative",
        backgroundColor: "#000",
        width: 150,
        height: 40,
      }}
    >

      <Picker
        selectedValue={selectMonth}
        dropdownIconColor={"#ffd500"}
        dropdownIconRippleColor={"#ffd500"}
        style={{
          width: "100%",
          height: "100%",
          color: "#ffd500",
        }}
        itemStyle={{ color: "#ffd500" }}
        onValueChange={(itemValue, itemIndex) => setSelectMonth(itemValue)}
      >
        {dataMonth.map((item, index) => {
          return (
            <Picker.Item
              label={item.month}
              value={item.month}
              key={index}
              style={{
                color: "#ffd500",
                backgroundColor: "#000",
                fontSize: 14,
              }}
            />
          );
        })}
      </Picker>
    </View>
  );
}
