import React from 'react';


const Card = ({ key, title, img, date, tags, views, description, children }) => {
    
    return (
        <div className='card'>
            <h2 className= 'card__title'>{title}</h2>
            <img className='card__img' src={img} alt={title}/>
            <p className='card__description'>{children}</p>
        </div>

    );
}


export default Card;