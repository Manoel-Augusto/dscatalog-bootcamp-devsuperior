import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import menu from "../assets/menu.png";
import { nav } from "../styles";

const NavBar: ReactFC = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  function navigate(path: any) {
    if (path) {
      setShow(false);
      navigation.navigate(path);
    }
    setShow(false)
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={nav.drawer}
      onPress={() => {
        setShow(!show);
      }}
    >
      <Image source={menu} />
      {show ? (
        <View style={nav.options}>
          <TouchableOpacity style={nav.option} onPress={() => navigate("Home")}>
            <Text
              style={[
                nav.textOption,
                route.name === "Home" ? nav.textActive : null,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={nav.option}
            onPress={() => navigate("Catalog")}
          >
            <Text
              style={[
                nav.textOption,
                route.name === "Catalog" ? nav.textActive : null,
              ]}
            >
              Catalog
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={nav.option}>
            <Text
              style={[
                nav.textOption,
                route.name === "ADM" ? nav.textActive : null,
              ]}
            >
              ADM
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
export default NavBar;
