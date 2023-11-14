import styled from "styled-components"
import { colors, screen, typos } from "../../utils/styleConfig"

export const BannerContainer = styled.div`
	position: relative;
	overflow: hidden;
  display: flex;
  justify-content: flex-start;
	border-radius: 2.5rem;
	height: 11.1rem;
	width: 100%;
	padding: 1.6rem 3.1rem;
	background-image: url(${process.env.PUBLIC_URL + "/images/banner-img-sm.jpg"});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
  margin: 0 0 4.3rem;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
  }
  
  @media(min-width: ${screen.md}px) {
    padding: 0 2rem;
  }

  @media(min-width: ${screen.lg}px) {
    height: 22.3rem;
    justify-content: center;
    padding: 0;
    background-image: url(${process.env.PUBLIC_URL + "/images/banner-img-xl.jpg"});
  }
`
export const BannerText = styled.p`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  color: ${colors.white};
  font-size: ${typos.sm + typos.unit};
  max-width: 20rem;
  
  @media(min-width: ${screen.md}px) {
    max-width: 35rem;
  }
  @media(min-width: ${screen.lg}px) {
    font-size: ${typos.xl + typos.unit};
    max-width: none;
  }
`
