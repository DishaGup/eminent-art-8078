// BrandedDeals

import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const BrandedDeals = () => {

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
    return (
        <>

            <DIV >
                <h2 className='heading-home-page'>Branded Deals</h2>
            </DIV>
            <BOX style={{ position: "relative", marginTop: "32px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <Carousel responsive={responsive}>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px",
                        padding: "30px"
                    }}>
                        <div >

                            <img src="https://cdn.shopclues.com/images1/thumbnails/101449/200/200/146972107-101449020-1664652884.jpg" alt="" />
                        </div>
                        <div>

                            <p>i7S TWS Twins Wireless </p>
                        </div>
                        <div>

                            <p>₹199 MRP:₹2,999 93% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div className='imga'>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/115808/200/200/152878340-115808533-1668506624.jpg" alt="" />
                        </div>
                        <div>

                            <p>Woakers Men Multicolor... </p>
                        </div>
                        <div>

                            <p>₹719 MRP:₹3,299 78% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1665754103.jpg" alt="" />
                        </div>
                        <div>

                            <p>Hana & Morris Men Red</p>
                        </div>
                        <div>

                            <p>₹469 MRP:₹1,500 69% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/45487/200/200/116636483-45487609-1671186820.jpg" alt="" />
                        </div>
                        <div>

                            <p>Angel Craft Sport Shoes </p>
                        </div>
                        <div>

                            <p>₹669 MRP:₹999 33% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/104239/200/200/148699700-104239236-1668507832.jpg" alt="" />
                        </div>
                        <div>

                            <p>ASE TWS AirBass... </p>
                        </div>
                        <div>

                            <p>₹489 MRP:₹1,999 76% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/114621/200/200/152497670-114621560-1625832145.jpg" alt="" />
                        </div>
                        <div>

                            <p>Trueware Freshy Storage Contai...  </p>
                        </div>
                        <div>

                            <p>₹479 MRP:₹540 11% off</p>
                        </div>
                    </div>

                </Carousel>



            </BOX>
        </>
    )
}

const DIV = styled.div`
.heading-home-page{
    margin-top: 52px;
    display: flex;
    font-size: 27px;
    font-weight: 700;
}
.div-1{
   
}

.imga{
    border: 3px solid black;
}
 
`;

const BOX = styled.div`
.imgtag:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border: 1px solid #24a3b5;
}
`
