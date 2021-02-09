import React from 'react'
import {
   FaInstagram,
   FaFacebook,
   FaLinkedin,
   FaTwitter,
   FaGithub
} from 'react-icons/fa'
import {
   HeroContainer,
   HeroTitle,
   HeroDescription,
   SocialMediaNav,
   TextContainer,
   Topic,
   BottomBar,
   BarTitle,
   Tag,
} from './HeroElements'

function Hero() {
   return (
      <div>
         <HeroContainer>
            <SocialMediaNav>
               <FaFacebook />
               <FaGithub />
               <FaInstagram />
               <FaTwitter />
               <FaLinkedin />
            </SocialMediaNav>
            <TextContainer>
               <HeroTitle>ScienceVaders Blog</HeroTitle>
               <HeroDescription>Everyday's <Topic></Topic> News All In One Place</HeroDescription>
            </TextContainer>

            <BottomBar>
               <Tag>Tag</Tag>
               <BarTitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</BarTitle>
            </BottomBar>
         </HeroContainer>
      </div>
   )
}

export default Hero
