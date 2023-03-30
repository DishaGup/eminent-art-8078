import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Store = () => {

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
                <h2 className='heading-home-page'>Your Gadgets Store</h2>
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

                            <img src="https://cdn.shopclues.com/images1/thumbnails/116805/200/200/153268880-116805429-1671089587.jpg" alt="" />
                        </div>
                        <div>

                            <p>AXL AHP-02-RED  </p>
                        </div>
                        <div>

                            <p>₹359 MRP:₹2,999 93% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div className='imga'>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/100740/200/200/146388171-100740822-1675171070.jpg" alt="" />
                        </div>
                        <div>

                            <p>Nokia 1600 Black 1.4 </p>
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

                            <img src="https://cdn.shopclues.com/images1/thumbnails/116797/200/200/153266451-116797598-1670661206.jpg" alt="" />
                        </div>
                        <div>

                            <p>WIRELESS M10 High-Quality </p>
                        </div>
                        <div>

                            <p>₹679 MRP:₹1,500 69% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/111981/200/200/151421606-111981882-1668507505.jpg" alt="" />
                        </div>
                        <div>

                            <p>P47 Wireless Over the Ear </p>
                        </div>
                        <div>

                            <p>₹569 MRP:₹959 33% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/116805/200/200/153268878-116805417-1671089567.jpg" alt="" />
                        </div>
                        <div>

                            <p> ABN02 Bluetooth... </p>
                        </div>
                        <div>

                            <p>₹349 MRP:₹1,999 76% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/116535/200/200/153144782-116535470-1672225743.jpg" alt="" />
                        </div>
                        <div>

                            <p>9 Watt LED Bulb   </p>
                        </div>
                        <div>

                            <p>₹429 MRP:₹540 11% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/116677/200/200/153184500-116677306-1668704913.jpg" alt="" />
                        </div>
                        <div>

                            <p>APPLE iPhone X </p>
                        </div>
                        <div>

                            <p>₹24179 ₹38,999 38% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/116204/200/200/153028072-116204216-1665758616.jpg" alt="" />
                        </div>
                        <div>

                            <p>Digimate TWS </p>
                        </div>
                        <div>

                            <p>₹99 ₹170 42% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/112753/200/200/150675724-112753447-1678938257.jpg" alt="" />
                        </div>
                        <div>

                            <p>SYS Standing Hello Kitt...</p>
                        </div>
                        <div>

                            <p>₹398 ₹1,199 67% off</p>
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
