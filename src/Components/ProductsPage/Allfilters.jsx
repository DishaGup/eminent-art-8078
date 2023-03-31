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
  
  import React, { useEffect, useState} from "react";
  import { useDispatch, useSelector, } from "react-redux";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";

const Allfilters = ({filterHeading, price, handleGoBack }) => {
    const [searchParams,setSearchParams]=useSearchParams()
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { path } = useParams();
let {loading, productsData, allData, params, filters}=useSelector((store)=>store.ProductReducer)

const initialcategory=searchParams.getAll('category')
const[category,setcategory]=useState(initialcategory|| [])

  const initialsortdata =searchParams.get('sortingByPrice')
   
   const[sortingByPrice,setSortingByPrice]=useState(initialsortdata || '' )

   const HandleFilterHeading = (category) => {
    params.category = category;
    const path = `${location.pathname}/${category}`;
    navigate(path);
    setcategory([category]);
   // dispatch(getProducts(params));
  };

  useEffect(()=>{
    let params={}
    category && (params.category=category)
    sortingByPrice && (params.sortingByPrice=sortingByPrice)
    setSearchParams(params)
    
    },[category,sortingByPrice])

   const handlechange=(e)=>{
    let filterdata=[...category]
    let value=e.target.value
    if(filterdata.includes(value)){
      filterdata=filterdata.filter((el)=>el!==value)
    }else{
      filterdata.push(value)
    }
    setcategory(filterdata)
    
     }


     
const handlesort=(e)=>{
    let value=e.target.value
    value===sortingByPrice ?setSortingByPrice(null):setSortingByPrice(e.target.value)
    
    }
    

    if (loading) {
        return (
          <Box pt={"23%"} pb="15%">
            
           <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
          </Box>
        )
      } else {
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
            {/* Category 1 */}
          
                  <Box maxH="400px" overflowY="scroll" w="full" key={1} border='2px solid green'>
                    <Accordion flex="1" allowToggle>
                      <AccordionItem>
                        <h2>
                          <Box key={5} as="span" flex="1" textAlign="left">
                            <Flex>
                                
                              <Text
                                _hover={{ color: "#0076be", fontWeight: "black" }}
                                cursor={"pointer"}
                                fontWeight={"bold"}>
                               {/* // onClick={() => {
                                //   HandleFilterHeading(e[0]);
                                // }}
                                // {e[0]} */}
                              </Text>
                            </Flex>
                          </Box>
                        </h2>
                      </AccordionItem>
                    </Accordion>
                  </Box>
             
   


 </VStack>      )        }
                            }

export default Allfilters

