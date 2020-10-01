import React from 'react';
import Avatar from '../avatar/Avatar';
import SocialList from '../social/SocialLists';
import './LeftSide.scss';

const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am</p>
                    <h1 className="o-font-lg ml-2 o-text-purple">vegan-mayuchannel</h1>
                </div>
                <p className="text-center text-white">I am a software engineer. Japanese born in 2000 who is interested in space and computers. I like making software.</p>
                <SocialList margin />
            </div>
        </div>
    </>
);

export default LeftSide;