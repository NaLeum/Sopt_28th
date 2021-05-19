import React from "react";
import styled from "styled-components";
import EmptyImage from "../../assets/Image.svg";
const CardWrap = styled.div`
    box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
`;
const CardImageWrap = styled.div`
    width: 220px;
    height: 148px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #C4C4C4;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CardImagePhoto = styled.img`
    width: inherit;
    height: inherit;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
`;
const CardTop = styled.header`
      margin: 9px 12px;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
`;
const CardTopText = styled.span`
        color: #CEA0E3;
`;
const CardText = styled.span`
      font-size: 18px;
      height: 25px;
      margin: 0 12px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
`;
const CardTagWrap = styled.div`
      margin: 9px 12px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #CEA0E3;
`
const CardTag = styled.span`
        font-size: 14px;
        color: white;
        background-color: #CEA0E3;
        padding: 4px 11px;
        border-radius: 5px;
        margin-right: 7px;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
`;


const getDateFormat = (date) => {
  const year = parseInt((date % 10000) / 100);
  const day = date % 100;
  return `${year}월 ${day}일`;
};

const Card = ({ props }) => {
  const { date, title, image, weather, tags } = props;

  return (
    <>
      <CardWrap>
        <CardImageWrap>
          {image ? (
            <CardImagePhoto  src={image} alt="" />
          ) : (
            <CardImagePhoto  src={EmptyImage} alt="" />
          )}
        </CardImageWrap>
        <CardTop className="card__top">
          <CardTopText className="card__top--date">{getDateFormat(date)}</CardTopText>
          <CardTopText className="card__top--weather">{weather}</CardTopText>
        </CardTop>
        <CardText className="card__title">{title ? title : "제목 없음"}</CardText>
        <CardTagWrap className="card__tags">
          {tags.map((tag, index) => {
            return (
              <CardTag key={index} className="card__tags--tag">
                {tag}
              </CardTag>
            );
          })}
        </CardTagWrap>
      </CardWrap>
    </>
  );
};

export default Card;
