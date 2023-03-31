import { useState } from "react";
import styled from "styled-components";
import "./SingleProductPage.css"
import Zoom from "react-img-zoom";
import { useParams } from "react-router-dom";
import { useEffect, } from "react";
import { useDispatch } from "react-redux";
import { getSingleProducts } from "../Redux/ProductReducer/action";

export const SingleProductPage = () => {
  const [Price, setPrice] = useState(300);
  const[data,setdata]=useState({})
const {id}=useParams()

const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getSingleProducts(id)).then((res)=>setdata(res.payload.data)).catch((err)=>console.log(err))
},[])

  return (
    <>
      {" "}
      <div>
        <Title>
          <div>Single Product Page !</div>
        </Title>
      </div>
      <DIV>
        <div className="box-1-single-page">

          <Zoom
            img={data.image}
            zoomScale={4}
            width={370}
            height={380}
            className="Img-box-of-single-page"
          />
        </div>
        <div className="box-2-single-page">
          <div>
            <h1 className="title-1-of-the-product-in-single-page">
              Buy 2017 Camisa Masculina 2017 Men'S Fashion Slim Fit Casual Shirt
            </h1>
            <p className="title-2-of-the-product-in-single-page">
              {" "}
             {data.title}
            </p>
            <p className="title-3-of-the-product-in-single-page">
              {" "}
             {data.price}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "100px" }}>

            <div className="btn-1-single-page">
              <button >ADD TO CART</button>
            </div>


            <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundImage: "-webkit-linear-gradient(65deg,#ff934b 0%,#ff5e62 100%)", border: "2px solid #be3726", padding: "12px", width: "115px", borderRadius: "12px" }}>
              <button style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>BUY NOW</button>

            </div>
          </div>
        </div>
        {/* <div className="box-3-single-page">2</div> */}
      </DIV>
    </>
  );
};

// npm install --save styled-components
// npm i react-img-hover-zoom
const Title = styled.div`
  font-size: 2.5em;
  text-align: center;
  color: black;

  font-style: bold;
`;

const DIV = styled.div`
  border: 2px solid black;
  width: 90%;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  grid-gap: 50px;
  justify-items: space-evenly;
  margin: 94px;
  height: 400px;
  box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .btn-1-single-page{
    /* height: 55px;
    width: 150px; */
    border: "2px solid #be3726";
    box-shadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    padding: "12px"; 
    width: "115px"; 
    border-radius: "12px" ;

    button {
      color: rgb(190, 55, 38);
    font-size: 15px;
    font-weight: bold;
    border: 2px solid;
    padding: 10px;
    width: 155px;
    height: 56px;
    border-radius: 3px;
    }
  }
  .Img-box-of-single-page {
    border: 2px solid black;
    display: flex;
    margin: auto;
    margin-top: 12px;
  }

  .box-2-single-page {
    border: 2px solid black;
  }
  .box-3-single-page {
    border: 2px solid black;
  }

  .title-1-of-the-product-in-single-page {
   
    font-size: 20px;
    font-weight: 700;
    margin-top:23px;
  }
  .title-2-of-the-product-in-single-page {
   
    margin-top:23px;
  
  }
  .title-3-of-the-product-in-single-page {
   
    margin-top:23px;
  }
`;
