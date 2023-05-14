import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Checkbox } from "@chakra-ui/checkbox";
import {
  Box, Divider, Flex, Heading, HStack, Stack, Text, VStack
} from "@chakra-ui/layout";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Center, Radio, Tag,TagCloseButton,TagLabel } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";
import { DeleteAllParams, getProducts } from "../../Redux/ProductReducer/action";
import { memo } from "react";

const Allfilters = ({ filterHeading, handleGoBack ,}) => {
  const [uniquebrands, setUniquebrand] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { path, category,subcategory,subcat2 } = useParams();
 
  const [sortrange, setsortrange] = useState(searchParams.getAll('sortrange') || [])

  const [brandrange, setbrandrange] = useState(searchParams.getAll('brandrange') || [])
  let urlpage = searchParams.get("pageno")
  const [pageno, setpageno] = useState(urlpage || 1);

  const initialcategory = searchParams.getAll('categorytag')

  const [categorytag, setcategorytag] = useState(initialcategory || [])
const [ratingplus,setratingplus]=useState( searchParams.get('ratingplus') || '')
  const initialsortdata = searchParams.get('sortingByPrice')

  const [sortingByPrice, setSortingByPrice] = useState(initialsortdata || '')

  useEffect(() => {
    let params = {}
    categorytag && (params.categorytag = categorytag)
    sortingByPrice && (params.sortingByPrice = sortingByPrice)
    sortrange && (params.sortrange = sortrange)
    brandrange && (params.brandrange = brandrange)
    pageno && (params.pageno = pageno);
    ratingplus && (params.ratingplus=ratingplus)
    setSearchParams(params)
  
  }, [categorytag, sortrange, brandrange, sortingByPrice, pageno,ratingplus])

  const handlechange = (e) => {
    let filterdata = [...categorytag]
    let value = e.target.value
    if (filterdata.includes(value)) {
      filterdata = filterdata.filter((el) => el !== value)
    } else {
      filterdata.push(value)
    }
    setcategorytag(filterdata)

  }
   let { loading, productsData } = useSelector((store) => store.ProductReducer);
  let { products,brands } = useSelector((store) => store.ProductReducer.productsData);
//  console.log(productsData)
  
// useEffect(()=>{
//   let unibrands={}
//   if(brands && brands.length>0){
//    let answer= brands.map((product) => {
//       if (unibrands[product.brand]) {
//         unibrands[product.brand]++;
//       } else {
//         unibrands[product.brand] = 1;
//       }

//     })
//     //console.log(unibrands)
//     //console.log(answer)
//      setUniquebrand([unibrands])
//   }

// },[])


// console.log(uniquebrands)

  useEffect(() => {
    let unibrands = new Object()
    if (brands && brands.length > 0) {
      let answer = brands.forEach((product) => {
        if (unibrands[product.brand]) {
          unibrands[product.brand]++;
        } else {
          unibrands[product.brand] = 1;
        }
      })

      setUniquebrand(unibrands)
    }
  }, [brands, productsData])

console.log(uniquebrands)
  const handlebrand = (e) => {
    let sortdata = [...brandrange]
    let value = e.target.value
    if (sortdata.includes(value)) {
      sortdata = sortdata.filter((el) => el !== value)
    } else {
      sortdata.push(value)
    }
    setbrandrange(sortdata)

  }
  console.log(brandrange)

  const handlesort = (e) => {
    let sortdata = [...sortrange]
    let value = e.target.value
    if (sortdata.includes(value)) {
      sortdata = sortdata.filter((el) => el !== value)
    } else {
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

      
      {/* Category 1    using Price */}

      <Box maxH="400px" overflowY="scroll" w="full" overflow='scroll' >
        <Accordion flex="1" allowToggle >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Flex>


                  <AccordionPanel >
                    <Box p={1} >
                      <Checkbox _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={sortrange.includes("100-699")} name='sortrange' onChange={handlesort} my={2} value='100-699' >100-699</Checkbox>
                    </Box>
                    <Box p={1}>
                      <Checkbox _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={sortrange.includes("700-1499")} value='700-1499' name='sortrange' onChange={handlesort} my={2}>700-1499</Checkbox>

                    </Box>
                    <Box p={1}>
                      <Checkbox _hover={{ color: "#24a3b5", fontWeight: "bold" }} value='1500-2299' isChecked={sortrange.includes("1500-2299")} name='sortrange' onChange={handlesort} my={2}>1500-2299</Checkbox>
                    </Box>
                    <Box p={1}>
                      <Checkbox _hover={{ color: "#24a3b5", fontWeight: "bold" }} value='2300-3199' isChecked={sortrange.includes("2300-3199")} name='sortrange' onChange={handlesort} my={2}>2300-3199</Checkbox>
                    </Box>
                    <Box p={1}>
                      <Checkbox _hover={{ color: "#24a3b5", fontWeight: "bold" }} value='3200-5000' isChecked={sortrange.includes("3200-5000")} name='sortrange' onChange={handlesort} my={2}>3200-5000</Checkbox>
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

      <Divider h='0.5cm' colour='white' />
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
              <Box as="span" flex="1" textAlign="left">
                <Flex> <AccordionPanel pb={4}>
                {
                    productsData.tag && productsData.tag.map((el)=>  
                    <Box p={1} >
                      <Checkbox isChecked={categorytag.includes(el)} name='categorytag' onChange={handlechange} my={2} value={el} >{el}</Checkbox>
                    </Box>
                )  
                  } </AccordionPanel>

                </Flex>
              </Box>
            </h2>
          </AccordionItem>
        </Accordion>
      </Box>


      <Divider h='0.5cm' colour='white' />
      {" "}

      <Box maxH="400px" overflowY="scroll" w="full" >
        <Accordion flex="1" allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Brands
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Box as="span" flex="1" textAlign="left">

                <Flex>

{
    <AccordionPanel >

     {Object.keys(uniquebrands).map((brand, ind) => (

    <Flex p={1} key={ind} justify={'space-around'}>
      <Checkbox _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={brandrange.includes(brand)} name={brand} onChange={handlebrand} my={2} value={brand}  >{brand}</Checkbox>
      <Text fontSize={"18px"}>{uniquebrands[brand]}</Text>
    </Flex>
       )
       )}
  </AccordionPanel>

}



                </Flex>
              </Box>



            </h2>
          </AccordionItem>
        </Accordion>
      </Box>

{/* //filter using rating--- */}


<Divider h='0.5cm' colour='white' />
      {" "}

      <Box maxH="400px" overflowY="scroll" w="full" >
        <Accordion flex="1" allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                 Ratings --Less than 5
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Box as="span" flex="1" textAlign="left">

                <Flex>

{
    <AccordionPanel >
              <Box p={1}>
                        <Radio value='1'  isChecked={ratingplus==1} name='ratingplus' onChange={(e)=>setratingplus(e.target.value)} my={2}>⭐</Radio>
                      </Box>
                 <Box p={1} >
                        <Radio isChecked={ratingplus==2} name='ratingplus' onChange={(e)=>setratingplus(e.target.value)} my={2} value='2' >⭐⭐</Radio>
                      </Box>
                      <Box p={1}>
                        <Radio isChecked={ratingplus==3} value='3' name='ratingplus' onChange={(e)=>setratingplus(e.target.value)} my={2}>⭐⭐⭐</Radio>

                      </Box>
                      <Box p={1}>
                        <Radio value='4' isChecked={ratingplus==4} name='ratingplus' onChange={(e)=>setratingplus(e.target.value)} my={2}>⭐⭐⭐⭐</Radio>
                      </Box>
                     
                      
    
  </AccordionPanel>

}
               </Flex>
              </Box>
            </h2>
          </AccordionItem>
        </Accordion>
      </Box>

      <Divider h='0.5cm' colour='white' />
      <Button onClick={()=>DeleteAllParams(searchParams)}>
        Clear All
      </Button>



    </VStack>)
}


export default Allfilters

