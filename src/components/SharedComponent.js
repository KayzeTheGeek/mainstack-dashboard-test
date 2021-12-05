import styled from "styled-components";

export const ImageCircle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
  background-image: url(${(props) => props.image});
  background-size: cover;

  @media screen and (max-width: 1170px) {
    height: 40px;
    width: 40px;
  }
`;
export const SendMoneyButton = styled.button`
  width: 100%;
  padding: 15px 0;
  background-color: #000000;
  border:none;
  font-size: 1em;
  font-weight: 600;
  color: #fff;
  border-radius: 10px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 3%;
  padding-left: 40px;
  border: none;
  box-shadow: 0 0 0 1px #787878;
  border-radius: 10px;
`;
