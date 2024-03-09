import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I invite you to explore a collection of my projects that highlight my skills in front-end development, responsive design, and user experience. With a strong focus on clean code and attention to detail, I strive to deliver intuitive and visually appealing websites that leave a lasting impression.
      </SectionText>
      <Button onClick={()=>window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;