import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Text, TextInput, KeyboardAvoidingView  } from "react-native";
import {
  Plus,
  ChevronDownIcon,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ItemsProps } from "../types/global-types";
import { formatCurrency } from "../utils/calcularTotalEntradasESaidas";

type ButtonAddProps = {};

export default function ButtonAdd({}: ButtonAddProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Entrada", value: "entrada" },
    { label: "Saída", value: "saida" },
  ]);

  console.log(value);

  const [transaction, setTransaction] = useState<ItemsProps>({
    title: "",
    value: "0",
    date: Date.now().toString(),
    status: "",
    month: new Date().toLocaleString("default", { month: "long" }),
  });

  console.log(typeof transaction.value);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "#000000aa",
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              width: "100%",
              height: "50%",
            }}
          ></TouchableOpacity>
          <View
            style={{
              width: "100%",
              height: "50%",
              backgroundColor: "#191919",
              borderRadius: 10,
              paddingTop: 30,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 1,
              }}
            >
              <ChevronDownIcon size={20} color="#ffd500" />
            </TouchableOpacity>
            {/* <Text
              style={{
                color: "#ffd500",
                fontSize: 16,
                fontFamily: "Poppins_500Medium",
                width: "100%",
                letterSpacing: 1.5,
              }}
            >
              Nova transação
            </Text> */}
            <KeyboardAvoidingView
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
                gap: 15,
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: "#ffd500" }}>Descrição</Text>
              <TextInput
                style={{
                  color: "#000",
                  elevation: 1,
                  backgroundColor: "#ffd500",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  fontWeight: "bold",
                }}
                maxLength={20}
                onChange={(e) =>
                  setTransaction({ ...transaction, title: e.nativeEvent.text })
                }
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  gap: 50,
                }}
              >
                <View
                  style={{
                    width: "55%",
                    height: 60,
                    gap: 10,
                  }}
                >
                  <Text style={{ color: "#ffd500" }}>Valor</Text>
                  <TextInput
                    style={{
                      color: "#000",
                      elevation: 1,
                      backgroundColor: "#ffd500",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      fontWeight: "bold",
                    }}
                    keyboardType="number-pad"
                    onChangeText={(e) =>
                      setTransaction({
                        ...transaction,
                        value: formatCurrency(e),
                      })
                    }
                  />
                </View>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  onChangeValue={(e) =>
                    setTransaction({ ...transaction, status: e })
                  }
                  placeholder="Tipo"
                  ArrowDownIconComponent={() => (
                    <ChevronDown color="#000" size={16} />
                  )}
                  ArrowUpIconComponent={() => (
                    <ChevronUp color="#000" size={16} />
                  )}
                  TickIconComponent={() => <Check color="#000" size={16} />}
                  placeholderStyle={{
                    fontSize: 14,
                    color: "#000",
                    borderRadius: 0,
                  }}
                  labelStyle={{
                    fontSize: 14,
                    color: "#000",
                    borderRadius: 0,
                  }}
                  listItemLabelStyle={{
                    fontSize: 14,
                    color: "#000",
                    borderRadius: 0,
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: "#ffd500",
                    borderRadius: 0,
                  }}
                  style={{
                    backgroundColor: "#ffd500",
                    borderRadius: 0,
                    width: "30%",
                    marginTop: 15,
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  marginTop: 15,
                  backgroundColor: "#ffd500",
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontSize: 16,
                    fontFamily: "Poppins_500Medium",
                    width: "100%",
                    letterSpacing: 1.5,
                    textAlign: "center",
                  }}
                >
                  Adicionar
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView >
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          position: "absolute",
          top: 185,
          right: 5,
          zIndex: 2,
          backgroundColor: "#ffd500",
          paddingVertical: 10,
          paddingHorizontal: 15,
          display: modalVisible ? "none" : "flex",
          opacity: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "#000" }}>Adicionar</Text>
        <Plus size={15} color="#000" />
      </TouchableOpacity>
    </>
  );
}
