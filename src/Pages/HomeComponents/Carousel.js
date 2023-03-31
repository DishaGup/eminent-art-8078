import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { styled } from 'styled-components';

export const Carousels = () => (
    <div style={{ display: "flex" }}>

        <div style={{ width: "83%",marginTop:"43px" }}>

            <Carousel autoPlay>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/31/HB1_Month_Web_Esha_31Mar23.jpg" />

                </div>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/25/HB2_Refurbished_Web_SYM_25Mar23.jpg" />

                </div>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/31/HB4_JDD_Web_Esha_31Mar23.jpg" />

                </div>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Mar/01/Intel_Web_12thGenGaming.jpg" />

                </div>


            </Carousel>

        </div>
        <div>
            <div>
                <img width={"183px"} src="https://cdn.shopclues.com/images/banners/2023/Feb/16/Platinum_Esha_16Feb23_01.jpg" alt="" />
            </div>
            <div>
                <img width={"191px"}  src="https://cdn.shopclues.com/images/banners/2023/Feb/16/Platinum_Esha_16Feb23_02.jpg" alt="" />
            </div>
            <div>
                <img width={"191px"}  src="https://cdn.shopclues.com/images/banners/2023/Feb/16/Platinum_Esha_16Feb23_03.jpg" alt="" />
            </div>
        </div>
    </div>

);
