import React from "react";
import "./listing.css";
// import { BsArrowRightShort } from "react-icons/bs";

const Listing = () => {
  return (
    <div className="listingSection">
      <div class="admincardBox">
        <div class="listingCard">
          <div>
            <div class="numbers">1504</div>
            <div class="cardsName">Daily Views</div>
          </div>

          <div class="iconBx">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>

        <div class="listingCard">
          <div>
            <div class="numbers">80</div>
            <div class="cardsName">Sales</div>
          </div>

          <div class="iconBx">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        <div class="listingCard">
          <div>
            <div class="numbers">284</div>
            <div class="cardsName">Comments</div>
          </div>

          <div class="iconBx">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>

        <div class="listingCard">
          <div>
            <div class="numbers">7842</div>
            <div class="cardsName">Earning</div>
          </div>

          <div class="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div class="details">
        <div class="recentOrders">
          <div class="recentcardHeader">
            <h2 className="recentTitle">Recent Orders</h2>
            <a href="#" class="bttn">
              View All
            </a>
          </div>

          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>₹ 1200</td>
                <td>Paid</td>
                <td>
                  <span class="status delivered">Delivered</span>
                </td>
              </tr>

              <tr>
                <td>Dell Laptop</td>
                <td>₹ 110000</td>
                <td>Due</td>
                <td>
                  <span class="status pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Apple Watch</td>
                <td>₹ 20000</td>
                <td>Paid</td>
                <td>
                  <span class="status return">Return</span>
                </td>
              </tr>

              <tr>
                <td>Addidas Shoes</td>
                <td>₹ 6200</td>
                <td>Due</td>
                <td>
                  <span class="status inProgress">In Progress</span>
                </td>
              </tr>

              <tr>
                <td>Star Refrigerator</td>
                <td>₹ 50000</td>
                <td>Paid</td>
                <td>
                  <span class="status delivered">Delivered</span>
                </td>
              </tr>

              <tr>
                <td>Dell Laptop</td>
                <td>₹ 110</td>
                <td>Due</td>
                <td>
                  <span class="status pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Apple Watch</td>
                <td>₹ 1200</td>
                <td>Paid</td>
                <td>
                  <span class="status return">Return</span>
                </td>
              </tr>

              <tr>
                <td>Addidas Shoes</td>
                <td>₹ 620</td>
                <td>Due</td>
                <td>
                  <span class="status inProgress">In Progress</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="recentCustomers">
          <div class="recentcardHeader">
            <h2 className="recentTitle">Recent Customers</h2>
          </div>

          <table>
            <tr>
              <td width="60px">
                <div class="imgBx">
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div class="imgBx">
                  <img
                    src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div class="imgBx">
                  <img
                    src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Disha <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div class="imgBx">
                  <img
                    src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Sourav <br /> <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div class="imgBx">
                  <img
                    src="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Rahul <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div class="imgBx">
                  <img
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Lokesh <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div class="imgBx">
                  <img
                    src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Prayas <br /> <span>India</span>
                </h4>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listing;
