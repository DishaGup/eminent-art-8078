import React from "react";
import { Flex, Text, Box, Badge,  Image,  Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    } from "@chakra-ui/react";

export const OneMoreOffer = () => {
  return (
    <Box className="one-more-offer">
      <Flex className="offer-tag">
        <Text marginRight={"5px"}>1 offer Available</Text>
        <span
          style={{ fontSize: "18px", color: "rgb(36, 163, 181)" }}
          class="material-symbols-outlined"
        >
          sell
        </span>
      </Flex>
      <Flex className="MYOASIS" width={{ base: "100%", md: "50%", lg: "50%" }}>
        <Badge padding="5px" colorScheme="green" variant={"outline"}>
          MYOASIS
        </Badge>
        <Text fontSize={"14px"}>
          Get Extra 10 Percent off on Prepaid Orders
        </Text>
      </Flex>
    </Box>
  );
};



export const Coupon = ({ Product }) => {

  let {brand,category,discount,price,rating,reviews,userName,_id,tag,title}=Product
    
    return (
        <Box className="prod-middle">
        <Box>
          <Text className="head">Product Details</Text>
          <Text className="name" fontWeight='500'>Seller - {userName}</Text>
        </Box>
        <Box className="tabs">
          <Tabs colorScheme="cyan">
            <TabList>
              <Tab>Product Description</Tab>
              <Tab>Specification</Tab>
              <Tab>Legal Information</Tab>
            </TabList>
  
            <TabPanels textAlign={"left"} padding={"15px"} lineHeight={"30px"}>
              <TabPanel>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sunt laborum officia harum voluptates exercitationem? Rem facilis distinctio voluptas suscipit temporibus beatae. Dolores ratione eligendi beatae quam? Ea, nobis tenetur?</p>
                <Flex>
                  <Text width="400px">Produc ID</Text>
                  <Text color="black">:- {_id}</Text>
                </Flex>
              <Flex>
                  <Text width="400px">
                    Maximum Retail Price (inclusive of all taxes)
                  </Text>
                  <Text color="black">
                    :- ₹{price}
                  </Text>
                </Flex>
                <Flex>
                  <Text width="400px">Common or Generic Name</Text>
                  <Text color="black">: - {title} </Text>
                </Flex>
                <Flex>
                  <Text width="400px">Net Contents / Net Quantity</Text>
                  <Text color="black">: - 50</Text>
                </Flex>
                <Flex>
                  <Text width="400px">Brand Name</Text>
                  <Text color="black">: - {brand}</Text>
                </Flex>
                <Flex>
                  <Text width="400px">Tag </Text>
                  <Text color="black">:- {tag} </Text>
                </Flex>
               
               
              </TabPanel>
              <TabPanel>
              <Flex>
                  <Text width="400px">Common or Generic Name</Text>
                  <Text color="black">: - {title} </Text>
                </Flex>
                <Flex>
                  <Text width="400px">Category</Text>
                  <Text color="black">: - {category}</Text>
                </Flex>
                <Flex>
                  <Text width="400px">Brand Name</Text>
                  <Text color="black">: - {brand}</Text>
                </Flex>
                <Flex>
                  <Text width="400px">Tag </Text>
                  <Text color="black">:- {tag} </Text>
                </Flex>
                <Flex>
                  <Text width="400px">Ratings</Text>
                  <Text color="black">: - {rating}</Text>
                </Flex>
                 <Flex>
                  <Text width="400px">Reviews</Text>
                  <Text color="black">: - {reviews}</Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex>
                  <Text width="400px">
                    Maximum Retail Price (inclusive of all taxes)
                  </Text>
                  <Text color="black">
                    :- ₹{price}
                  </Text>
                </Flex>
                <Flex>
                  <Text width="400px">Common or Generic Name</Text>
                  <Text color="black">: - {title} </Text>
                </Flex>
                <Flex>
                  <Text width="400px">Net Contents / Net Quantity</Text>
                  <Text color="black">: - 50</Text>
                </Flex>
                <Flex>
                  <Text width="400px">Manufacturer's Name and Address</Text>
                  <Text color="black">`: - ${userName} , kolhaRoad, J&K `</Text>
                </Flex>
                <Flex>
                  <Text width="400px">Packer's Name and Address</Text>
                  <Text color="black">: -</Text>
                </Flex>
                <Flex>
                  <Text width="400px">Importer's Name and Address</Text>
                  <Text color="black">: -</Text>
                </Flex>
                <Flex>
                  <Text width="400px">
                    Country of Origin / Manufacture / Assembly
                  </Text>
                  <Text color="black">: India</Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    );
  };
  