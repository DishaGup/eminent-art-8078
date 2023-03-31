
import { Flex, Text,Icon } from "@chakra-ui/react";
import {AiFillStar} from 'react-icons/ai'
const StarRating = ({ rating }) => {
  const maxRating = 5; 
  const percent = (rating / maxRating) * 100; 

  return (
    <Flex>
      <Text>
        {[...Array(maxRating)].map((_, index) => (
          <Icon as={AiFillStar}
            key={index}
            color={index < Math.floor(rating) ? "yellow.500" : "#757575"}
          />
        ))}
      </Text>
      <Text>({rating})</Text>
    </Flex>
  );
};
export default StarRating