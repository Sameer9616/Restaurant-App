import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    const userEmail = localStorage.getItem("userEmail");
    console.log(userEmail);
    try {
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      });
      const data = await response.json();
      console.log(data);
      setOrderData(data);
    } catch (error) {
      console.log("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {orderData.orderData &&
            orderData.orderData.order_data &&
            orderData.orderData.order_data
              .slice(0)
              .reverse()
              .map((item, index) => {
                return (
                  <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div>
                      <div className="d-flex align-items-center">
                        <div>Order date: </div>
                        <div>{item[0]["Order_data"]}</div>
                      </div>

                      <div>
                        {item.map((subItem, index) => {
                          if (index !== 0) {
                            return (
                              <div className="py-1 row">
                                <div
                                  className="col-4 p-3"
                                  style={{
                                    aspectRatio: "1/1",
                                  }}
                                >
                                  <div
                                    style={{
                                      aspectRatio: "1/1",
                                      width: "40%",
                                      borderRadius: "10px",
                                      backgroundColor: "grey",
                                    }}
                                  >
                                    <img
                                      src={subItem.img}
                                      className=""
                                      alt="..."
                                      style={{
                                        backgroundColor: "grey",
                                        width: "10%",
                                        aspectRatio: "1/1",
                                      }}
                                    />{" "}
                                  </div>
                                </div>
                                <div className="col-8 p-3">
                                  <div className="fs-4 font-bold">
                                    {subItem.name}
                                  </div>
                                  <div className="fs-6 pt-1 d-flex align-items-center">
                                    <div>Quantity:</div>
                                    <div>{subItem.qty}</div>
                                  </div>
                                  <div className="fs-6 pt-1 d-flex align-items-center">
                                    <div>Size:</div>
                                    <div>{subItem.size}</div>
                                  </div>
                                  <div className="fs-6 pt-1 d-flex align-items-center">
                                    <div>Price:</div>
                                    <div>{subItem.price}</div>
                                  </div>
                                </div>
                              </div>
                            );
                          } else {
                            <></>;
                          }
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
