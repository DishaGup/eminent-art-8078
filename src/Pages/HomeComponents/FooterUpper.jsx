import React from 'react'
import { AiOutlineSecurityScan } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { FcCurrencyExchange } from "react-icons/fc";
import { GiShoppingCart } from "react-icons/gi";

export const FooterUpper = () => {
    return (
        <div style={{
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",paddingBottom:"21px"
        }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "43px" }}>
                <h2 style={{
                    fontSize: "30px",
                    fontWeight: "700"
                }}>Band Of Trust</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "34px" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div style={{ fontSize: "57px" }}>

                        <SiSpringsecurity />
                    </div>
                    <div>
                        <h1 style={{ fontSize: "20px", fontWeight: "700" }}>Great Selection</h1>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div style={{ fontSize: "57px" }}>

                        <FcCurrencyExchange />
                    </div>
                    <div>
                        <h1 style={{ fontSize: "20px", fontWeight: "700" }}>Low Price</h1>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div style={{ fontSize: "57px" }}>

                        <GiShoppingCart />
                    </div>
                    <div>
                        <h1 style={{ fontSize: "20px", fontWeight: "700" }}>Speedy Delivery </h1>
                    </div>
                </div>

            </div></div>
    )
}
