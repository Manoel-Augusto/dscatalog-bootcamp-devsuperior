import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { text, theme } from "../styles";
import eyesOpened from "../assets/eyesOpened.png";
import eyesClosed from "../assets/eyesClosed.png";
import arrow from "../assets/arrow.png";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { isAuthenticated, login } from "../services/auth";

const Login = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [userFetchData, setUserFetchData] = useState({});
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  
  async function handleLogin() {
    const data = await login(userInfo);
    setUserFetchData(data);
    navigation.navigate("Dashboard");
  }
  return (
    <View style={theme.container}>
      <View style={theme.loginCard}>
        <Text style={text.loginTitle}>Login</Text>
        <View style={theme.form}>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            style={theme.textInput}
            value={userInfo.username}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.username = e;
              setUserInfo(newUserInfo);
            }}
          />
          <View style={theme.passwordGroup}>
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <TextInput
                placeholder="Senha"
                autoCapitalize="none"
                value={userInfo.password}
                style={theme.textInput}
                secureTextEntry={hidePassword}
                onChangeText={(e) => {
                  const newUserInfo = { ...userInfo };
                  newUserInfo.password = e;
                  setUserInfo(newUserInfo);
                }}
              />
              <Image
                source={hidePassword ? eyesOpened : eyesClosed}
                style={theme.toggle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={theme.primaryButton}
          activeOpacity={0.8}
          onPress={() => handleLogin()}
        >
          <View>
            <Text style={text.primaryText}>Fazer Login</Text>
          </View>
          <View style={theme.arrowContainer}>
            <Image source={arrow} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
