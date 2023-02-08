import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";
import shoppingDataList from "../../data/shoppingData";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const shoppingData = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getItems() {
    dispatch(setItems(shoppingDataList.items));
  }

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = shoppingDataList.items.filter(
    (item) => item.category === "topRated"
  );
  const newArrivalsItems = shoppingDataList.items.filter(
    (item) => item.category === "newArrivals"
  );
  const bestSellersItems = shoppingDataList.items.filter(
    (item) => item.category === "bestSellers"
  );
  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <strong>Products</strong>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill,300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          shoppingDataList.items.map((item, index) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item, index) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item, index) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
        {value === "topRated" &&
          topRatedItems.map((item, index) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
