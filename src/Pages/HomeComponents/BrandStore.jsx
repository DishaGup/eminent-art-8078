// BrandStore

import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const BrandStore = () =>
{




    
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
                <h2 className='heading-home-page'>Brand Store</h2>
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

                            <img src="https://cdn.shopclues.com/images1/thumbnails/104122/280/1/148627878-104122294-1577180435.jpg" alt="" />
                        </div>
                        <div>

                            <p>Khadi</p>
                        </div>
                        <div>

                            <p>Starting @ 69</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div className='imga'>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/109822/280/1/150760050-109822495-1600850631.jpg" alt="" />
                        </div>
                        <div>

                            <p>Redmi </p>
                        </div>
                        <div>

                            <p>Save Upto Rs. 5000</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images/thumbnails/34620/280/1/902417708981309282209372miltonwaterbottleset1434449243144186494711454507692145672090914577949341459228900.jpg" alt="" />
                        </div>
                        <div>

                            <p>Milton</p>
                        </div>
                        <div>

                            <p>Upto  69% off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/109013/280/1/150523151-109013699-1603186269.jpg" alt="" />
                        </div>
                        <div>

                            <p>Realme </p>
                        </div>
                        <div>

                            <p>Save Upto Rs. 5000</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/109124/280/1/150563834-109124498-1600113360.jpg" alt="" />
                        </div>
                        <div>

                            <p>Vivo </p>
                        </div>
                        <div>

                            <p>Save Upto Rs. 5000</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/108804/280/1/150437204-108804736-1602946705.jpg" alt="" />
                        </div>
                        <div>

                            <p>Philips  </p>
                        </div>
                        <div>

                            <p>Upto 40% Off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/108327/320/1/150284086-108327730-1594283471.jpg" alt="" />
                        </div>
                        <div>

                            <p>American Tourister</p>
                        </div>
                        <div>

                            <p>Upto 75 % off</p>
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
