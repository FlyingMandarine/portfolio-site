import React from 'react'

const ContactMe = () => {

    const containerStyle = {
        fontSize: '2.2em',
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: 45,
        right: 47,
        backgroundColor: '#FDE000',
        boxShadow: '0 3px 6px #00000029',
        width: 222,
        height: 58,
        cursor: 'pointer',
    }

    const envelopeStyle = {
        fontSize: '2.3rem',
        marginRight: 20,
    }

    const scrollWin = () => {
        window.scroll({
            top: 9999,
            behavior: 'smooth',
        })
    }

    return (
        <div style={ containerStyle } onClick={ () => scrollWin() }>
            <i style={ envelopeStyle } className='fas fa-envelope' />
            Contact me
        </div>
    )
}

export default ContactMe