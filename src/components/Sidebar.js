import styled from "styled-components";
import homeIcon from "../images/icons8-home.svg";
import creditIcon from "../images/pie-chart-svgrepo-com.svg";
import serviceIcon from "../images/squares-svgrepo-com.svg";
import walletIcon from "../images/leather-wallet-svgrepo-com.svg";
import { ImageCircle } from "../components/SharedComponent";
import guyMan from "../images/pexels-andrew-personal-training-697509.jpg";
import closeIcon from "../images/cancel-close-svgrepo-com.svg";
import { useRef, useEffect } from "react";

const Typography = styled.h1`
  font-family: ${(props) => props.theme.fonts};
  color: #ffff;
  margin-bottom: 3rem;
  font-size: 3em;

  @media screen and (max-width: 770px) {
    margin-top: 3rem;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;

  &.showNavigation {
    @media screen and (max-width: 770px) {
      display: block;
    }
  }
`;

const SideNav = styled.div`
  display: flex;
  margin-bottom: 30px;
  text-align: center;

  & > p {
    font-size: 1.2em;
  }
  .sideIcon {
    width: 25px;
    filter: invert(1);
    margin-right: 20px;
  }
`;
const Sidebar = ({ show: { isMenuOpen, setIsMenuOpen } }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <>
      <BackDrop className={isMenuOpen && "showNavigation"}></BackDrop>
      <div className={`left ${isMenuOpen && "showNavigation"}`} ref={ref}>
        <img
          src={closeIcon}
          alt="closeIcon"
          className="closeIcon"
          onClick={() => setIsMenuOpen(false)}
        />
        <Typography>Rise.</Typography>
        <div>
          <SideNav>
            <img className="sideIcon" src={homeIcon} alt="home icon" />
            <p>Home</p>
          </SideNav>
          <SideNav>
            <img className="sideIcon" src={creditIcon} alt="credit icon"></img>
            <p>Credit</p>
          </SideNav>
          <SideNav>
            <img className="sideIcon" src={walletIcon} alt="wallet icon"></img>
            <p>Wallet</p>
          </SideNav>
          <SideNav>
            <img
              className="sideIcon"
              src={serviceIcon}
              alt="service icon"
            ></img>
            <p>Service</p>
          </SideNav>
        </div>
        <div className="admin_image_summary">
          <ImageCircle className="sidebar_image" image={guyMan} />
          <p>Calvin west</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
