import styled from "styled-components";
import notificationIcon from "../images/notification-svgrepo-com.svg";
import searchIcon from "../images/search-svgrepo-com.svg";
import TransactionDetails from "../components/TransactionDetails";
import CreditCard from "../components/CreditCard";
import SendMoney from "../components/SendMoney";
import Graph from "../components/Graph";
import hamburgerIcon from "../images/hamburger-menu-svgrepo-com.svg"

const Wrapper = styled.section`
  .dashboard_summary {
    display: flex;
    margin-top: 20px;
    @media screen and (max-width: 660px) {
      flex-direction: column;
    }
    .left_dashboard {
      flex: calc((100% / 12) * 8);

      padding-right: 7%;

      @media screen and (max-width: 1170px) {
        flex: calc((100% / 12) * 7);
      }
    }
    .right_dashboard {
      flex: calc((100% / 12) * 4);

      @media screen and (max-width: 1170px) {
        flex: calc((100% / 12) * 5);
      }
    }
  }
`;

const DashshboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 40px;

  .hamburger {
    width: 40px;
    display: none;

    @media screen and (max-width: 770px) {
      display: inline;
      margin-top: -10px;
      margin-right: 50px;
    }
  }
  .header_left {
    font-size: 1.5em;

    @media screen and (max-width: 770px) {
      font-size: 1.2em;
    }

    span {
      font-weight: bold;
    }
  }

  .header_right {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .search_bar {
    position: relative;
    margin-right: 5px;

    @media screen and (max-width: 770px) {
      width: 70%;
    }

    input {
      width: 100%;
      padding: 5px 0;
      padding-left: 40px;
      font-size: 1.4em;
      border: none;
      box-shadow: 0 0 0 1px #787878;
      border-radius: 5px;
    }

    & > img {
      position: absolute;
      top: 11px;
      left: 7px;

      filter: invert(0.3);
      width: 20px;
    }
  }

  .notification_bar {
    position: relative;

    & > img {
      filter: invert(0.3);
      width: 25px;
    }

    .notification_label {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      top: -5px;
      right: -5px;
      z-index: 10;
      font-size: 50%;
      text-align: center;
      color: #fff;
    }
  }
`;

const Dashshboard = ({ setIsMenuOpen }) => {
  return (
    <Wrapper className="right">
      <DashshboardHeader>
        <img
          src={hamburgerIcon}
          alt="hamburger menu"
          className="hamburger"
          onClick={() => setIsMenuOpen(true)}
        />
        <p className="header_left">
          Welcome back, <span>Calvin</span>
        </p>
        <div className="header_right">
          <div className="search_bar">
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="search" />
          </div>
          <div className="notification_bar">
            <div className="notification_label">2</div>
            <img src={notificationIcon} alt="notification" />
          </div>
        </div>
      </DashshboardHeader>
      <div className="dashboard_summary" style={{ marginBottom: 30 }}>
        <div className="left_dashboard">
          <Graph />
        </div>
        <div className="right_dashboard">
          <CreditCard />
        </div>
      </div>
      <div className="dashboard_summary">
        <div className="left_dashboard">
          <TransactionDetails />
        </div>
        <div className="right_dashboard">
          <SendMoney />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashshboard;
