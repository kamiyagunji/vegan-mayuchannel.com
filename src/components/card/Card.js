import React from 'react';
import { FaLink } from 'react-icons/fa';
import './Card.scss';

const Card = (props) => {

    return(
        <>
            <div className="o-card text-center">
                <div className="mb-2 position-relative overflow-hidden">
                    <img src={props.thumbnail} alt="oftadeh" title="oftadeh" />
                    <span className="o-hover-overlay d-flex align-items-center justify-content-center">
                        <a href={props.url} className="rounded-circle bg-white m-1 o-text-purple">
                            <FaLink />
                        </a>
                    </span>
                </div>
                <p className="mb-0">{props.title}</p>
                <small className="o-text-purple d-block mb-4">{props.category}</small>
            </div>
        </>
    );
}

export default Card;