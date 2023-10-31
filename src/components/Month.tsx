import { View, Text } from "react-native";
import { dataMonth } from "../data/data";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { ChevronDown, ChevronUp, Check } from "lucide-react-native";

export default function MonthComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(dataMonth);
  console.log(value);
  return (
    <View
      style={{
        position: "relative",
        width: 150,
        paddingHorizontal: 10.3,
      }}
    >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Mês"
        ArrowDownIconComponent={() => <ChevronDown color="#fff" size={16}/>}
        ArrowUpIconComponent={() => <ChevronUp color="#fff" size={16}/>}
        TickIconComponent={() => <Check color="#fff" size={16}/>}

        placeholderStyle={{
          fontSize: 14,
          color: "#fff",
          borderRadius: 0,
        }}
        labelStyle={{
          fontSize: 14,
          color: "#fff",
          borderRadius: 0,
        }}
        listItemLabelStyle={{
          fontSize: 14,
          color: "#fff",
          borderRadius: 0,
        }}
        dropDownContainerStyle={{
          backgroundColor: "#000",
          borderRadius: 0,
        }}

        style={{
          backgroundColor: "#000",
          borderRadius: 0,
        }}
      />
    </View>
  );
}
