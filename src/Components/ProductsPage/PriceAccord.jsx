

//REMOVE_____________

import React, { useState } from "react";
import { AccordionPanel, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const PriceAccord = ({ priceRanges, getProducts }) => {
  let dispatch = useDispatch();
  let { params } = useSelector((store) => store.ProductsManager);
  const [selectedPrice, setSelectedPrice] = useState(params.priceValue);

  const handlePriceChange = (value) => {
    setSelectedPrice(value);
    params.priceValue = value;
    for (let i = 0; i < priceRanges.length; i++) {
      if (value === priceRanges[i].title) {
        params.discounted_price_gt = priceRanges[i].discounted_price_gt;
        params.discounted_price_lt = priceRanges[i].discounted_price_lt;
        dispatch(getProducts(params));
      }
    }
  };

  return (
    <AccordionPanel>
      <RadioGroup value={selectedPrice} onChange={handlePriceChange}>
        {priceRanges.map((range) => (
          <Stack
            key={range.title}
            _hover={{ color: "#0076be", fontWeight: "bold" }}>
            <Radio
              _hover={{ color: "#0076be", fontWeight: "bold" }}
              value={range.title}
              isChecked={selectedPrice === range.title}>
              {range.title}
            </Radio>
          </Stack>
        ))}
      </RadioGroup>
    </AccordionPanel>
  );
};

export default PriceAccord;

