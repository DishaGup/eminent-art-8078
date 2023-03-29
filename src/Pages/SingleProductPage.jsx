import { useState } from "react";
import styled from "styled-components";
import "./SingleProductPage.css"
import Zoom from "react-img-zoom";

export const SingleProductPage = () => {
  const [Price, setPrice] = useState(300);

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
            img="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41UgeJlsVXL.jpg"
            zoomScale={4}
            width={320}
            height={280}
            className="Img-box-of-single-page"
          />
        </div>
        <div className="box-2-single-page">
          <div>
            <h1 className="title-of-the-product-in-single-page">
              Buy 2017 Camisa Masculina 2017 Men'S Fashion Slim Fit Casual Shirt
            </h1>
            <p className="title-of-the-product-in-single-page">
              {" "}
              Product Id : 153323501
            </p>
            <p className="title-of-the-product-in-single-page">
              {" "}
              Price :{Price} ₹
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "100px" }}>

            <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", border: "2px solid #be3726", padding: "12px", width: "115px", borderRadius: "12px" }}>
              <button style={{ color: " #be3726", fontSize: "15px", fontWeight: "bold" }}>Add To Cart</button>
            </div>

           
            <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundImage:"-webkit-linear-gradient(65deg,#ff934b 0%,#ff5e62 100%)",border: "2px solid #be3726", padding: "12px", width: "115px", borderRadius: "12px"  }}>
              <button style={{ color: "white", fontSize: "15px", fontWeight: "bold"}}>Buy Now</button>

            </div>
          </div>
        </div>
        <div className="box-3-single-page">2</div>
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
  /* margin: auto; */
  /* height: 300px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
  grid-gap: 50px;
  justify-items: space-evenly;
  margin: 94px;
  height: 400px;
  /* .box-1-single-page {
    border: 2px solid black;
    /* display: flex;
    margin: auto; */
   */

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

  .title-of-the-product-in-single-page {
    font-size: 12px;
  }
`;
