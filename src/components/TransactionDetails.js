import React from "react";
import styled from "styled-components";
import calcIcon from "../images/calculator-svgrepo-com.svg";
import amazonIcon from "../images/amazon-svgrepo-com.svg";
import youtubeIcon from "../images/youtube-svgrepo-com.svg";
import starbucksIcon from "../images/starbucks.svg";

const Wrapper = styled.div`
  margin-top: 20px;

  .trans_header {
    display: flex;
    justify-content: space-between;
    font-family: ${(theme) => theme.fonts};

    h1 {
      font-size: 1.3em;
      align-self: center;
      span {
        font-size: 0.67em;
        font-weight: 500;
        margin-left: 4px;
      }
    }

    img {
      margin-top: 1.7%;
      width: 20px;
    }
  }

  .table {
    width: 100%;
    margin-top: 23px;
    h3.table_data {
      font-weight: 500;
      font-size: 90%;
      color: #787878;
    }

    .table_row {
      display: flex;
      margin-bottom: 27px;
    }

    .table_data {
      flex: 21.6666%;
    }
    .table_data:nth-child(1) {
      flex: 35%;
    }

    .table_data:nth-child(3),
    .table_data:nth-child(4) {
      text-align: right;
    }
  }

  .table_body {
    .table_data:nth-child(1),
    .table_data:nth-child(2) {
      display: flex;
      align-items: center;
    }

    .table_data:nth-child(1) {
      margin-left: 10px;
    }
    .table_data:nth-child(2) {
      font-size: 0.8em;
      font-weight: 600;
    }

    .table_data:nth-child(3),
    .table_data:nth-child(4) {
      font-weight: 600;
    }
  }

  .date {
    font-size: 80%;
    font-weight: 600;
    color: #787878;
  }
`;

const TableHeader = () => (
  <div className="table_header table_row">
    <h3 className="table_data">Name of transaction</h3>
    <h3 className="table_data">Category</h3>
    <h3 className="table_data">CashBack</h3>
    <h3 className="table_data">Amount</h3>
  </div>
);

const TableRow = ({
  icon,
  transName,
  category,
  amount,
  cashback,
  color,
  date,
}) => (
  <div className="table_row table_body">
    <div className="table_data">
      <img src={icon} alt={transName} style={{ width: 20, marginRight: 10 }} />
      <div className="trans_name">
        {" "}
        <h3>{transName}</h3>
        <p className='date'>{date}</p>
      </div>
    </div>
    <div className="table_data">
      <div
        style={{
          width: 7,
          height: 7,
          marginRight: 10,
          backgroundColor: color,
          borderRadius: "50%",
        }}
      ></div>
      {category}
    </div>
    <div className="table_data">{cashback}</div>
    <div className="table_data">{amount}</div>
  </div>
);
const transactionData = [
  {
    icon: amazonIcon,
    transName: "Amazon",
    date: "Apr 24,2021 at 1:40pm",
    category: "Electronic Devices",
    cashback: "+$2",
    color: "black",
    amount: "-$242.00",
  },
  {
    icon: starbucksIcon,
    transName: "Starbucks",
    date: "Apr 22,2021 at 1:40pm",
    category: "Cafe and restaurant",
    cashback: "+$2",
    color: "red",
    amount: "-$242.00",
  },
  {
    icon: youtubeIcon,
    transName: "Youtube",
    date: "Apr 13,2021 at 1:40pm",
    category: "Social mdeia",
    cashback: "+$2",
    color: "black",
    amount: "-$242.00",
  },
];

export default function transactionDetails() {
  return (
    <Wrapper>
      <div className="trans_header">
        <h1>
          Transactions <span>Apr 2021</span>
        </h1>
        <img src={calcIcon} alt="calculator" />
      </div>
      <div className="table">
        <TableHeader />
        {transactionData.map((data) => (
          <TableRow {...data} />
        ))}
      </div>
    </Wrapper>
  );
}
