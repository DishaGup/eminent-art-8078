// import { Box, Heading, Center, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
// import React from 'react'
// import ProductCard from './ProductCard'

// const objectofdealsoftheday = [
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/99370/200/200/145508146-99370521-1668508420.jpg',
//     brand: 'i7S TWS Twins Wireless Ins',
//     cutprice: '2999',
//     discount: '93',
//     actualprice: '199'
//   },
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/116980/200/200/153323501-116980797-1678944373.jpg',
//     brand: 'Hana & Morris Men Red',
//     cutprice: '1500',
//     discount: '469',
//     actualprice: '69'
//   },
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/116776/200/200/153261792-116776449-1670501239.jpg',
//     brand: 'Woakers Men Multicolour Leg',
//     cutprice: '3299',
//     discount: '79',
//     actualprice: '709'
//   },
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/116338/200/200/153074088-116338818-1654683296.jpg',
//     brand: 'ASE TWS AirBass PowerBank',
//     cutprice: '1999',
//     discount: '76',
//     actualprice: '489'},
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/116588/200/200/153160305-116588548-1662375960.jpg',
//     brand: 'TrueWare Freshy Storage Cabinet',
//     cutprice: '540',
//     discount: '11',
//     actualprice: '479'
//   }
//   // {
//   //     image:'',
//   //     brand:'',
//   //  cutprice:'',
//   //  discount:'',
//   //  actualprice:''
//   // }

// ]

// const objectofyourgadgetsstore = [
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/116805/200/200/153268880-116805429-1671089587.jpg',
//     brand: 'AXL AHP-02-RED Wired Headphone',
//     cutprice: '1299',
//     discount: '66',
//     actualprice: '439'
//   },
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/100740/200/200/146388171-100740822-1675171070.jpg',
//     brand: 'Nokia 1600 Small Tower Keypad',
//     cutprice: '2229',
//     discount: '54',
//     actualprice: '1049'
//   },
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/116797/200/200/153266451-116797598-1670661206.jpg',
//     brand: 'WIRELESS M10 High-Quality',
//     cutprice: '1999',
//     discount: '65',
//     actualprice: '699'
//   },
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/116535/200/200/153144782-116535470-1672225743.jpg',
//     brand: '9 Watt LED Bulb (Cool Day)',
//     cutprice: '519',
//     discount: '19',
//     actualprice: '418'
//   },
//   {
//     image: 'https://cdn.shopclues.com/images1/thumbnails/111981/200/200/151421606-111981882-1668507505.jpg',
//     brand: 'AXL ABN02 Bluetooth in-EarPlug',
//     cutprice: '1599',
//     discount: '53',
//     actualprice: '749'
//   }


// ]






// const ProductsRay = () => {
//   return (<>
//     <Box backgroundColor='#e9f6f7' h='15cm'  >
//       <Heading ml='50px' mb='0px' textAlign='left' fontWeight='600' fontSize='23px'>Deals Of the Day</Heading>


//       <SimpleGrid minChildWidth='100px' mx='50px' gap='1px' h='4cm'>
//         {
//           objectofdealsoftheday.map((el, i) => (
//             <GridItem>
//               <ProductCard key={i} {...el} />
//             </GridItem>

//           ))
//         }
//       </SimpleGrid>

//     </Box>
//     <Box backgroundColor='#e9f6f7' h='15cm'  >
//       <Heading ml='50px' mb='0px' textAlign='left' fontWeight='600' fontSize='23px'>Your Gadgets Store</Heading>


//       <SimpleGrid minChildWidth='100px' mx='50px' gap='1px' h='4cm'>
//         {
//           objectofyourgadgetsstore.map((el, i) => (
//             <GridItem>
//               <ProductCard key={i} {...el} />
//             </GridItem>

//           ))
//         }
//       </SimpleGrid>

//     </Box>
//   </>

//   )
// }

// export default ProductsRay