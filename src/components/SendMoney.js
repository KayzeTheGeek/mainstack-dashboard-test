import React from "react";
import styled from "styled-components";
import { ImageCircle } from "../components/SharedComponent";
import dellon from "../images/pexels-dellon-thomas-2216607.jpg";
import moose from "../images/pexels-moose-photos-1036622.jpg";
import moose2 from "../images/pexels-moose-photos-1036623.jpg";
import creditcardIcon from "../images/credit-card-svgrepo-com.svg";
import sumIcon from "../images/money-svgrepo-com.svg";

import { SendMoneyButton, Input } from "../components/SharedComponent";

const SendMoneyWrapper = styled.div`
  margin-top: 15px;

  .contact_details {
    margin-top: 30px;
    display: flex;
    width: 75%;
    justify-content: space-between;

    @media screen and (max-width: 770px) {
      width: 50%;
    }
  }

  .form_container {
    margin-top: 40px;
  }

  .input_container {
    label {
      display: block;
      margin-bottom: 10px;
    }

    .input_field {
      margin-bottom: 10px;
      position: relative;
      img {
        width: 20px;
        position: absolute;
        top: 9px;
        left: 6px;
      }
    }
  }
`;

const AddCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 900;
  padding-bottom: 2%;
  border-radius: 50%;
  color: #000000;

  @media screen and (max-width: 1170px) {
    width: 40px;
    height: 40px;
  }
`;

export default function SendMoney() {
  return (
    <SendMoneyWrapper>
      <h3>Send Money to</h3>
      <div className="contact_details">
        <ImageCircle image={dellon} />
        <ImageCircle image={moose} />
        <ImageCircle image={moose2} />
        <AddCircle>+</AddCircle>
      </div>
      <form className="form_container">
        <div className="input_container">
          <label>Card Number</label>
          <div className="input_field">
            <img src={creditcardIcon} alt="creditcard" />
            <Input type="text" placeholder="4566 4456 6656 5251" />
          </div>
        </div>

        <div className="input_container">
          <label>Sum</label>
          <div className="input_field">
            <img src={sumIcon} alt="sum" />
            <Input type="text" placeholder="130.00" />
          </div>
        </div>
        <SendMoneyButton>Send money</SendMoneyButton>
      </form>
    </SendMoneyWrapper>
  );
}
