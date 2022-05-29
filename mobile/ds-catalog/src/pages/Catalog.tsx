import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { SearchInput } from "../components";
import ProductCard from "../components/ProductCard";
import { api } from "../services";
import { theme } from "../styles";
import IProductProps from "../types/types";

const Catalog: React.FC = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fillProducts() {
    setLoading(true);
    const res = await api.get(`/product`);
    setProducts(res.data);
    setLoading(false);
  }
  useEffect(() => {
    fillProducts();
  }, []);

  const data =
    search.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : products;
  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {
        <SearchInput
          placeholder="Nome do produto"
          search={search}
          setSearch={setSearch}
        />
      }
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        data.map((product) => <ProductCard {...product} key={product.id} />)
      )}
    </ScrollView>
  );
};
export default Catalog;
