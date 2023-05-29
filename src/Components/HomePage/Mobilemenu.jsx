import React from "react";
import {
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Accordion,
  AccordionIcon,
  AccordionButton,
  Box,
} from "@chakra-ui/react";
import { gift } from "./data";
import { Link } from "react-router-dom";
export default function MobileMenu({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        border="1px solid red"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader borderBottomWidth="1px">Categories</DrawerHeader>
          <DrawerBody>
            {gift?.map((label, ind) => (
              <Accordion allowMultiple key={ind}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        {label.text}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {label?.alldata?.map((i, indi) => (
                    <AccordionPanel pb={4} key={indi}>
                      <Link to={`/products/${label?.text.toLowerCase()}/${i?.heading.toLowerCase()}`}>
                        {i.heading}
                      </Link>
                    </AccordionPanel>
                  ))}
                </AccordionItem>
              </Accordion>
            ))} 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
