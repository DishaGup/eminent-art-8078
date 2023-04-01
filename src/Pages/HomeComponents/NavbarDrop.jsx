import React from 'react'
import {
    Image,
    Flex,
    Text,
    Box,
    SimpleGrid,
    HStack,
    Menu,
    MenuButton,
    MenuList, MenuItem
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
// import Navbar from "./"

import NavBar from "./NavBar.css"
// import "./NavBar.css"
function NavDropdown() {

    return (

        <div className='outSide'>
            <HStack gap='5' ml={2} >

                <Menu >
                    <MenuButton style={{ color: "black" }}  className='MenuButton' >
                        MOBILE & MORE
                    </MenuButton>

                    <MenuList marginTop='20px' marginLeft={20}>
                        <Flex gap={5}>


                            <SimpleGrid columns={1} className="simpleGrid" >
                                <Text as='b' className='item_heading'>Smartphones & Tablets</Text>







                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    I KALL
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>Mi</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>Realme</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>Samsung</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>Vivo</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>Oppo</MenuItem>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Oppo
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Apple

                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Tecno
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Infinix
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Micromax
                                </MenuItem>
                            </SimpleGrid>
                            <SimpleGrid columns={1}>




                                <Text as='b' className='item_heading'>Feature Phones</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Micromax
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    I KALL
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Nokia
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    MTR
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Heemax
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Karbonn
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Kechaoda
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Gfive
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Blackbear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Samsung
                                </MenuItem>
                            </SimpleGrid>


                            <SimpleGrid columns={1}>






                                <Text as='b' className='item_heading'>Bestsellers in Accessories</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Top Rated Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Combos
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Power Banks
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Cases & Covers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Mobile Holders
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Cables
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Adapter & Chargers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Selfie Sticks
                                </MenuItem>
                                <Text as='b' className='item_heading'>Storage Devices</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Memory Cards
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Pen Drives
                                </MenuItem>

                            </SimpleGrid>



                            <SimpleGrid columns={1}>






                                <Text as='b' className='item_heading'> Branded Accessories</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Tiitan
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Toshiba
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sandisk
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Philips
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Portronics
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Zebronics
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Boat
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Syska
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    JBL
                                </MenuItem>
                                <Text as='b' className='item_heading'> Audio Brand</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Headphones & Earphones
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bluetooth Earphones
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bluetooth Speakers
                                </MenuItem>

                            </SimpleGrid>




                        </Flex>
                    </MenuList>
                </Menu>
                {/* ****************************************222222222222222222************************************************************ */}
                <Menu>
                    <MenuButton style={{ color: "black" }} className='MenuButton' >
                        MEN
                    </MenuButton>

                    <MenuList marginTop='20px' marginLeft={-10}>
                        <Flex gap={5}>
                            <SimpleGrid columns={1} className="simpleGrid">


                                <Text as='b'> Men's Clothing</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    T-shirt
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Shirt
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Jeans
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Cargos
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Trousers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Track Pants
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Shorts & 3/4th
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Jackets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Ethnic Wear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Winter wear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Inner & Sleepwear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    29K Store
                                </MenuItem>

                            </SimpleGrid>





                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Footwear</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Casual Shoes</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sports Shoes
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Formal Shoes
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sandals & Floaters
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Slippers & Flip Flops
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Loafers And Moccasins
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Boots
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Ethnic
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Speciality Footwear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Shoe Care Kit & Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Top Selling Brands
                                </MenuItem>
                            </SimpleGrid>



                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Men's Watches</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Watch Combos
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Couple Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Fastrack, Sonata & More
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Budget Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Smart Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Men's Jewellery
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Fashion Jewellery
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Chains & Pendants
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Precious Jewellery
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Silver Jewellery
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Coins & Collectibles
                                </MenuItem>
                            </SimpleGrid>


                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Fragrances</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Fragrance Combos and Kits
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Deodorants
                                </MenuItem>
                                <Text as='b'>Grooming</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Beard & Moustache Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Men's Shaving
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Grooming Appliances
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bath Essentials
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Oral Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Skin Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Hair Care
                                </MenuItem>
                                <Text as='b'>Eyewear</Text>


                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sunglasses
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Spectacle Frames
                                </MenuItem>
                            </SimpleGrid>

                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Fashion Accessories</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Wallets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Belts
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Socks
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Caps
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Winter Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Men's Accessories Gift Sets
                                </MenuItem>
                                <Text as='b'>
                                    Bags & luggage</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Backpacks & Laptop Bags
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Gym Bags
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Trolleys & Duffle Bags
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Travel Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Messenger Bags
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Rucksacks
                                </MenuItem>
                            </SimpleGrid>
                            <SimpleGrid columns={1} className="simpleGrid">



                            </SimpleGrid>
                        </Flex>
                    </MenuList>
                    {/* ******************************************3333333333333333333333333333333333333************************************ */}
                </Menu>
                <Menu>
                    <MenuButton style={{ color: "black" }} className='MenuButton' >

                <Link to={`/products/women`}>
                <MenuButton className='MenuButton' >

                        WOMEN
                    </MenuButton>
                </Link>
                   
                    <MenuList marginTop='20px' soli marginLeft={-100}>
                        <Flex gap={5}>

                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Ethnic Wear</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Kurtas & Kurtis
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sarees
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Lehengas & Party Gowns
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Dress Material
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Leggings & Churidar
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Meia Store
                                </MenuItem>
                                <Text as='b'>Western Wear</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Tops & Tees
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Dresses
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Jeans & Jeggings
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Pants & Trousers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Skirts
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Code Yellow Store
                                </MenuItem>
                            </SimpleGrid>






                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Lingerie</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bra
                                </MenuItem>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Panties
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sleepwear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Shapewear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Lingerie Sets
                                </MenuItem>
                                <Text as='b'>Footwear</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Casual Shoes
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Flats & Sandals
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Women's Heels & Pumps
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Women Sports Shoes
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Wedges
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Women's Bellies
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Flip Flops & Slippers
                                </MenuItem>  </SimpleGrid>




                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>All Jewellery</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Fashion Jewellery
                                </MenuItem>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Pendant & Necklace Sets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Mangalsutra & Bangles
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Earrings & Rings
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Gold & Diamond Jewellery
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Silver Jewellery
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Coins & Collectibles
                                </MenuItem>   </SimpleGrid>




                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Women's Watches</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Casual Wear Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Office Wear Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Branded Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Budget Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Couple Watches
                                </MenuItem>
                                <Text as='b'>Beauty & Perfumes</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Skin Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Make-Up
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Hair Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Personal Care & Grooming
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Beauty Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Grooming Appliances
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bath Essentials
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Oral Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Women Hygiene
                                </MenuItem>
                                <Text as='b'>Fragrances</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Perfumes
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Deodorants
                                </MenuItem>
                            </SimpleGrid>



                        </Flex>
                    </MenuList>

                    {/* *******************************************4444444444444444444444444********************************** */}

                </Menu>
                <Menu>
                    <MenuButton style={{ color: "black" }} className='MenuButton'>
                        HOME & KITCHEN
                    </MenuButton>
                    <MenuList marginTop='20px' marginLeft="-300px">
                        <Flex gap={5}>


                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>
                                    Kitchen Appliances</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Gas Cooktops
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Juicer Mixer Grinders
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Induction Cooktops
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Kettles
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sandwich Makers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Blenders and choppers
                                </MenuItem>
                            </SimpleGrid>

                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Home Furnishing</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Home Berry
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Bedsheets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Curtains
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Carpets & Rugs
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Blankets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Towels
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Furnishing Combos
                                </MenuItem>
                            </SimpleGrid>



                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Bathroom & Sanitaryware</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Sanitaryware
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Bathroom Fixtures
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Bathing Utilities
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Bathroom Mirror and Cabinets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Faucets and Jet sprays
                                </MenuItem>

                            </SimpleGrid>

                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Lighting Solutions</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Led bulbs
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Tubelights & Battens
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Rechargeable Lights
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Electrical
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Panel & Ceiling Lights
                                </MenuItem>
                                <Text as='b'>Tools & Hardware</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Hand Tools
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Power Tools
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Safety Equipments
                                </MenuItem>
                            </SimpleGrid>



                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Decor</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Clocks
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Hookahs & Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Wall Decor
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Religion & Spirituality
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Table Decoratives
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Garden
                                </MenuItem> <Text as='b'>Home Improvement</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Cleaning Supplies
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Laundry Organisation
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Organisers
                                </MenuItem>
                            </SimpleGrid>




                        </Flex>
                    </MenuList>
                </Menu>

                {/* *****************************************5555555555555555555555555555555************************************ */}

                <Menu>


                    <MenuButton style={{ color: "black" }} className='MenuButton'  >
                        APPLIANCES
                    </MenuButton>

                    <MenuList marginTop='20px' marginLeft="-300px">
                        <Flex gap={5}>

                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Furniture</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Inflatable Sofas
                                </MenuItem>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Storage Furniture
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bean Bags
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Wall Shelves
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sofa Sets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Beds
                                </MenuItem>
                            </SimpleGrid>

                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Furniture</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Inflatable Sofas
                                </MenuItem>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Storage Furniture
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bean Bags
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Wall Shelves
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sofa Sets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Beds
                                </MenuItem>
                                <Text as='b'> TV & DTH</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Television
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Full HD
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    HD Ready
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Ultra HD
                                </MenuItem>
                            </SimpleGrid>





                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>
                                    Shop TV By Screen</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Below 32 Inch
                                </MenuItem>

                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    32 Inch
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    39 Inch - 42 Inch
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    43 Inch & Above
                                </MenuItem>

                                <Text as='b'>
                                    Air Purifiers And De-Humidifiers</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Refrigerators
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Single Door
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Double Door
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>
                                    Side by Side
                                </MenuItem>
                            </SimpleGrid>



                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>  Washing Machine</Text>



                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    Fully Automatic Top Load
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    Fully Automatic Front Load
                                </MenuItem>
                                <Text as='b'> Television</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    Shop TV By Screen
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    Large Kitchen Appliances
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    Chimney & Hoods
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    Microwave and Halogen Ovens
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    OTG
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>


                                    Dishwashers
                                </MenuItem>
                            </SimpleGrid>




                        </Flex>
                    </MenuList>


                    {/* ****************************6666666666666666666666666666666666666666****************** */}

                </Menu>
                <Menu>


                    <MenuButton style={{ color: "black" }} className='MenuButton' >
                        SPORTS & MORE
                    </MenuButton>

                    <MenuList marginTop='20px' marginLeft="-150px">
                        <Flex gap={5}>





                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Diet Nutrition</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Whey Protein
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Weight Gainers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Pre & Post Workout
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Fat Burners
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Vitamins & Minerals
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Ayurveda & Herbal
                                </MenuItem>
                                <Text as='b'>Healthcare</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Flu Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Massage & Relaxation
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Weighing Scales
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    BP Monitors
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Supports & Elderly Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    General Wellness
                                </MenuItem>
                            </SimpleGrid>





                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'> Fitness & Exercise</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Ab Exercisers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Home Gyms
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Exercise Bikes
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Fitness Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Treadmills
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Cardio Equipments
                                </MenuItem>
                                <Text as='b'>Sports</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Cricket Bats
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Footballs
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Badminton Racquets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Table Tennis
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Basketball
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Swimming & Water Sports
                                </MenuItem>     </SimpleGrid>




                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Car Accessories & Electronics</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Perfumes & Fresheners
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Dashboard Accessories
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Sun Shades
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Car Body Covers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Door & Bumper Guards
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Car Electronics
                                </MenuItem>
                                <Text as='b'>Bike Accessories & more</Text>

                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bike Body Covers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Riding Gear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Helmets
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bike Locks & Alarm Systems
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Car & Bike Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Tools & Oils
                                </MenuItem>
                            </SimpleGrid>






                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Beauty & Perfumes</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Skin Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Make-Up
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Hair Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Personal Care & Grooming Products
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Beauty Accessories
                                </MenuItem>
                                <Text as='b'>Grooming</Text> <MenuItem fontSize='sm' className='item' bg='none'>

                                    Fragrance Combos and Kits
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Beard & Moustache Care
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Men's Shaving
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Grooming Appliances
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Bath Essentials
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Oral Care
                                </MenuItem>
                            </SimpleGrid>





                        </Flex>
                    </MenuList>

                    {/* *********************************************777777777777777777777777777777777************************************ */}

                </Menu>



                <Menu>
                    <MenuButton style={{ color: "black" }} className='MenuButton'>
                        ESSENTIALS
                    </MenuButton>

                </Menu>



                <Menu>
                    <MenuButton style={{ color: "black" }} className='MenuButton' >
                        OFFERS
                    </MenuButton>
                    <MenuList border='none' marginTop='20px' marginLeft='-800px'  >
                        <Flex gap={5}>

                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>All Offers</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Kotra Top Sellers
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Season Essentials
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Womens Tops & Skirts
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    FlipFlops
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Mens Shorts
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Kitchen Essentials
                                </MenuItem>
                            </SimpleGrid>
                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Popular Categories</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Women Ethnic
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Mens Tshirt
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Watches
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Mens Footwear
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Women Western
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Home Furnishing
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Wholesale
                                </MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>

                                    Mobile and Laptop Accessories
                                </MenuItem>
                            </SimpleGrid>
                            <SimpleGrid columns={1} className="simpleGrid">
                                <Text as='b'>Shop By Price</Text>
                                <MenuItem fontSize='sm' className='item' bg='none'>Under 99</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>Under 199</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>Under 269</MenuItem>
                                <MenuItem fontSize='sm' className='item' bg='none'>358</MenuItem>
                            </SimpleGrid>






                        </Flex>
                    </MenuList>
                </Menu>


                <Menu>
                    <MenuButton style={{ color: "black" }} className='MenuButton'>
                        GLOBAL SHOPPING
                    </MenuButton>



                </Menu>

            </HStack>

        </div>



    )
}

export default NavDropdown