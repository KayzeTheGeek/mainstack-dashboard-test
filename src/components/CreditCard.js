import React from "react";
import styled from "styled-components";
import logoIcon from "../images/wifi-signal-svgrepo-com.svg";
import masterCardIcon from "../images/mastercard-svgrepo-com.svg";

const CardWrapper = styled.div`
  width: 100%;
  background-color: #000;
  border-radius: 10px;
  padding: 6%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(#1565c0, #b92b27);
  color: #fff;
  
  .left_side {
    .date_cvv_container {
      display: flex;
      margin-top: 10%;
      width: 70%;
      justify-content: space-between;
    }

    .expiry_date,
    .cvv_no {
      font-size: 0.65em;

      & > p:nth-child(2) {
        font-size: 1rem;
      }
    }
  }

  .right_side {
    .mastercard_logo {
      margin-left: 30px;
      margin-top: 100%;
    }
    .rise_logo {
        display: flex;
        justify-content: flex-end;
      img {
        width: 25px;
        filter: invert(1);
        transform: rotate(90deg);
      }
    }
  }
`;




export default function CreditCard() {
  return (
    <div>
      <h1 style={{ fontSize: "1.9rem", marginBottom: "15px",marginTop: "-15px" }}>My Card</h1>
      <CardWrapper>
        <div className="left_side">
          <p style={{ fontSize: "87%" }}>Current Balance</p>
          <h1 style={{ fontSize: "1.4rem", marginBottom: "38px" }}>
            $5,750.20
          </h1>
          <p className="card_no">**** **** **** 1269</p>

          <div className="date_cvv_container">
            <div className="expiry_date">
              <p>VALID TILL</p>
              <p>12/23</p>
            </div>
            <div className="cvv_no">
              <p>cvv</p>
              <p>***</p>
            </div>
          </div>
        </div>
        <div className="right_side">
          <div className="rise_logo">
            <img src={logoIcon} alt="logo" />
            <h3>RISE.</h3>
          </div>

          <img
            className="mastercard_logo"
            src={masterCardIcon}
            alt="masterCard"
            width="50px"
          />
        </div>
      </CardWrapper>
      <div>
        <div
          style={{
            width: "10%",
            height: "5px",
            borderRadius: "20%",
            backgroundColor: "#000",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "25px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0px",
          }}
        >
          <p>Balance</p>
          <h3 style={{ fontSize: "1rem" }}>$140,420</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <p>Credit Limit</p>
          <h3 style={{ fontSize: "1rem" }}>$150,000</h3>
        </div>
      </div>
    </div>
  );
}
