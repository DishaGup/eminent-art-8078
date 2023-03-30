import { Box, Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Select,
  Text,
  VStack, } from '@chakra-ui/react'
  import React, { useEffect,useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { RxDoubleArrowRight } from "react-icons/rx";
import Allfilters from './Allfilters'
import FilterDrawer from './FilterDrawer'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../Redux/ProductReducer/action';
import ProductCard from './ProductCard';

const Sidebar = () => {
const navigate=useNavigate()
  const [searchParams,setSearchParams]=useSearchParams()
  let {loading, productsData, allData, params, filters}=useSelector((store)=>store.ProductReducer)
let location=useLocation()

const initialsortdata =searchParams.get('sortingByPrice')
   
const[sortingByPrice,setSortingByPrice]=useState(initialsortdata || '' )
const handleGoBack = () => {
  navigate(-1);
};
const urlPath = location.pathname.split("/");
let price=199
let data={
params:{
  category:searchParams.getAll('category'),
    _sort: searchParams.get('sortingByPrice') && 'price',
    _order: searchParams.get('sortingByPrice')
}

}

const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getProducts(data))
},[location.search])

  return (
    <>
     <Box
          width={"90%"}
          margin="auto"
          pt={{ base: "30px", md: "60px", lg: "150px" }}>
          {/* <FilterTag title={appliedFilters.subCategory_like} /> */}
          <Flex
            alignItems={"center"}
            // mt={{ base: "10px", sm: "10px", md: "10px", lg: "0px" }}
            pb={{ base: "10px", sm: "5px" }}>
             <Breadcrumb separator="/" fontSize={{ base: "16px", md: "18px" }}>
              {urlPath &&
                urlPath.map((path, i) =>
                  i > 1 && i < 4 ? (
                    <BreadcrumbItem key={i}>
                      <BreadcrumbLink href="#">{path}</BreadcrumbLink>
                    </BreadcrumbItem>
                  ) : i === 4 ? (
                    <BreadcrumbItem key={i}>
                      <Text>{path.split("%20").join(" ")}</Text>
                    </BreadcrumbItem>
                  ) : null
                )}
            </Breadcrumb> 
          </Flex>
          <Flex mb="10px" mt={{}}>
            {" "}
            <Button
              mr="2%"
              onClick={handleGoBack}
              display={{ base: "block", sm: "block", md: "none" }}>
              Go Back
            </Button>
            
    {/* <FilterDrawer filterHeading={filters.filterHeading}  filterBrands={filters.filterBrands} price={price} /> */}
    <Box display={{ base: "block", sm: "block", md: "none" }}> <FilterDrawer />    
    </Box>
    <HStack
              display={{ base: "none", sm: "none", md: "block" }}></HStack>
          </Flex>
          <Grid gridTemplateColumns={{ sm: "100%", md: "25% 75%" }} gap={"5px"}>
            {/* filters section start */}
            {/* for large screen */}
            <Box display={{ base: "none", sm: "none", md: "block" }}>
              <Allfilters
                // filterHeading={filters.filterHeading}
                // filterBrands={filters.filterBrands}
                price={price}
                handleGoBack={handleGoBack}
              />
            </Box>
            {/* for small screen */}

            {/* products section start */}
            <VStack justify={"space-between"} p="10px">
              <HStack justify={"space-between"} w="full">
                <Heading
                  fontWeight={"medium"}
                  fontSize={{
                    base: "20px",
                    sm: "30px",
                    md: "30px",
                    lg: "35px",
                  }}>
                  Products
                </Heading>
                <HStack
                  w={{ sm: "60%", md: "50%", lg: "40%" }}
                  justify={"space-between"}>
                  <Text fontSize={"xl"}>Sort</Text>
                  <Select
                    placeholder="Select option"
                    w="80%"
                    //value={sortingByPrice.order}
                    onChange={(e) =>setSortingByPrice(e.target.value)}>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to low</option>
                  </Select>
                </HStack>
              </HStack>
              <Divider borderColor={"black"} />
              <Grid
                gridTemplateColumns={{
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                  lg: "repeat(4,1fr)",
                }}
                gap="5">
                {productsData &&
                  productsData.map((e) => (
                    <ProductCard
                      key={e.id}
                    {...e}
                    />
                  ))}
              </Grid>
            </VStack>
          </Grid>
           <Box>
            <Flex justify={{ base: "center", md: "flex-end" }}>
              {productsData.length > 1 && (
                <Pagination
                  current={params.page}
                  total={Math.ceil(allData.length / params.limit)}
                  handlePageChange={(page) => {
                    params.page = page;
                    dispatch(getProducts(params));
                  }}
                />
              )}
            </Flex>
          </Box> 
        </Box>
      </>

  )
}

export default Sidebar