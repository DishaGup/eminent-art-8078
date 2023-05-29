import React,{useState} from "react";
import "../../Styles/Navbar/Navdrop.css";
import { gift } from "./data";
import { Link } from "react-router-dom";
import { Stack, Flex,
  Text,
  IconButton,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,HStack } from "@chakra-ui/react";
const NavDrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className="bottom_cont" >
      <ul id="bottom_category" fontsize={["5px","5px","5px","5px","10px","10px"]}>
        {gift?.map((el, ind) => (
          <div id="dropdown" key={ind}>
            <li key={el} id="dropbtn">
              <Link to={`/products/${el.text.toLowerCase()}`}   
        >{el.text}</Link>
            </li>
          
  <div id="dropcont">
  <div className="big_parent">
    <div id="parent">
      <Link
        to={`/products/${
          el.text.toLowerCase
        }/${el.lists.title.toLowerCase()}`}
      >
        <h2 className="q">{el.lists.title}</h2>
      </Link>
      {el.lists.Sidebar?.map((item, indi) => (
        <div key={indi}>
          <p className="hub">{item}</p>
        </div>
      ))}
    </div>
    <div className="right_grid">
      {el.lists.alldata?.map((divs, ind) => (
        <div key={divs.heading + ind}>
          <Link
            to={`/products/${el.lists.title.toLowerCase()}/${divs.heading.toLowerCase()}`}
          >
            {" "}
            <h2 className="grid_head">{divs.heading}</h2>
          </Link>
          {divs.child?.map((fields, ind) => (
            <Link m='1px' p='1px'
              key={fields + ind}
              to={`/products/${el.lists.title.toLowerCase()}/${divs.heading.toLowerCase()}/${fields.toLowerCase()}`}
            >
              {" "}
              <p className="hub" key={fields}>
                {fields}
              </p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>


            
          
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavDrop;


export const NavReal=()=>{

return(
  <div className="bottom_cont" >
      <ul id="bottom_category" fontsize={["5px","5px","5px","5px","10px","10px"]}>
     
    {gift?.map((el,index)=>(
    <Popover key={el+index} id="dropbtn" trigger={"hover"} placement={"bottom-start"}>
     
  <PopoverTrigger>
  
    <Link to={`/products/${el.text.toLowerCase()}`}      
        > <Text 
      fontSize={"16px"}
      fontWeight={500}
      textTransform='uppercase'
      textAlign={'center'}
      justifyContent={'center'}
      pt='5px'
    >
      {el.text}
    </Text>
    </Link>
</PopoverTrigger>
<PopoverContent
  borderTop={0}
  boxShadow={"md"}
 
  borderRadius={0}
  p={5}
  minW={"sm"}
  w={"100vw"}
>
 
    <div className="right_grid">
      {el?.alldata?.map((divs, ind) => (
        <div key={divs.heading + ind}>
          <Link
            to={`/products/${el?.text?.toLowerCase()}/${divs?.heading?.toLowerCase()}`}
          >
            {" "}
            <h2 className="grid_head">{divs.heading}</h2>
          </Link>
          {divs?.child?.map((fields, indi) => (
            <Link m='1px' p='1px'
              key={fields+Math.random() + indi}
              to={`/products/${el?.text?.toLowerCase()}/${divs?.heading?.toLowerCase()}/${fields?.toLowerCase()}`}
            >
              {" "}
              <p className="hub" key={fields}>
                {fields}
              </p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  {/* </div>
   */}
</PopoverContent>


    </Popover> 
      ))}
    {/* </Flex>
    </Stack> */}
    </ul>
    </div>
)

}