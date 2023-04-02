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
import { memo } from "react";

const Allfilters = ({filterHeading, handleGoBack }) => {
    const [searchParams,setSearchParams]=useSearchParams()
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { path,category } = useParams();
let {loading, }=useSelector((store)=>store.ProductReducer)
const[sortrange,setsortrange]=useState( searchParams.getAll('sortrange') || [])

const[brandrange,setbrandrange]=useState( searchParams.getAll('brandrange') || [])


const initialcategory=searchParams.getAll('categorytag')
const[categorytag,setcategorytag]=useState(initialcategory|| [])

  const initialsortdata =searchParams.get('sortingByPrice')
   
   const[sortingByPrice,setSortingByPrice]=useState(initialsortdata || '' )

  useEffect(()=>{
    let params={}
    categorytag && (params.categorytag=categorytag)
    sortingByPrice && (params.sortingByPrice=sortingByPrice)
    sortrange && (params.sortrange=sortrange)
    brandrange && (params.brandrange=brandrange)
    setSearchParams(params)
    },[categorytag,sortingByPrice,sortrange,brandrange])

   const handlechange=  (e)=>{
    let filterdata=[...categorytag]
    let value=e.target.value
    if(filterdata.includes(value)){
      filterdata=filterdata.filter((el)=>el!==value)
    }else{
      filterdata.push(value)
    }
    setcategorytag(filterdata)
    
     }

    
     const handlebrand=(e)=>{
      let sortdata=[...brandrange]
      let value=e.target.value
      if(sortdata.includes(value)){
        sortdata=sortdata.filter((el)=>el!==value)
      }else{
        sortdata.push(value)
      }
      setbrandrange(sortdata)
      
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
                                
                      
                     {
    category==='women' &&    <AccordionPanel pb={4}>   
    <Box p={1} > 
    <Checkbox isChecked={categorytag.includes("saree")} name='categorytag' onChange={handlechange}  my={2} value='saree' >Saree</Checkbox>
    </Box>
<Box p={1}>
<Checkbox isChecked={categorytag.includes("Kurtis")} value='Kurtis' name='categorytag' onChange={handlechange}  my={2}>Kurtis</Checkbox>

</Box>
<Box p={1}>
<Checkbox value='Blouse' isChecked={categorytag.includes("Blouse")} name='categorytag' onChange={handlechange} my={2}>Blouse</Checkbox>
</Box>
<Box p={1}>
<Checkbox value='Dupattas' isChecked={categorytag.includes("Dupattas")} name='categorytag' onChange={handlechange} my={2}>Dupattas</Checkbox>
</Box>
<Box p={1}>
<Checkbox value='topwear' isChecked={categorytag.includes("topwear")} name='categorytag' onChange={handlechange} my={2}>Topwear</Checkbox>
</Box>
<Box>
<Checkbox value='bottomwear' isChecked={categorytag.includes("bottomwear")} name='categorytag' onChange={handlechange} my={2}>Bottomwear</Checkbox>

</Box>
<Box>
{/* <Checkbox value='3200-5000' isChecked={sortrange.includes("3200-5000")} name='sortrange' onChange={handlesort} my={2}>Topwear</Checkbox>
*/}
</Box>
 </AccordionPanel>
                     }      

      
{
    category==='men'  || category===undefined && (<AccordionPanel pb={4}>   
    <Box p={1} > 
    <Checkbox isChecked={categorytag.includes("menaccessories")} name='categorytag' onChange={handlechange}  my={2} value='menaccessories' >Men accessories</Checkbox>
    </Box>
<Box p={1}>
<Checkbox isChecked={categorytag.includes("menfootwear")} value='menfootwear' name='categorytag' onChange={handlechange}  my={2}>Men footwear</Checkbox>

</Box>
<Box p={1}>
<Checkbox value='Kurtas' isChecked={categorytag.includes("Kurtas")} name='categorytag' onChange={handlechange} my={2}>Kurtas</Checkbox>
</Box>
<Box p={1}>
<Checkbox value='topwear' isChecked={categorytag.includes("topwear")} name='categorytag' onChange={handlechange} my={2}>Topwear</Checkbox>
</Box>
<Box>
<Checkbox value='bottomwear' isChecked={categorytag.includes("bottomwear")} name='categorytag' onChange={handlechange} my={2}>Bottomwear</Checkbox>

</Box>
<Box>
{/* <Checkbox value='3200-5000' isChecked={sortrange.includes("3200-5000")} name='sortrange' onChange={handlesort} my={2}>Topwear</Checkbox>
*/}
</Box>
 </AccordionPanel>)

}      

      
{
    category==='Beauty & Health' && <AccordionPanel pb={4}>   
    <Box p={1} > 
    <Checkbox isChecked={categorytag.includes("MakeUp")} name='categorytag' onChange={handlechange}  my={2} value='MakeUp' >MakeUp</Checkbox>
    </Box>
<Box p={1}>
<Checkbox isChecked={categorytag.includes("oral care")} value='oral care' name='categorytag' onChange={handlechange}  my={2}>Oral Care</Checkbox>

</Box>
<Box p={1}>
<Checkbox value='Lips' isChecked={categorytag.includes("Lips")} name='categorytag' onChange={handlechange} my={2}>Lips</Checkbox>
</Box>
<Box p={1}>
<Checkbox value='Eyes' isChecked={categorytag.includes("Eyes")} name='categorytag' onChange={handlechange} my={2}>Eyes</Checkbox>
</Box>
<Box>
<Checkbox value='Sanitizers' isChecked={categorytag.includes("Sanitizers")} name='categorytag' onChange={handlechange} my={2}>Sanitizers</Checkbox>

</Box>
<Box>
{/* <Checkbox value='3200-5000' isChecked={sortrange.includes("3200-5000")} name='sortrange' onChange={handlesort} my={2}>Topwear</Checkbox>
*/}
</Box>
 </AccordionPanel>

}      
                  </Flex>
                   </Box>
                        </h2>
                      </AccordionItem>
                    </Accordion>
                  </Box>

            
                  <Divider  h='0.5cm' colour='white'/>
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



            
                          <Box  as="span" flex="1" textAlign="left">
                 
                            <Flex>

                            {
  category==='women' && 
  <AccordionPanel >
     <Box p={1} > 
           <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={brandrange.includes("levis")} name='brandrange' onChange={handlebrand}  my={2}value='levis' >Lev's</Checkbox>
      </Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={brandrange.includes("Hilfiger")} value='Hilfiger' name='brandrange' onChange={handlebrand}  my={2}>Hilfiger</Checkbox>

</Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Calvin' isChecked={brandrange.includes("Calvin")} name='brandrange' onChange={handlebrand} my={2}>Calvin</Checkbox>
 </Box>
 <Box p={1}>
 <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Zara' isChecked={brandrange.includes("Zara")} name='brandrange' onChange={handlebrand} my={2}>Zara</Checkbox>
 </Box>
 <Box p={1}>
 <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Fitch' isChecked={brandrange.includes("Fitch")} name='brandrange' onChange={handlebrand} my={2}>Fitch</Checkbox>
 </Box>
 <Box>
 
 </Box>
 <Box>
 
 </Box>

</AccordionPanel>



              }

{
   category ==='men' || category===undefined && (
    
    <AccordionPanel >
    <Box p={1} > 
          <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={brandrange.includes("Hollister")} name='brandrange' onChange={handlebrand}  my={2}value='Hollister' >Hollister</Checkbox>
     </Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={brandrange.includes("Outfitters")} value='Outfitters' name='brandrange' onChange={handlebrand}  my={2}>Outfitters</Checkbox>

</Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Victoria' isChecked={brandrange.includes("Victoria")} name='brandrange' onChange={handlebrand} my={2}>Victoria</Checkbox>
</Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Zara' isChecked={brandrange.includes("Zara")} name='brandrange' onChange={handlebrand} my={2}>Zara</Checkbox>
</Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Fitch' isChecked={brandrange.includes("Fitch")} name='brandrange' onChange={handlebrand} my={2}>Fitch</Checkbox>
</Box>
<Box>

</Box>
<Box>

</Box>

</AccordionPanel>
   )

}

{
  category==='Beauty & Health' && 
  
  <AccordionPanel >
  <Box p={1} > 
        <Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={brandrange.includes("Chanel")} name='brandrange' onChange={handlebrand}  my={2}value='Chanel' >Chanel</Checkbox>
   </Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }} isChecked={brandrange.includes("NARS")} value='NARS' name='brandrange' onChange={handlebrand}  my={2}>NARS</Checkbox>

</Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Maybelline' isChecked={brandrange.includes("Maybelline")} name='brandrange' onChange={handlebrand} my={2}>Maybelline</Checkbox>
</Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Revlon' isChecked={brandrange.includes("Revlon")} name='brandrange' onChange={handlebrand} my={2}>Revlon</Checkbox>
</Box>
<Box p={1}>
<Checkbox  _hover={{ color: "#24a3b5", fontWeight: "bold" }}  value='Fitch' isChecked={brandrange.includes("Fitch")} name='brandrange' onChange={handlebrand} my={2}>Fitch</Checkbox>
</Box>
<Box>

</Box>
<Box>

</Box>

</AccordionPanel>
}




                            </Flex>
                          </Box>
                       
                       
                       
                        </h2>
                      </AccordionItem>
                    </Accordion>
                  </Box>




 </VStack>      )        }
                         

export default memo(Allfilters)

