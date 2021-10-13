import React from 'react'

const ContactMe = () => {

    const containerStyle = {
        fontSize: '2.2em',
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: '4.3%',
        right: '2.4%',
        backgroundColor: '#FDE000',
        boxShadow: '0 3px 6px #00000029',
        width: '11.5%',
        height: '5.5%',
        cursor: 'pointer',
        zIndex: 1,
    }

    const envelopeStyle = {
        fontSize: '1.1em',
        marginRight: '8.5%',
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