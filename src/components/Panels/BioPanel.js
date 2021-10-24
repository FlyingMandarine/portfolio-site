import React from 'react'

import polaroid from '../../images/polaroid-small.webp'
import cypress from '../../images/cypress-small.webp'
import express from '../../images/express-small.webp'
import jest from '../../images/jest-small.webp'
import mongodb from '../../images/mongodb-small.webp'
import node from '../../images/node-small.webp'
import reactjs from '../../images/reactjs-small.webp'
import reduxjs from '../../images/reduxjs-small.webp'

const BioPanel = ({ theme, handleToggler }) => {

    const darkToggleStyle = {
        fontSize: '1.6em',
        fontWeight: 400,
        position: 'absolute',
        top: '4.3%',
        right: '6.5%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    }

    const darkSpanStyle = {
        marginRight: '1.25em',
        color: 'black',
    }

    const leftPanelStyle = {
        flexBasis: '66%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '6.5%',
        paddingRight: '6.5%',
        height: '100%',
        position: 'relative',
    }

    const rightPanelStyle = {
        flexBasis: '34%',
        position: 'relative',
        backgroundImage: `url(${ polaroid })`,
        backgroundRepeat: 'no-repeat',
        //background: `url(${ polaroid }) center/cover no-repeat`,
    }

    const h1Style = {
        fontSize: '5.8em',
        fontWeight: 500,
        margin: '5% 0 2.1%',
    }

    const h2Style = {
        fontSize: '3.7em',
        fontWeight: 500,
        color: '#838383',
        marginTop: 0,
        marginBottom: '4.4%',
    }

    const paraStyle = {
        fontSize: '1.8em',
        fontWeight: 400,
        marginBottom: '7.2%',
        lineHeight: 1.4,
    }

    const skillsOuterDivStyle = {
        fontWeight: 400,
        width: '100%',
        height: '20.6%',
        border: 'solid 4px #FEE034',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }

    const skillsTextDivStyle = {
        fontSize: '1.8em',
        marginLeft: '7.5%',
        marginBottom: '1.5em',
    }

    const skillsInnerDivStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    const skillsStyle = {
        width: '6.3em',
    }

    const skillsNameSpanStyle = {
        fontSize: '1.5em',
        lineHeight: 2,
    }

    const imgStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return (
        <div className='scroll-container'>
            <div className='bio-panel-container'>
                <div style={ leftPanelStyle } className='bio-left-panel'>
                    <h1 style={ h1Style }>Patrice Hermenault</h1>
                    <h2 style={ h2Style } className='bio-h2'>Full Stack Developer</h2>

                    <p style={ paraStyle }>
                        I recently completed a professional transition to web development with a full-stack certificate from the University of Helsinki.<br />
                        My knowledge of both front end and back end allows me to be involved in every step of a project, which I love.<br /><br />
                        In a previous, not-so-distant life, I was a professional translator and proofreader (Japanese/English to French).<br /><br />
                        Feel free to <strong>get in touch</strong> if you are interested!
                    </p>

                    <div style={ skillsOuterDivStyle } className='skills-div'>
                        <div style={ skillsTextDivStyle }>My tech stack:</div>
                        <div style={ skillsInnerDivStyle }>
                            <div style={ imgStyle }>
                                <img style={ skillsStyle } src={ mongodb } alt='MongoDB' />
                                <span style={ skillsNameSpanStyle }>MongoDB</span>
                            </div>
                            <div style={ imgStyle }>
                                <img style={ skillsStyle } src={ express } alt='Express.js' />
                                <span style={ skillsNameSpanStyle }>Express.js</span>
                            </div>
                            <div style={ imgStyle }>
                                <img style={ skillsStyle } src={ reactjs } alt='React' />
                                <span style={ skillsNameSpanStyle }>React</span>
                            </div>
                            <div style={ imgStyle }>
                                <img style={ skillsStyle } src={ node } alt='Node.js' />
                                <span style={ skillsNameSpanStyle }>Node.js</span>
                            </div>
                            <div style={ imgStyle }>
                                <img style={ skillsStyle } src={ reduxjs } alt='Redux' />
                                <span style={ skillsNameSpanStyle }>Redux</span>
                            </div>
                            <div style={ imgStyle }>
                                <img style={ skillsStyle } src={ jest } alt='Jest' />
                                <span style={ skillsNameSpanStyle }>Jest</span>
                            </div>
                            <div style={ imgStyle }>
                                <img style={ skillsStyle } src={ cypress } alt='Cypress' />
                                <span style={ skillsNameSpanStyle }>Cypress</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={ rightPanelStyle } className='biopanel-right'>
                    <div style={ darkToggleStyle }>
                        <span style={ darkSpanStyle }>
                            {
                                theme === 'light'?
                                'To the dark side!':
                                'Let there be light!'
                            }
                        </span>
                        <label className='switch'>
                            <input type='checkbox' 
                                onClick={ () => handleToggler() }
                            />
                            <span className='slider'></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioPanel