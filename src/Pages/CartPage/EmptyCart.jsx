import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const EmptyCart = () => {
  return (
    <Link to="/products">
      <div>
        <DIV>
          <img
            src="https://static1.hkrtcdn.com/hknext/static/media/cart/empty-cart-new.svg"
            alt=""
            width={"50%"}
          />
          <Text fontSize={"md"}>Hey, it feels so light!</Text>
          <Text fontSize={"sm"}>
            There is nothing in you bag. Let’s add some items.
          </Text>
          <Button colorScheme="teal" variant="outline">
            Continue Shopping
          </Button>
        </DIV>
      </div>
    </Link>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 10px;
  gap: 15px;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  /* background-color: #eff7fa; */
`;
