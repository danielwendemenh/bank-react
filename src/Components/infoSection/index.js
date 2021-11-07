import React from "react";
import { Button } from "../ButtonElements";
import {
  Column2,
  Img,
  ImgWrap,
  InfoCOntainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWarpper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoElements";
const Infosection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  desciption,
  buttonLablel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoCOntainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWarpper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{desciption}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLablel}
                  </Button>
                </BtnWrap>
              </TextWarpper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoCOntainer>
    </>
  );
};

export default Infosection;
