import React, { useState } from 'react'
import styled from "styled-components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const DailyEssentials = () => {

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
<DIV> 
            <div >
                <h2 className='heading-home-page'>Daily Essentials</h2>
            </div>
            <BOX style={{ position: "relative", marginTop: "32px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",backgroundColor:'white' }}>
                <Carousel responsive={responsive}>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px",
                        padding: "30px"
                    }}>
                        <div>

                            <img width= "151px" src="https://cdn.shopclues.com/images1/thumbnails/105589/280/1/149278210-105589660-1585251645.jpg" alt="" />
                        </div>
                        <div>

                            <p>Cooking Essentials</p>
                        </div>
                        <div>

                            <p>Starting at Rs.49</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div className='imga'>

                            <img width="84px" src="https://cdn.shopclues.com/images1/thumbnails/105589/320/1/149278289-105589933-1585251885.jpg" alt="" />
                        </div>
                        <div>

                            <p>Skin, Hair & Body</p>
                        </div>
                        <div>

                            <p>Starting at Rs.99</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img width="148px" src="https://cdn.shopclues.com/images1/thumbnails/104441/280/1/148788228-104441348-1578472379.jpg" alt="" />
                        </div>
                        <div>

                            <p>Kitchen Essentials</p>
                        </div>
                        <div>

                            <p>Starting at Rs.49</p>
                        </div>
                    </div>
                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/105520/280/1/149254102-105520442-1584863770.jpg" alt="" />
                        </div>
                        <div>

                            <p>Masks, Sanitizers & More </p>
                        </div>
                        <div>

                            <p>Starting at Rs.49</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images/thumbnails/42332/280/1/966030079473255231PUTPaCZnL146606056314665883171470319810.jpg" alt="" />
                        </div>
                        <div>

                            <p>Cleaning & Dusting Supplies </p>
                        </div>
                        <div>

                            <p>Starting at Rs.109</p>
                        </div>
                    </div>

                    <div className='imgtag' style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", padding: "30px"
                    }}>
                        <div>

                            <img src="https://cdn.shopclues.com/images1/thumbnails/105577/320/320/149274414-105577366-1585235325.jpg" alt="" />
                        </div>
                        <div>

                            <p>Laundry Detergents  </p>
                        </div>
                        <div>

                            <p>Starting at Rs.49</p>
                        </div>
                    </div>

                </Carousel>



            </BOX> </DIV>
        </>
    )
}



const DIV = styled.div`
 background-color:#e9f6f7;
 

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
