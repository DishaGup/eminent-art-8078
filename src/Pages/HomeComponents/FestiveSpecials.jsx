// Festive Specials


import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const FestiveSpecials = () => {

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
                <h2 className='heading-home-page'>Festive Specials</h2>
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

                            <img src="https://cdn.shopclues.com/images/thumbnails/88912/320/320/131487154GOLDENPEACOCK1512550255.jpg" alt="" />
                        </div>
                        <div>

                            <p>Women's Ethnic Wear </p>
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

                            <img src="https://cdn.shopclues.com/images/detailed/41945/HandloomPinkKurta1_1469600960.jpg" alt="" />
                        </div>
                        <div>

                            <p>Men's Ethnic Wear</p>
                        </div>
                        <div>

                            <p>Min 40% Off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images/detailed/85345/129033198_Untitled1copy_1506507048.jpg" alt="" />
                        </div>
                        <div>

                            <p>Ethnic Footwear</p>
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

                            <img src="https://cdn.shopclues.com/images/thumbnails/48680/320/320/61SUwF0UAAL1480795166.jpg" alt="" />
                        </div>
                        <div>

                            <p>Wooden Temples</p>
                        </div>
                        <div>

                            <p>Upto 60% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images/thumbnails/67262/320/320/IMAES9GDZV3NPG8M1491081901.jpg" alt="" />
                        </div>
                        <div>

                            <p>Pooja Essentials</p>
                        </div>
                        <div>

                            <p>Upto 70% off</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images/thumbnails/84338/320/320/128352190Ganesh1505896312.jpg" alt="" />
                        </div>
                        <div>

                            <p>Wall Decors  </p>
                        </div>
                        <div>

                            <p>Min 60% off</p>
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
