import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
function LocationBox() {
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
      <Flex justify={"space-around"} minH={"40px"} py="10px" align={"right"}>
        <Flex
          gap={0.1}
          width={{ base: "100%", md: "60%" }}
          flexDir={{ base: "column", md: "row" }}
          align={"center"}
         >
          <InputGroup size={"sm"} width={{ base: "90%", md: "90%" }} >
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
              focusBorderColor="green"
              value={add ? add : "New Delhi"}
            />
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
}

export default LocationBox;
