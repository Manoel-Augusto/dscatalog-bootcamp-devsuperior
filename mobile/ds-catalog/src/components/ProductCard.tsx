import React from "react";
import {
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { text, theme } from "../styles";
import IProductProps from "../types/types";

const ProductCard: React.FC<IProductProps> = ({ id, name, imgUrl, price}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={theme.productCard} onPress={()=>{navigation.navigate("ProductDetails", {id})}}>
      {
        <Image
          source={{ uri: imgUrl||null }}
          style={theme.productImg}
        />
      }
      <View style={theme.productDescription}>
        <Text style={text.productName}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$</Text>
          <Text style={text.productPrice}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;
