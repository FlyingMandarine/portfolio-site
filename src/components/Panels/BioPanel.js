import React from 'react'

import polaroid from '../../images/polaroid.png'
import cypress from '../../images/cypress.png'
import express from '../../images/express.png'
import jest from '../../images/jest.png'
import mongodb from '../../images/mongodb.png'
import node from '../../images/node.png'
import reactjs from '../../images/reactjs.png'
import reduxjs from '../../images/reduxjs.png'

const BioPanel = () => {

    const containerDivStyle = {
        display: 'flex',
        height: 1080,
        borderTop: 'solid 5px #909090',
        borderBottom: 'solid 5px #909090',
    }

    const leftPanelStyle = {
        flexBasis: '66%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#EFEFEF',
        paddingLeft: '6.5%',
        paddingRight: '6.5%',
        height: '100%',
    }

    const rightPanelStyle = {
        flexBasis: '34%',
        background: `url(${ polaroid }) center/cover`,
    }

    const h1Style = {
        fontSize: '5.8rem',
        fontWeight: 500,
        marginBottom: '2.1%',
    }

    const h2Style = {
        fontSize: '3.7rem',
        fontWeight: 500,
        color: '#838383',
        marginTop: 0,
        marginBottom: '4.4%',
    }

    const paraStyle = {
        fontSize: '1.8rem',
        fontWeight: 400,
        marginBottom: '13.2%',
    }

    const skillsDivStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: '100%',
        height: 160,
        border: 'solid 4px #FEE034',
        alignItems: 'center',
    }

    const skillsStyle = {
        width: '6.3em',
    }

    const imgStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    const scrollWin = () => {
        //window.scrollTo(0, 1000)
        window.scroll({
            top: 1000,
            behavior: 'smooth',
        })
    }

    return (
        <div style={ containerDivStyle }>
            <div style={ leftPanelStyle }>
                <h1 style={ h1Style }>Patrice Hermenault</h1>
                <h2 style={ h2Style }>Full Stack Developer</h2>

                <p style={ paraStyle }>
                    I recently completed a professional transition to web development with a full-stack certificate from the University of Helsinki.<br />
                    My knowledge of both front end and back end allows me to be involved in every step of a project, which I love.<br /><br />
                    In a previous, not-so-distant life, I was a professional translator and proofreader (Japanese/English to French).<br /><br />
                    Feel free to <strong>get in touch</strong> if you are interested!
                </p>

                <div style={ skillsDivStyle }>
                    <div style={ imgStyle }>
                        <img style={ skillsStyle } src={ mongodb } alt='MongoDB' />
                        MongoDB
                    </div>
                    <div style={ imgStyle }>
                        <img style={ skillsStyle } src={ express } alt='Express.js' />
                        Express.js
                    </div>
                    <div style={ imgStyle }>
                        <img style={ skillsStyle } src={ reactjs } alt='React' />
                        React
                    </div>
                    <div style={ imgStyle }>
                        <img style={ skillsStyle } src={ node } alt='Node.js' />
                        Node.js
                    </div>
                    <div style={ imgStyle }>
                        <img style={ skillsStyle } src={ reduxjs } alt='Redux' />
                        Redux
                    </div>
                    <div style={ imgStyle }>
                        <img style={ skillsStyle } src={ jest } alt='Jest' />
                        Jest
                    </div>
                    <div style={ imgStyle }>
                        <img style={ skillsStyle } src={ cypress } alt='Cypress' />
                        Cypress
                    </div>
                </div>
            </div>
            <div style={ rightPanelStyle }>
                <h1 onClick={ () => scrollWin() }>HELLO</h1>
            </div>
        </div>
    )
}

export default BioPanel