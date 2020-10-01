import React from 'react';
import Title from '../title/Title';
import {
    FaMagic,
    FaCode,
    FaBook,
    FaQuestion
} from 'react-icons/fa';
import './Services.scss';

const ServiceBox = ({ Icon, title, subTitle, description }) => (
    <div className="services__div text-light m-2 d-flex flex-column align-items-center justify-content-center p-2 overflow-hidden">
        <div className="fas fa-magic o-font-lg mb-3 mt-3">
            <Icon />
        </div>
        <strong>{title}</strong>
        <small className="mb-3 services__small position-relative">{subTitle}</small>
        <p className="text-center o-font-sm">{description}</p>
    </div>
);

class Services extends React.Component{

    state = {
        interest: [
            {
                Icon: FaCode,
                title: 'ソフトウェア開発',
                subTitle: 'Code & Run',
                description: 'フレームワークを使ったソフトウェア開発が好きです',
            },
            {
                Icon: FaMagic,
                title: 'デザイン',
                subTitle: 'UI & UX Architecture',
                description: '人とコンピューターの境界線が好きです',
            },
            {
                Icon: FaBook,
                title: '読書',
                subTitle: 'INFORMATION INPUT',
                description: '分野問わず色々な情報と触れ合うのが好きです',
            },
            {
                Icon: FaQuestion,
                title: '考える',
                subTitle: 'THINKING TIME',
                description: '自分の好きなことを好きなだけ考えるのが好きです',
            },
        ]
    }

    render(){
        return(
            <div className="services mb-5">
                <Title>Interest</Title>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        this.state.interest.map((item, index) => (
                            <ServiceBox key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Services;