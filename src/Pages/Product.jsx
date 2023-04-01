// import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "./responsive";
import { useState } from "react";
// import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, } from "react";
import { useDispatch } from "react-redux";
import { getSingleProducts } from "../Redux/ProductReducer/action";
import ReactStars from "react-rating-stars-component";

import Navigationbar from '../Components/HomePage/Navigationbar';
import NavbarDrop from "./HomeComponents/NavbarDrop"
import { Footer } from "./HomeComponents/Footer";
import { FooterUpper } from "./HomeComponents/FooterUpper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Prices = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Star = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;


const DIV = styled.div`
.heading-home-page{
    margin-top: 52px;
    display: flex;
    font-size: 27px;
    font-weight: 700;
}
.div-1{
   
}

/* .imga{
    border: 3px solid black;
} */
 
`;

const BOX = styled.div`
.imgtag:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    /* border: 1px solid #24a3b5; */
}
`

export const Product = () => {
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
    const [Price, setPrice] = useState(300);
    const [data, setdata] = useState({})
    // const { id=4 } = useParams()
    const id = 64
    const [rate, setRate] = useState()
    const dispatch = useDispatch()
    const [Products, setProducts] = useState([])

    useEffect(() => {
        dispatch(getSingleProducts(id)).then((res) => {
            setdata(res.payload.data)
            setRate(res.payload.data.rating)
        }).catch((err) => console.log(err))
    }, [])


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((res) => setProducts(res.data))
    }, [])

    // category
    // :
    // "men's clothing"
    // description
    // :
    // "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    // id
    // :
    // 1
    // image
    // :
    // "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    // price
    // :
    // 109.95
    // rating
    // :
    // { rate: 3.9, count: 120 }
    // title
    // :
    console.log(Products)



    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let su = getRndInteger(1, 8)
    let st = getRndInteger(9, 12)

    console.log(su)
    console.log(st)
    // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango","Banana", "Orange", "Lemon", "Apple", "Mango"];

    // const citrus = Products.slice(su, st);
    // console.log(Pr)
    console.log(Products.slice(su, st));


    const firstExample = {
        size: 30,
        value: rate || 3.8,
        edit: false
    };
    console.log(rate)




    return (
        <>
            <Navigationbar />
            <NavbarDrop />

            <Container>

                <Wrapper>
                    <ImgContainer>
                        <Image src={data.image} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{data.title}</Title>
                        <Desc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, consequat id
                            condimentum ac, volutpat ornare.
                        </Desc>

                        <Prices>Price : ₹{data.price}</Prices>
                        <Star>Rating:
                            <ReactStars  {...firstExample} />
                        </Star>

                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="gray" />
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>


                            </AmountContainer>
                            <div style={{ display: "flex", width: "253px", justifyContent: "space-between" }}>


                                <Button>ADD TO CART</Button>
                                <Button>BUY NOW</Button>
                            </div>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>

            </Container>

            <div>
                <DIV >
                    <h2 className='heading-home-page'>Popular Product's</h2>
                </DIV>
                <BOX style={{position:"relative"}}>
                    <div style={{ display: "flex" }} >
                        {
                            Products.slice(su, st).map((res) => {
                                return <Carousel responsive={responsive}>
                                    <div className='imgtag' style={{

                                        // flexDirection: "column",
                                        alignItems: "center", padding: "30px",
                                        padding: "30px"
                                    }}>
                                        <div>

                                            <img width={"120px"} src={res.image} alt="" />
                                        </div>
                                        <div>

                                            <p>{res.title}</p>
                                        </div>
                                        <div>

                                            <p>{res.category}</p>
                                        </div>
                                    </div>
                                </Carousel>
                            })

                        }
                    </div>

                </BOX>
            </div>
            <FooterUpper />
            <Footer />
        </>
    );
};

//   Product;