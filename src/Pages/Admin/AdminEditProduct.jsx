import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./SidebarSection/Sidebar";
import { adminEditProduct } from "../../Redux/AdminReducer/action";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import "./admineditproduct.css";

export const AdminEditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);

  const { adminProducts } = useSelector((store) => store.adminReducer);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEdit = () => {
    dispatch(adminEditProduct(data, id)).then(() => {
      setSuccess(true);
      toast({
        title: "Product Edited SuccessFully !!",
        description: "Go to Products page.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      navigate("/adminproducts");
    });
  };
  useEffect(() => {
    const data = adminProducts.find((el) => +el.id === +id);

    setData(data);
  }, []);

  return (
    <div className="body">
      <div className="containerAdmin">
        <Sidebar />
        <div className="adminProductContentt">
          <Stack
            spacing={10}
            mx={"auto"}
            maxW="4xl"
            py={4}
            px={6}
            bg="#fff    "
          >
            <Heading color={"#24a3b5"}>{data.title}</Heading>
            <Box rounded={"lg"} py={2} px={6}>
              <Stack spacing={4}>
                <FormLabel color="green">Product Image :</FormLabel>
                <Input
                  type="text"
                  name="image"
                  value={data.image}
                  placeholder="Image"
                  onChange={handleChange}
                />
                <FormLabel color="green">Product Name :</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={data.title}
                  placeholder="Title"
                  onChange={handleChange}
                />
                <FormLabel color="green">Product Price :</FormLabel>
                <Input
                  type="text"
                  name="price"
                  value={data.price}
                  placeholder="Price"
                  onChange={handleChange}
                />
                <FormLabel color="green">Product Rating :</FormLabel>
                <Input
                  type="text"
                  name="rating"
                  value={data.rating}
                  placeholder="rating"
                  onChange={handleChange}
                />
                <FormLabel color="green">Product Tag :</FormLabel>
                <Input
                  type="text"
                  name="tag"
                  value={data.tag}
                  placeholder="tag"
                  onChange={handleChange}
                />

                <FormLabel color="green">Category : </FormLabel>
                <Select
                  name="category"
                  value={data.category}
                  id=""
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="male">men</option>
                  <option value="female">women</option>
                  <option value="beauty&health">Beauty & Health</option>
                </Select>

                <Button type="submit" onClick={handleEdit}>
                  submit
                </Button>
              </Stack>
            </Box>
          </Stack>
          {/*  */}
        </div>
      </div>
    </div>
  );
};
