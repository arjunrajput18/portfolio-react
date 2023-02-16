import React from 'react';

const Header = ({img,txt,htxt}) => {
    return (
        <header className='hero'>
            <img className='hero-img' src={img} alt="hero img"/>
            <h1 className='hero-heading'>
                {txt}
                <span style={{color:"#1d4ed8"}}>{htxt}</span>
            </h1>
        </header>
    );
};

export default Header;