import React from 'react'

import "react-multi-carousel/lib/styles.css";
export const Footer = () => {

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
        <div responsive={responsive} style={{ display: "flex", marginTop: "34px", justifyContent: "space-around" }}>

            <div>
                <div>

                    <h1 style={{
                        fontSize: "21px",
                        fontWeight: "700"
                    }}>

                        Shopper Central
                    </h1>
                </div>
                Easy Returns & Replacement
                <br />
                Sign In/Register
                <br />
                Our Policies
                <br />
                CluesBucks
                <br />
                Payment Options
                <br />
                ShopClues Surety
                <br />
                FAQs (Help)
                <br />
                Service Centers
                <br />
                User Agreement
            </div>

            <div>
                <div>
                    <h1 style={{
                        fontSize: "21px",
                        fontWeight: "700"
                    }}>

                        Merchant Central
                    </h1>
                </div>
                Merchant Panel
                <br />
                How To Sell
                <br />
                Commission Structure
                <br />
                Fullfillment Policy
                <br />
                Policies & Rules
                <br />
                User Agreement
                <br />
                Testimonials
                <br />
                Seller Summit
                <br />
                Merchant Blog
                <br />
                Developer Resources

            </div>

            <div>
                <div>
                    <h1 style={{
                        fontSize: "21px",
                        fontWeight: "700"
                    }}>

                        About Us
                    </h1>
                </div>
                History
                <br />
                Band of Trust
                <br />
                In the News
                <br />
                Awards
                <br />
                Careers
                <br />
                Blog

            </div>

            <div>
                <div>
                    <h1 style={{
                        fontSize: "21px",
                        fontWeight: "700"
                    }}>

                        Contact Us
                    </h1>
                </div>
                Merchant Support
                Bulk Orders
                Press
            </div>
            <div>
                <div>
                    <h1 style={{
                        fontSize: "21px",
                        fontWeight: "700"
                    }}>

                        Press
                    </h1>
                </div>
                In the News
            </div>



        </div>
    )
}
