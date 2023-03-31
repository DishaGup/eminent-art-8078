import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
  } from "@chakra-ui/accordion";
  import { Checkbox } from "@chakra-ui/checkbox";
  import {
    Box,  Divider,  Flex,  Heading,  HStack,  Stack,  Text, VStack
  } from "@chakra-ui/layout";
  import { useLocation, useNavigate, useParams,useSearchParams  } from "react-router-dom";
  import {Center} from '@chakra-ui/react'
  import React, { useEffect, useState} from "react";
  import { useDispatch, useSelector, } from "react-redux";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";
import { getProducts } from "../../Redux/ProductReducer/action";

const Allfilters = ({filterHeading, price, handleGoBack }) => {
    const [searchParams,setSearchParams]=useSearchParams()
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { path } = useParams();
let {loading, productsData, allData, params, filters}=useSelector((store)=>store.ProductReducer)
const[sortrange,setsortrange]=useState( searchParams.getAll('sortrange') || [])
const initialcategory=searchParams.getAll('categorytag')
const[categorytag,setcategorytag]=useState(initialcategory|| [])
const [category,setcategory]=useState('')
  const initialsortdata =searchParams.get('sortingByPrice')
   
   const[sortingByPrice,setSortingByPrice]=useState(initialsortdata || '' )

   const HandleFilterHeading = (category) => {
  //   params.category = category;
  //   const path = `${location.pathname}/${category}`;
  //   navigate(path);
  //   setcategory([category]);
  //  dispatch(getProducts(params));
  };

  useEffect(()=>{
    let params={}
    categorytag && (params.categorytag=categorytag)
    sortingByPrice && (params.sortingByPrice=sortingByPrice)
    sortrange && (params.sortrange=sortrange)
    setSearchParams(params)
    
    },[categorytag,sortingByPrice,sortrange])

   const handlechange=(e)=>{
    let filterdata=[...categorytag]
    let value=e.target.value
    if(filterdata.includes(value)){
      filterdata=filterdata.filter((el)=>el!==value)
    }else{
      filterdata.push(value)
    }
    setcategorytag(filterdata)
    
     }


     
const handlesort=(e)=>{
  let sortdata=[...sortrange]
  let value=e.target.value
  if(sortdata.includes(value)){
    sortdata=sortdata.filter((el)=>el!==value)
  }else{
    sortdata.push(value)
  }
  setsortrange(sortdata)
  
    }
        return (
          <VStack p="10px" >
            <Flex w="full" justifyContent={"space-around"}>
              <Heading
                fontWeight={"medium"}
                fontSize={{ base: "18px", sm: "20px", md: "25px", lg: "35px" }}>
                Filters
              </Heading>
              <Button
                mr="2%"
                onClick={handleGoBack}
                fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>
                Go Back
              </Button>
            </Flex>
            <Divider borderColor={"black"} />
            {/* Category 1    using Price */        }
          
                  <Box maxH="400px" overflowY="scroll" w="full" >
                    <Accordion flex="1" allowToggle>
                      <AccordionItem>
                        <h2>
                        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
    Price
        </Box>
         <AccordionIcon />
         </AccordionButton>
                          <Box  as="span" flex="1" textAlign="left">
                            <Flex>
                                
                              <Text
                                _hover={{ color: "#0076be", fontWeight: "black" }}
                                cursor={"pointer"}
                                fontWeight={"bold"}
                                onClick={() => {
                                  HandleFilterHeading();
                                 }}>
                              </Text>
                              <AccordionPanel >
                                <Box p={1} > 
                                <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={sortrange.includes("100-699")} name='sortrange' onChange={handlesort}  my={2}value='100-699' >100-699</Checkbox>
                                </Box>
                    <Box p={1}>
                    <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={sortrange.includes("700-1499")} value='700-1499' name='sortrange' onChange={handlesort}  my={2}>700-1499</Checkbox>
   
                    </Box>
                    <Box p={1}>
                    <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='1500-2299' isChecked={sortrange.includes("1500-2299")} name='sortrange' onChange={handlesort} my={2}>1500-2299</Checkbox>
                      </Box>
                      <Box p={1}>
                      <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='2300-3199' isChecked={sortrange.includes("2300-3199")} name='sortrange' onChange={handlesort} my={2}>2300-3199</Checkbox>
                      </Box>
                      <Box p={1}>
                      <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='3200-5000' isChecked={sortrange.includes("3200-5000")} name='sortrange' onChange={handlesort} my={2}>3200-5000</Checkbox>
                      </Box>
                      <Box>
                      
                      </Box>
                      <Box>
                      
                      </Box>

    </AccordionPanel>
                            </Flex>
                          </Box>
                        </h2>
                      </AccordionItem>
                    </Accordion>
                  </Box>

  {/* category 2 using tags */}
              
 <Divider  h='0.5cm' colour='white'/>
              {" "}
                  <Box maxH="400px" overflowY="scroll" w="full" >
                    <Accordion flex="1" allowToggle>
                      <AccordionItem>
                        <h2>
                        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
    Tags
        </Box>
         <AccordionIcon />
         </AccordionButton>
                          <Box  as="span" flex="1" textAlign="left">
                            <Flex>
                                
                              <Text
                                _hover={{ color: "#0076be", fontWeight: "black" }}
                                cursor={"pointer"}
                                fontWeight={"bold"}
                                onClick={() => {
                                  HandleFilterHeading();
                                 }}>
                              </Text>
                              <AccordionPanel pb={4}>
                                <Box p={1} > 
                                <Checkbox isChecked={categorytag.includes("saree")} name='categorytag' onChange={handlechange}  my={2} value='saree' >Saree</Checkbox>
                                </Box>
                    <Box p={1}>
                    <Checkbox isChecked={categorytag.includes("kurtis")} value='kurtis' name='categorytag' onChange={handlechange}  my={2}>Kurtis</Checkbox>
   
                    </Box>
                    <Box p={1}>
                    <Checkbox value='blouse' isChecked={categorytag.includes("blouse")} name='categorytag' onChange={handlechange} my={2}>Blouse</Checkbox>
                      </Box>
                      <Box p={1}>
                      <Checkbox value='dupattas' isChecked={categorytag.includes("dupattas")} name='categorytag' onChange={handlechange} my={2}>Dupattas</Checkbox>
                      </Box>
                      <Box p={1}>
                      <Checkbox value='topwear' isChecked={categorytag.includes("topwear")} name='categorytag' onChange={handlechange} my={2}>Topwear</Checkbox>
                      </Box>
                      <Box>
                      <Checkbox value='bottomwear' isChecked={categorytag.includes("bottomwear")} name='categorytag' onChange={handlesort} my={2}>Bottomwear</Checkbox>
                   
                      </Box>
                      <Box>
                      {/* <Checkbox value='3200-5000' isChecked={sortrange.includes("3200-5000")} name='sortrange' onChange={handlesort} my={2}>Topwear</Checkbox>
                    */}
                      </Box>
  
   
 
    </AccordionPanel>
                            </Flex>
                          </Box>
                        </h2>
                      </AccordionItem>
                    </Accordion>
                  </Box>



 </VStack>      )        }
                         

export default Allfilters

