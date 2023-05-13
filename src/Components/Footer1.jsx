import { Box ,Text,border,strong} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Footer1(){

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };
//box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    return <>
    <Box style={{width:"100%",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",marginTop:'15px', paddingTop:'15px',paddingBottom:'15px',backgroundColor:'white'}}>
    <Box style={{width:'95%',margin:'auto',marginTop:"2%",display:"flex",gap:'10px',flexDirection:"column",}}  >
    <h4><strong>Our Landing Category</strong></h4>

    <Text>  <strong>Mobile & Tablets:</strong>Android Phones| Smartphones| Feature Phones| Unboxed Phones| Refurbished Phones| Tablets| CDMA Phones| Value Added Services| Sell Old/ Used Mobiles</Text>
  <Text><strong>Computers:Laptops</strong>| Printers| Routers| Ink & Toner Cartridges| Monitors| Video Games| Unboxed & Refurbished Laptops| Assembled Desktops| Data Cards</Text>
  <Text><strong>TV, Audio & Large Appliances:TVs & DTH</strong>| Home Theatre Systems| Hidden Cameras & CCTVs| Refrigerators| Washing Machines| Air Conditioners| Cameras| Speakers</Text>
 <Text><strong>Mobile & Laptop Accessories:Headphones</strong>| Power Banks| Backpacks| Mobile Cases & Covers| Pen Drives| External Hard Disks| Mouse| Smart Watches & Fitness Bands| MicroSD Cards</Text>
  <Text><strong>Appliances:Trimmers</strong>| Hair Dryers| Emergency Lights| Water Purifiers| Electric Kettles| Hair Straighteners| Induction Cooktops| Sewing Machines| Geysers</Text>
  <Text><strong>Home & Kitchen:Bedsheets</strong>| Hardware & Sanitaryware| Towels, Bath Linens| Furniture| Cookware| Kitchen Tools| Home Cleaning Utilities| Doormats| Curtains| Gardening Essentials</Text>
  <Text><strong>Fashion:Women's</strong> Clothing| Men's Clothing| Women's Ethnic Wear| Men's Fashion Accessories| Sports Wear| Western Wear| Handbags & Wallets, Clutches| Handbags| Sarees| T-Shirts| Lingerie & Sleep Wear</Text>
  </Box>
    </Box>
 
                 <div style={{backgroundColor:"lightblue",marginTop:'30px'}}>
            <div style={{ marginTop: "43px", width:"95%" ,margin:"auto" }}>
                <div style={{ display: "flex" }}>
                    <h6 style={{ fontWeight: "700" }}>Online Shopping in India @www.ShopClues.com</h6>
                </div>
                <div style={{ display: "flex", marginTop: "23px" }}>
                    <p style={{ fontWeight: "700" }}>Indias Asli Online Shopping Hub  www.ShopClues.com</p>
                </div>
                <div>
                    Back in 2011, when people were hopping from one Store to another for best bargains on an overall households monthly bill, ShopClues was being developed as a budget-friendly online bazaar in India. www.ShopClues.com was then given a shape  and strategy in 2012 as Indias First & Largest Fully Managed Marketplace
                </div>
                <div style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}>
                    Ting se Leke Tong – with Aflatooni Products!
                </div>
                <div>
                    ‘What you Think is What you Get’ isn’t just a saying at ShopClues. With over 2.8 crore products, you can get just about everything that you can imagine at ShopClues. From usual products in Electronics, Fashion, Home & Kitchen, to unusual products like cow dung cakes, Knife Sharpeners, etc., ShopClues tops in everything. So, you see what we mean when we say Aflatooni Products! ShopClues has revolutionized the conceptual Online Shopping in India with initiatives such as Ghar Wapsi Sale, Bigger than the Biggest Thank You Sale, #EkZeroKum Sale etc. Amongst many other shopping sites, ShopClues is the leader in unstructured categories like Daily Utilities, Garden Needs, Hardware, Kitchen Storage, and others.
                </div>
                <div style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}>
                    Believable Shopping @ Unbelievable Prices
                </div>
                <div>
                    Every day, ShopClues delights millions of discount-hunters with Paisa-Vasool Shopping Experience with prices as low as Re.1. We are the first ones to introduce the idea of ‘Sab Kuch Wholesale Ke Rate Par’ on an online platform with shopping options to both wholesale as well as retail seekers.
                </div>

                <div style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}>
                    Experiencing the neighbourhood Local Bazaar
                </div>
                <div>ShopClues brings the experience of India’s Flea Markets online, in the form of its weekly properties - Sunday Flea Market, Refreshing Monday Sale, Triple Value Friday Sale, and Wednesday Brand Bazaar. Another property capturing the essence of regional Indian shopping is called NRH (National Regional Heritage), which gives a sneak-peek into India’s Cultural Gullies at very reasonable prices. These online markets showcase products with range so wide, and prices so low, that they beat the offline neighbourhood markets of India. The concept especially works incredibly well with the middle class population habituated in tier 2 & 3 cities.</div>
                <div style={{ display: "flex", marginTop: "23px" }}>
                    <p style={{ fontWeight: "700" }}>An Online Selling Space for SME Merchants</p>
                </div>
                <div>Working as a marketplace, ShopClues has been well-supported by a bourgeoning community of certified merchants in India. Unlike various other online shopping sites, ShopClues has achieved the largest merchant base of over 3.5 Lakhs. This online shopping website is creating history by empowering local and regional merchants, primarily from Tier 2 & 3 cities and making them a national enterprise at ShopClues.</div>

                <div style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}>
                    ShopClues Surety
                </div>
                <div>
                    The ShopClues Surety Program, was launched in order to ensure a hassle free shopping experience for its customers. This premium service is in addition to the ShopClues Buyer Protection program which ensures an extensive 5 point quality check of the products in order to give Customers a seamless shopping experience. In order to make it user-friendly, the platform marks out the rating of the products classified into ‘Best Buy’, ‘Great Buy’, ‘Value Buy’ or ‘Brand Authorized’. This allows the customer to make an optimal purchase decision while shopping on the platform.

                </div>
                <div style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}>
                    ShopClues VIP Club
                </div>
                <div>Get Rewards Every time you Shop! Join the VIP Club and Get 5% Cashback on Every Order. That's not all! With Free Membership, No Hidden Costs & No Registration Procedures, get Exclusive Benefits on Grofers, Lenskart, Food Panda & Hi Care Pest Control Services. Join the Club Now</div>
                </div>
            </div>  
  </>
}