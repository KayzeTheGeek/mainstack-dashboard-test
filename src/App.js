import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  overflow-y: auto;

  .left {
    flex: calc(100% / 12 * 2);
    padding: 3%;
    background-color: ${(props) => props.theme.pallette.primary};
    color: #fff;
    z-index: 10;

    @media screen and (max-width: 770px) {
      position: fixed;
      font-size: 12px;
      width: 0%;
      display: flex;
      visibility: hidden;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      transition: all 200ms ease-out;
    }

    .closeIcon {
      width: 20px;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 100;
      filter: invert(1);
    }

    .admin_image_summary {
      width: 70%;
      margin-top: 150px;
      text-align: center;
    }

    .sidebar_image {
      margin: auto;
      margin-bottom: 5px;
    }

    &.showNavigation {
      @media screen and (max-width: 770px) {
        width: 50%;
        visibility: visible;
      }
    }
  }

  .right {
    padding: 3%;
    padding-left: 4%;
    flex: calc(100% / 12 * 10);
    background-color: ${(props) => props.theme.pallette.secondary};
    @media screen and (max-width: 770px) {
      flex: calc((100% / 12) * 12);
    }
  }
`;

const BackDrop = styled.div`
  position: fixed;
  visibility: hidden;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;

  &.showBackdrop {
    @media screen and (max-width: 770px) {
      transition: all 200ms ease-out;
      visibility: visible;
    }
  }
`;


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <BackDrop className={isMenuOpen && "showBackdrop"}></BackDrop>
      <Sidebar show={{ isMenuOpen, setIsMenuOpen }} />
      <Dashboard setIsMenuOpen={setIsMenuOpen} />
    </Container>
  );
}

export default App;
