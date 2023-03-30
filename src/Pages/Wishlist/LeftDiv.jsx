import {border, Box, Button,HStack,Stack,Text} from "@chakra-ui/react"
import {RxAvatar} from 'react-icons/rx'
import{TbNotes} from "react-icons/tb"
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import {AiOutlineStar} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import{BsHouseGear} from "react-icons/bs"
import{BsHeadset} from "react-icons/bs"
export default function LeftDiv(){
    return<Box width={"30%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} >

         <Stack p = '20px'>

              <HStack mb = '20px' w={"100%"} justifyContent="space-around">
                  <Text color = 'teal'>My Account</Text>
                  <Button ml = '20%'  bg = 'orange.600' color = 'white'fontSize={""}>Join VIP Club</Button>
              </HStack>

              <HStack>
                  <TbNotes  size = '25px'/>
                  <Text ml = '20px'>My Orders</Text>
              </HStack>

              <HStack justifyContent="space-around">
              <HiOutlineCurrencyRupee size={"25px"}/>
                  <Text ml = '20px'>My Clues Bucks</Text>
                  <Button color={"white"} bg={"teal.400"}>0</Button>
              </HStack>

              <HStack justifyContent="space-around">
              
                  <HiOutlineCurrencyRupee size={"25px"}/>
                  <Text ml = '20px'>My Clues Bucks+</Text>
                  <Button color={"white"} bg={"teal.400"}>0</Button>
              </HStack>


              <HStack>
                  <RxAvatar size = '25px'/>
                  <Text>My Profile</Text>
              </HStack>

              <HStack>
                  <AiOutlineStar size = '25px'/>
                  <Text>Rate Your Purchase</Text>
              </HStack>
              

              <HStack justifyContent="space-around">
                 <AiOutlineHeart size = '25px'/>
                  <Text>MY Wishlist</Text>
                  <Button color={"white"} bg={"teal.400"}>0</Button>
              </HStack>


              <HStack>
                  <BsHouseGear size = '25px'/>
                  <Text>My Favorite Stories</Text>
              </HStack>


              <HStack>
                  <BsHeadset size = '25px'/>
                  <Text>Help & Support</Text>
              </HStack>
         </Stack>
       
         {/* <h2></h2> 
         <h2> </h2>
        <h2></h2>
         <h2></h2>
         <h2> </></h2>
        <h2> </></h2> */}
        

    </Box>
}