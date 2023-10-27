import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import { Plus, X } from "lucide-react-native";

type ButtonAddProps = {};

export default function ButtonAdd({}: ButtonAddProps) {
  const [modalVisible, setModalVisible] = useState(false);

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
          <View
            style={{
              width: "100%",
              height: "50%",
              backgroundColor: "#000",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 1,
                borderColor: "#ffd500",
                borderWidth: 1,
                padding: 6,
                borderRadius: 10,
              }}
            >
              <X size={24} color="#ffd500" />
            </TouchableOpacity>
            <Text>Modal</Text>
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
