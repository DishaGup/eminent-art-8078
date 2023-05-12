import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Link,
  useBoolean,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
function SearchBar() {
  const [onChangeValue, setOnChangeValue] = useState("");
  const [search, setSearch] = useState([]);
  const [Products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean();
 const [add, setP] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((loc) => {
          setP(loc.address.county);
        });
    });
  }, []);
  return (
    <Box fontFamily={"Clear-Sans"} shadow={"sm"} bg="#fff">
      <Flex justify={"space-around"} minH={"40px"} py="10px" align={"center"}>
        <Flex
          gap={0.1}
          width={{ base: "100%", md: "60%" }}
          flexDir={{ base: "column", md: "row" }}
          align={"center"}
        >
          <InputGroup size={"sm"} width={{ base: "90%", md: "30%" }}>
            <InputLeftAddon
              children={
                <FaSearchLocation
                  color="gray.300"
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                      const { latitude, longitude } = position.coords;

                      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
                      fetch(url)
                        .then((res) => res.json())
                        .then((loc) => {
                          setP(loc.address.county.split(" ")[0]);
                        });
                    });
                  }}
                />
              }
            />
            <Input
              bg={"#f1f4f6"}
              focusBorderColor="#f1f4f6"
              value={add ? add : "New Delhi"}
            />
          </InputGroup>
         
          
        </Flex>

       
      </Flex>
    </Box>
  );
}

export default SearchBar;
