import React from "react";
import styled from "styled-components";
import { createCardData } from "../../lib/api";

const CardWrap = styled.div`
 box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
`;
const CartText = styled.span`
    font-size: 20px;
    color: #CEA0E3;
`

const getDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1 + "";
  const day = now.getDate() + "";
  const monthF = month.length < 2 ? 0 + month : month;
  const dayF = day.length < 2 ? 0 + day : day;
  return parseInt(year + monthF + dayF);
};

const NewCard = ({ year, month, rawData, setUserData }) => {
  const createCard = async () => {
    const cardForm = {
      date: getDate(),
      title: "",
      image: "",
      weather: "",
      tags: [],
      summary: "",
      text: "",
    };
    rawData[year][month].push(cardForm);
    const data = await createCardData(rawData);
    data[year] && setUserData(data[year][month]);
  };

  return (
    <>
      <CardWrap  onClick={createCard}>
        <CartText>+ 추가해 주세요</CartText>
      </CardWrap>
    </>
  );
};

export default NewCard;
