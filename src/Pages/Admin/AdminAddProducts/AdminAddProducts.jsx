import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminaddProduct } from "../../../Redux/AdminReducer/action";

const initialState = {
  image: "",
  title: "",
  price: +"",
  rating: "",
  tag: "",
  category: "",
};

export function AdminAddProducts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addproduct, setAddProduct] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    dispatch(adminaddProduct(addproduct));

    setAddProduct(initialState);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"#24a3b5"}
        color={"white"}
        _hover={{
          bg: "black",
        }}
        float={"right"}
        cursor={"pointer"}
      >
        + Add Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Text fontSize={"4xl"} color={"gray.600"}>
                  Add Product{" "}
                </Text>
                {/* <Text fontSize={"lg"} color={"gray.600"}>
                  Login to Continue <Link color={"blue.400"}></Link> ✌️
                </Text> */}
              </Stack>
              <Box
                rounded={"lg"}
                // bg={useColorModeValue("white", "gray.700")}
                // boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <Input
                    type="text"
                    name="image"
                    value={addproduct.image}
                    placeholder="Image"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <Input
                    type="text"
                    name="title"
                    value={addproduct.title}
                    placeholder="Title"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <Input
                    type="text"
                    name="price"
                    value={addproduct.price}
                    placeholder="Price"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />

                  <Input
                    type="text"
                    name="rating"
                    value={addproduct.rating}
                    placeholder="rating"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <Input
                    type="text"
                    name="tag"
                    value={addproduct.tag}
                    placeholder="tag"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <select
                    name="category"
                    value={addproduct.category}
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <option value="">Select Category</option>
                    <option value="male">men</option>
                    <option value="female">women</option>
                    <option value="beauty&health">Beauty & Health</option>
                  </select>
                  <Button type="submit" onClick={handleSubmit}>
                    submit
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
