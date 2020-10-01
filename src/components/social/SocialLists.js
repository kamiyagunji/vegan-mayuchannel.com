import React from 'react';
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaRegStickyNote,
    FaMailBulk,
} from 'react-icons/fa';

const SocialItem = ({ url, Icon }) => (
    <li className="m-1">
        <a className="text-white p-2" href={url} rel="noopener noreferrer" target="_blank"><Icon /></a>
    </li>
);

class SocialList extends React.Component{

    state = {
        socials: [
            {
                url: 'https://twitter.com/GunjiKamiya',
                Icon: FaTwitter
            },
            {
                url: 'https://www.facebook.com/profile.php?id=100015145056188',
                Icon: FaFacebookF
            },
            {
                url: 'https://linkedin.com/in/gunjikamiya',
                Icon: FaLinkedinIn
            },
            {
                url: 'https://github.com/kamiyagunji',
                Icon: FaGithub
            },
            {
                url: 'https://www.instagram.com/gunji_kamiya/',
                Icon: FaInstagram
            },
            {
                url: 'https://note.com/kamiya0118',
                Icon: FaRegStickyNote
            },
            {
                url: 'mailto:kurosugunji@gmail.com',
                Icon: FaMailBulk
            }
        ]
    }

    render(){
        return(
            <ul className={`list-unstyled d-flex ${this.props.margin ? 'mb-5' : ''}`}>
                {
                    this.state.socials.map((item, index) => (
                        <SocialItem key={index} {...item} />
                    ))
                }
            </ul>
        );
    }
}

export default SocialList;