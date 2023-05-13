import { Box ,Text,strong} from "@chakra-ui/react";

export default function Footer1(){
    return <Box style={{width:'90%',margin:'auto',marginTop:"2%",display:"flex",gap:'10px',flexDirection:"column"}} _hover={{cursor:'pointer'}}  >
    <h4><strong>Our Landing Category</strong></h4>

    <Text>  <strong>Mobile & Tablets:</strong>Android Phones| Smartphones| Feature Phones| Unboxed Phones| Refurbished Phones| Tablets| CDMA Phones| Value Added Services| Sell Old/ Used Mobiles</Text>
  <Text><strong>Computers:Laptops</strong>| Printers| Routers| Ink & Toner Cartridges| Monitors| Video Games| Unboxed & Refurbished Laptops| Assembled Desktops| Data Cards</Text>
  <Text><strong>TV, Audio & Large Appliances:TVs & DTH</strong>| Home Theatre Systems| Hidden Cameras & CCTVs| Refrigerators| Washing Machines| Air Conditioners| Cameras| Speakers</Text>
 <Text><strong>Mobile & Laptop Accessories:Headphones</strong>| Power Banks| Backpacks| Mobile Cases & Covers| Pen Drives| External Hard Disks| Mouse| Smart Watches & Fitness Bands| MicroSD Cards</Text>
  <Text><strong>Appliances:Trimmers</strong>| Hair Dryers| Emergency Lights| Water Purifiers| Electric Kettles| Hair Straighteners| Induction Cooktops| Sewing Machines| Geysers</Text>
  <Text><strong>Home & Kitchen:Bedsheets</strong>| Hardware & Sanitaryware| Towels, Bath Linens| Furniture| Cookware| Kitchen Tools| Home Cleaning Utilities| Doormats| Curtains| Gardening Essentials</Text>
  <Text><strong>Fashion:Women's</strong> Clothing| Men's Clothing| Women's Ethnic Wear| Men's Fashion Accessories| Sports Wear| Western Wear| Handbags & Wallets, Clutches| Handbags| Sarees| T-Shirts| Lingerie & Sleep Wear</Text>
  </Box>
}