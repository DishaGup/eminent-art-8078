import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { styled } from 'styled-components';

export const Carousels = () => (
   

       <div style={{ width: "98%",marginTop:"70px",margin:"auto" }}>
 
            <Carousel autoPlay   showThumbs={false}
        showStatus={false}
        infiniteLoop
       
        style={{ display: "flex", justifyContent: "center" }}>
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
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Jan/19/HB1_Refurb_Web_SYM_19Jan23.jpg" />

                </div>
                <div>
                    <img alt="" src="https://cdn.shopclues.com/images/banners/2023/Jan/19/JMAX_HB2_Web_Riya_19Jan22.jpg" />

                </div>


            </Carousel>

        </div>
      
  
);
