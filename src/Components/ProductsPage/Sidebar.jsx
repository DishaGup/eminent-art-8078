import {
  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, GridItem, Divider, Flex, Grid, Heading, HStack, Image, Select, Spinner, Text,
  VStack, Skeleton, SkeletonCircle, SkeletonText,
  CloseButton,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDoubleArrowRight } from "react-icons/rx";
import Allfilters from "./Allfilters";
import FilterDrawer from "./FilterDrawer";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getProducts, getProductsSubcategory, getProductsSubSubcategory, getAllProducts } from "../../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { memo } from "react";
import NotfoundCategory from "../../Pages/NotfoundCategory";
import Navmain from "../HomePage/Navmain";

const Sidebar = () => {
  const { category, subcategory, subcat2 } = useParams()


  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let urlpage = searchParams.get("pageno")
  const [pageno, setpageno] = useState(urlpage || 1);
  let { loading, productsData } = useSelector((store) => store.ProductReducer);
  const [uniquebrands, setUniquebrand] = useState({})
  let location = useLocation();
  const dispatch = useDispatch();
  let breadcrumblinks = searchParams.toString().split("&").join(" ").split("=");
  const initialsortdata = searchParams.get("sortingByPrice");
  const [sortingByPrice, setSortingByPrice] = useState(initialsortdata || "");
  let { products, brands, currentPage, totalPages, totalResults } = useSelector((store) => store.ProductReducer.productsData);
  const handleGoBack = useCallback(() => {
    navigate("/");
  }, []);


  useEffect(() => {
    let params = {};
    sortingByPrice && (params.sortingByPrice = sortingByPrice);
    pageno && (params.pageno = pageno);

    setSearchParams(params);
  }, [pageno, sortingByPrice, category, subcategory, subcat2]);


  let queryParams = {
    tag: searchParams.getAll("categorytag"),
    sort: searchParams.get("sortingByPrice") && "price",
    order: searchParams.get("sortingByPrice"),
    priceMinn: searchParams.getAll("sortrange").join("").split("-")[0],
    priceMaxx: searchParams.getAll("sortrange").join("").split("-")[1],
    page: searchParams.get("pageno"),
    brand: searchParams.getAll("brandrange"),
    rating: searchParams.get('ratingplus')
  }

  Object.keys(queryParams).forEach((key) => {
    if (!queryParams[key]) {
      delete queryParams[key];
    }
  });

  useEffect(() => {

    if (category != undefined) {
      dispatch(getProducts(category, queryParams))
    } else if (subcategory !== undefined && category !== undefined) {
      dispatch(getProductsSubcategory(category, queryParams, subcategory))
    } else if (subcat2 !== undefined && subcategory !== undefined && category !== undefined) {
      dispatch(getProductsSubSubcategory(category, queryParams, subcategory, subcat2))
    } else {
      dispatch(getAllProducts(queryParams))
    }

  }, [location.search])

  

  useEffect(() => {
    let unibrands = {}
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

  return (
    <>
      <Navmain />
      <Box
        width={"98%"}
        margin="auto"
        pt={{ base: "30px", md: "60px", lg: "80px" }}
      >
        <Flex alignItems={"left"} pb={{ base: "10px", sm: "5px" }}>
          <Breadcrumb separator="/" fontSize={{ base: "16px", md: "18px" }}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Text>{category ? category : "men"}</Text>
            </BreadcrumbItem>
            {breadcrumblinks.map((el, i) => {
              if (
                i % 2 == 1 &&
                el !== "brandrange" &&
                el !== "categorytag" &&
                el !== "sortrange"
              ) {
                return (
                  <BreadcrumbItem key={i}>
                    {/* <Text>{el.length > 1 ? el.split(" ")[0] : el}</Text> */}
                    {/* <CloseButton  onClick={()=>searchParams.delete(el)} /> */}
                  </BreadcrumbItem>
                );
              }
            })}
          </Breadcrumb>
        </Flex>
        <Flex mb="10px">
          {" "}
          <Button
            mr="2%"
            onClick={handleGoBack}
            display={{ base: "block", sm: "block", md: "none" }}
          >
            Go Back
          </Button>
          <Box display={{ base: "block", sm: "block", md: "none" }}>
            {" "}
            <FilterDrawer />
          </Box>
          <HStack
            display={{ base: "none", sm: "none", md: "block" }}
          ></HStack>
        </Flex>
        <Grid gridTemplateColumns={{ sm: "100%", md: "20% 78%" }} gap={"5px"}>
          {/* filters section start */}
          {/* for large screen */}
          <GridItem>
            <Box display={{ base: "none", sm: "none", md: "block" }}>

              <Allfilters handleGoBack={handleGoBack} uniquebrands={uniquebrands} productsData={productsData} />

            </Box>
          </GridItem>
          {/* for small screen */}

          {/* products section start */}
          <GridItem>
            <VStack justify={"space-between"} p="10px">

              <HStack justify={"space-between"} w="full">
                <Heading
                  fontWeight={"medium"}
                  fontSize={{
                    base: "20px",
                    sm: "30px",
                    md: "30px",
                    lg: "35px",
                  }}
                >
                  Products

                </Heading>
                <HStack
                  w={{ sm: "60%", md: "50%", lg: "40%" }}
                  justify={"space-between"}
                >
                  <Text fontSize={"xl"}>Sort</Text>
                  <Select
                    placeholder="Sort in Order"
                    w="80%"
                    //value={sortingByPrice.order}
                    onChange={(e) => setSortingByPrice(e.target.value)}
                  >
                    <option value="asc" >Price: Low to High</option>
                    <option value="desc" >Price: High to low</option>
                  </Select>
                </HStack>
              </HStack>
              <Divider borderColor={"black"} />
              <Text>Total Results:- {totalResults} </Text>
              <Grid
                gridTemplateColumns={{
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                  lg: "repeat(4,1fr)",
                }}
                gap="5"
              >
                {productsData.products && productsData.products.length > 0 ? (
                  productsData.products.map((e) => <ProductCard key={e.id} {...e} />)
                ) : (
                  <>
                    {" "}

                  </>
                )}
                {
                  productsData.total <= 0 && (<> <NotfoundCategory />  </>)
                }



              </Grid>
            </VStack>
          </GridItem>
        </Grid>
        <Box>
          <Flex
            m="10px 30px 50px  "
            justify={{ base: "center", md: "flex-end" }}
          >
            {productsData.products && productsData.products.length > 1 && (
              <Pagination
                current={pageno}
                total={totalPages}
                handlePageChange={(page) => setpageno(page)}
              />
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
}


export default Sidebar;
