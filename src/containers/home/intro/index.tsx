import React from 'react';
import SocialProfile from '../../../components/social-profile/social-profile';
import { IntroWrapper, IntroImage, IntroTitle, Desciption } from './style';
// import AvatarPortfolio from '../../../images/avatar.png';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io';

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: '#',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: '#',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: '#',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoGithub />,
    url: '#',
    tooltip: 'Github',
  },
];

const Intro: React.FunctionComponent<IntroProps> = () => {

  return (
    <IntroWrapper>
      <IntroImage>
        {/* <img src={AvatarPortfolio} /> */}
      </IntroImage>
      <IntroTitle>
        Hey! I’m <b> Vegan Factory Okinawa</b>
      </IntroTitle>
      <Desciption>test</Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  );
};

export default Intro;
