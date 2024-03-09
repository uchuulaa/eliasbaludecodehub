import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+251-942-42-1291">+251942421291</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:elijahbag456@gmail.com">elijahbag456@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
            <Slogan>Building your dream webites</Slogan>
        </CompanyContainer>
<SocialContainer>
   <SocialIcons href='https://github.com/uchuulaa'>
  <AiFillGithub size= '2rem' />
</SocialIcons>

<SocialIcons href='https://linkedin.com/eliasgamtessa'>
  <AiFillLinkedin size= '2rem' />
</SocialIcons>

<SocialIcons href='https://instagram.com/eliasgamtessa'>
  <AiFillInstagram size= '2rem' />
</SocialIcons> 
</SocialContainer>  
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
