import React from 'react'

const ContactMe = () => {

    const containerStyle = {
        fontSize: '2.2em',
        fontWeight: 700,
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '90vh',
        right: '2.4%',
        backgroundColor: '#FDE000',
        boxShadow: '0 3px 6px #00000029',
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
        <div style={ containerStyle } className='contactme-div' onClick={ () => scrollWin() }>
            <i style={ envelopeStyle } className='fas fa-envelope' />
            Contact me
        </div>
    )
}

export default ContactMe