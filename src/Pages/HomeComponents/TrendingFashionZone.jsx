// TrendingFashionZone

import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const TrendingFashionZone = () => {

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
                <h2 className='heading-home-page'>Trending Fashion Zone</h2>
            </DIV>
            <BOX style={{ position: "relative", marginTop: "32px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                <Carousel responsive={responsive}>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px",
                        padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/111302/200/200/151175444-111302416-1665752917.jpg" alt="" />
                        </div>
                        <div>

                            <p>Vivient Women Navy Bl</p>
                        </div>
                        <div>

                            <p>₹369 MRP:₹1,599 77% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div className='imga'>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/59427/200/200/121025856-59427391-1664649251.jpg" alt="" />
                        </div>
                        <div>

                            <p>Bhuwal Fashion Embr... </p>
                        </div>
                        <div>

                            <p>₹399 MRP:₹1,399 71% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/115808/200/200/152878340-115808533-1668506624.jpg" alt="" />
                        </div>
                        <div>

                            <p>Y Green BMW Men</p>
                        </div>
                        <div>

                            <p>₹69 MRP:₹799 91% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/109203/200/200/150594079-109203126-1662586835.jpg" alt="" />
                        </div>
                        <div>

                            <p>Prijam Men's Brown</p>
                        </div>
                        <div>

                            <p>₹679 MRP:₹1,599 58% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/116632/200/200/153174155-116632236-1664949974.jpg" alt="" />
                        </div>
                        <div>

                            <p>Gradient Uv Protection  </p>
                        </div>
                        <div>

                            <p>₹139 MRP:₹499 72% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/84155/200/200/136729574-84155235-1660931981.jpg" alt="" />
                        </div>
                        <div>

                            <p>Raabta Fashion Nav </p>
                        </div>
                        <div>

                            <p>₹479 MRP:₹1,299 63% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/94177/200/200/141944974-94177244-1664652293.jpg" alt="" />
                        </div>
                        <div>

                            <p>Adam Jones Gradient</p>
                        </div>
                        <div>

                            <p>₹299 MRP:₹1,449 79% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/84270/200/200/136779470-84270698-1660926875.jpg" alt="" />
                        </div>
                        <div>

                            <p>Adam Jones White UV </p>
                        </div>
                        <div>

                            <p>₹169 MRP:₹1,299 87% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/105327/200/200/149167360-105327521-1664659530.jpg" alt="" />
                        </div>
                        <div>

                            <p>Raabta Women White C...</p>
                        </div>
                        <div>

                            <p>₹299 MRP:₹999 70% off</p>
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

