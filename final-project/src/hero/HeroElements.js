import styled, { css, keyframes } from "styled-components";
import Hero from "../img/Hero.jpg";

export const HeroContainer = styled.div`
  background-image: url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 4rem;
  width: fit-content;
   font-family: Oswald;
  @media only screen and (max-width: 468px) {
   font-size: 3rem;
  }
`;
export const HeroDescription = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 5%;
  margin-top: 5%;
  font-family: Oswald;
  font-weight: 500;
`;
export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const SocialMediaNav = styled.div`
 position: absolute;
 left: 50%;
 top: 5%;
 transform: translateX(-50%);
 width: 380px;
 height: 5vh;
 display: flex;
 justify-content: space-evenly;
 align-items: center;

 > * {
    transform: scale(1.5);
    color: white;
 }

 >*:hover {
    color: orange;
    cursor: pointer;
 }

 @media only screen and (max-width: 600px) {
    width: 85%;
 }
`;



const Change = keyframes`
0% {
   content: 'Tech';
}
25% {
   content: 'Enviroment';
}
50% {
   content: 'Space';
}

75% {
   content: 'Science';
}

100% {
   content: 'Physics';
}
`;

export const Topic = styled.span`
  :before {
    content: "";
    animation: ${Change} infinite 13s;
    color: orange;
    font-weight: bold;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0%;
  height: 8vh;
  background: #241E20;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
`;
export const Tag = styled.p`
  color: white;
  margin-right: 20px;
  background: #CFAD3B;
  padding: 2px 13px;
  border-radius: 5px;
  
`;

export const BarTitle = styled.h3`
  color: white;
  @media only screen and (max-width: 400px) {
     font-size: 1rem;
  }
`;