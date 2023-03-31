import { Box } from "@chakra-ui/react"
import LeftDiv from "./Wishlist/LeftDiv"
import {RightDiv} from "./Wishlist/RightDiv"

const Wishlist=()=>{
    return <Box>
    
      <Box display={"flex"} justifyContent="space-around" mt={"2%"}>
  <LeftDiv/>
  <RightDiv/>
    </Box>
    </Box>
}

export {Wishlist}