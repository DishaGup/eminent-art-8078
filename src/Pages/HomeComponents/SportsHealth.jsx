// SportsHealth
import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const SportsHealth = () => {

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
                <h2 className='heading-home-page'>Sports Health</h2>
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

                            <img src="https://cdn.shopclues.com/images1/thumbnails/108803/280/1/150436700-108803780-1596188707.jpg" alt="" />
                        </div>
                        <div>

                            <p>Medical Equipment.... </p>
                        </div>
                        <div>

                            <p>Upto 80% Off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div className='imga'>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/104507/280/1/148819339-104507472-1579085071.jpg" alt="" />
                        </div>
                        <div>

                            <p>Fitness Bands & Watches</p>
                        </div>
                        <div>

                            <p>Upto 80% Off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images/thumbnails/27595/280/1/11448611056.jpg" alt="" />
                        </div>
                        <div>

                            <p>Bottles & Shakers</p>
                        </div>
                        <div>

                            <p>Upto 80% Off</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/103419/280/1/148130677-103419160-1571212818.jpg" alt="" />
                        </div>
                        <div>

                            <p>Nutrition & Supplements </p>
                        </div>
                        <div>

                            <p>Upto 80% Off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/95250/280/1/142772233-95250978-1544273464.jpg" alt="" />
                        </div>
                        <div>

                            <p>Skipping Ropes </p>
                        </div>
                        <div>

                            <p>Starting 99@</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/107160/280/1/149847355-107160132-1590790597.jpg" alt="" />
                        </div>
                        <div>

                            <p>Yoga Mats</p>
                        </div>
                        <div>

                            <p>Upto 80% Off</p>
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

