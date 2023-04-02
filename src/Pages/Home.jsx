import React, { useState } from "react";
import styled from "styled-components";
import { Carousels } from "./HomeComponents/Carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Store } from "./HomeComponents/Store";
import { DailyEssentials } from "./HomeComponents/DailyEssentials";
import { ShopcluesGlobal } from "./HomeComponents/ShopcluesGlobal";
import { FestiveSpecials } from "./HomeComponents/FestiveSpecials";
import { TrendingFashionZone } from "./HomeComponents/TrendingFashionZone";
import { BudgetBazaar } from "./HomeComponents/BudgetBazaar";
import { SportsHealth } from "./HomeComponents/SportsHealth";
import { BrandStore } from "./HomeComponents/BrandStore";
import { BrandedDeals } from "./HomeComponents/BrandedDeals";
import { FooterUpper } from "./HomeComponents/FooterUpper";
import { Footer } from "./HomeComponents/Footer";
import Navmain from "../Components/HomePage/Navmain";

export const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* <Navigationbar />  */}
      {/* <Navbar/> */}
      {/* <NavbarDrop /> */}
      <Navmain />
      <Carousels />
      <DIV>
        <div>
          <h2 className="heading-home-page"> Deals of the Day</h2>
        </div>
        <BOX
          style={{
            position: "relative",
            marginTop: "22px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            backgroundColor: "white",
          }}
        >
          <Carousel responsive={responsive}>
            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
                padding: "30px",
                backgroundColor: "1px solid green",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/99370/200/200/145508146-99370521-1668508420.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>i7S TWS Twins Wireless </p>
              </div>
              <div>
                <p>₹199 MRP:₹2,999 93% off</p>
              </div>
            </div>
            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div className="imga">
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/116776/200/200/153261792-116776449-1670501239.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Woakers Men Multicolor... </p>
              </div>
              <div>
                <p>₹719 MRP:₹3,299 78% off</p>
              </div>
            </div>

            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/116980/200/200/153323501-116980797-1678944373.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Hana & Morris Men Red</p>
              </div>
              <div>
                <p>₹469 MRP:₹1,500 69% off</p>
              </div>
            </div>
            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/116615/200/200/153169251-116615525-1668259369.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Angel Craft Sport Shoes </p>
              </div>
              <div>
                <p>₹669 MRP:₹999 33% off</p>
              </div>
            </div>

            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/116338/200/200/153074088-116338818-1654683296.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>ASE TWS AirBass... </p>
              </div>
              <div>
                <p>₹489 MRP:₹1,999 76% off</p>
              </div>
            </div>

            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/116588/200/200/153160305-116588548-1662375960.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Trueware Freshy Storage Contai... </p>
              </div>
              <div>
                <p>₹479 MRP:₹540 11% off</p>
              </div>
            </div>
            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/84855/200/200/137076261-84855545-1668508422.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>7 Piece Stainless Steel </p>
              </div>
              <div>
                <p>₹419 MRP:₹999 58% off</p>
              </div>
            </div>
            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/116341/200/200/153075109-116341518-1674116493.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Himalaya Protein Hair Cream </p>
              </div>
              <div>
                <p>₹99 MRP:₹170 42% off</p>
              </div>
            </div>
            <div
              className="imgtag"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/114458/200/200/152411647-114458504-1665403425.jpg"
                  alt=""
                />
              </div>
              <div>
                <p>Jackly 31 in 1 Screwdriver Set</p>
              </div>
              <div>
                <p>₹199 MRP:₹205 3% off</p>
              </div>
            </div>
          </Carousel>
        </BOX>
      </DIV>
      <Store />
      <DailyEssentials />
      <ShopcluesGlobal />
      <FestiveSpecials />
      <TrendingFashionZone />
      <BudgetBazaar />
      <SportsHealth />
      <BrandStore />
      <BrandedDeals />
      <FooterUpper />
      <Footer />
    </>
  );
};

const DIV = styled.div`
  /* background: #e1fbff; */
  background-color: #e9f6f7;
  .heading-home-page {
    margin-top: 52px;
    display: flex;
    font-size: 27px;
    font-weight: 700;
  }
  .div-1 {
  }

  .imga {
    border: 1px solid black;
  }
`;

const BOX = styled.div`
     background-colour: #fff
     border='1px solid red'
     
.imgtag:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border: 1px solid #24a3b5;
}
`;
