import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import menu from "../assets/menu.png";
import { doLogout, isAuthenticated } from "../services/auth";
import { nav, text } from "../styles";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  function navigate(path: any) {
    if (path) {
      setShow(false);
      navigation.navigate(path);
    }
    setShow(false);
  }
  async function logged() {
    const result = await isAuthenticated();
    result ? setAuthenticated(true) : setAuthenticated(false);
  }
function logout(){
  doLogout();
  navigation.navigate("Login")
}
  useEffect(() => {
    logged();
  }, []);
  return (
    <>
      {authenticated ? (
        <TouchableOpacity style={nav.logoutBtn} onPress={()=>logout()}>
          <Text style={text.logoutText}>Sair</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          style={nav.drawer}
          onPress={() => setShow(!show)}
        >
          <Image source={menu} />
          {show ? (
            <View style={nav.options}>
              <BaseButton onPress={() => navigate("Home")}>
                <Text
                  style={[
                    nav.textOption,
                    route.name == "Home" ? nav.textActive : null,
                  ]}
                >
                  Home
                </Text>
              </BaseButton>
              <BaseButton onPress={() => navigate("Catalog")}>
                <Text
                  style={[
                    nav.textOption,
                    route.name == "Catalog" ? nav.textActive : null,
                  ]}
                >
                  Catalogo
                </Text>
              </BaseButton>
              <BaseButton onPress={() => navigate("Login")}>
                <Text
                  style={[
                    nav.textOption,
                    route.name == "ADM" ? nav.textActive : null,
                  ]}
                >
                  ADM
                </Text>
              </BaseButton>
            </View>
          ) : null}
        </TouchableOpacity>
      )}
    </>
  );
};
export default NavBar;
