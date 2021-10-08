import React from 'react'

import strengthgap from '../../images/strengthgap.png'

const Project1Panel = () => {

    const containerDivStyle = {
        display: 'flex',
        height: 1080,
    }

    const leftPanelStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        flexBasis: '34%',
        backgroundColor: 'white',
        paddingLeft: '6.66%',
        paddingRight: '5.73%',
        height: '100%',
    }

    const rightPanelStyle = {
        flexBasis: '66%',
        backgroundColor: 'grey',
        height: '100%',
        background: `url(${ strengthgap }) center/cover`,
    }

    const projectDivStyle = {
        position: 'absolute',
        top: '8.4%',
        left: 0,
        fontSize: '2.4em',
        fontWeight: 500,
        backgroundColor: '#FEE035',
        width: '23rem',
        height: '5.2rem',
        lineHeight: '5.2rem',
        textAlign: 'right',
        paddingRight: '7.5%',
    }

    const h1Style = {
        fontSize: '4em',
        fontWeight: 500,
        marginBottom: '5.8%',
    }

    const h2Style = {
        fontSize: '2.3em',
        fontWeight: 500,
        marginBottom: '12%',
    }

    const paraStyle = {
        fontSize: '1.6em',
        fontWeight: 400,
        lineHeight: 1.6,
        marginBottom: '12%',
    }

    const buttonsDivStyle = {
        height: '5%',
    }

    const seeItSpanStyle = {
        fontSize: '1.9em',
        fontWeight: 500,
        backgroundColor: 'white',
        color: 'black',
        border: 'solid 3px black',
        padding: '3%',
    }

    const linkStyle = {
        textDecoration: 'none',
    }

    const repoSpanStyle = {
        position: 'relative',
        fontSize: '1.9em',
        fontWeight: 500,
        backgroundColor: 'black',
        border: 'solid 3px black',
        color: 'white',
        padding: '3% 3% 3% 14%',
        marginLeft: '4.75%',
    }

    const githubStyle = {
        position: 'absolute',
        fontSize: '3.2rem',
        left: 15,
        top: 6,
        pointerEvents: 'none',
    }

    const buttonEnter = (e) => {
        e.target.style.backgroundColor = '#FEE035'
    }

    const seeItButtonLeave = (e) => {
        e.target.style.backgroundColor = '#FFFFFF'
        e.target.style.border = 'solid 3px black'
    }

    const repoButtonLeave = (e) => {
        e.target.style.backgroundColor = 'black'
        e.target.style.border = 'solid 3px black'
    }
    
    return (
        <div style={ containerDivStyle }>
            <div style={ leftPanelStyle }>
                <div style={ projectDivStyle }>PROJECT</div>

                <h1 style={ h1Style }>Strength Gap</h1>
                <h2 style={ h2Style }>A Tool to Check for Muscle Imbalance</h2>

                <p style={ paraStyle }>
                    A project made with the MERN stack (MongoDB, Express, React, Node.js).<br /><br />
                    Gyms can be intimidating, especially for newcomers. Strength Gap is my attempt
                    at alleviating one concern: <em>What should I do there?</em><br /><br />
                    It allows the user to select any exercise and see which muscle group
                    they primarily target, and then combine those exercises to check for potential
                    gaps in your exercise routine.<br /><br />
                    It comes complete with a registration feature to save, edit, and delete your workouts.
                </p>
                <div style={ buttonsDivStyle }>
                    <a style={ linkStyle } href='https://www.patrice-hermenault.com' target='_blank' rel='noreferrer'>
                        <span style={ seeItSpanStyle }
                            onMouseEnter={ (e) => buttonEnter(e) }
                            onMouseLeave={ (e) => seeItButtonLeave(e) }>See it in action
                        </span>
                    </a>
                    <a style={ linkStyle } href='https://github.com/FlyingMandarine/strengthgap-react' target='_blank' rel='noreferrer'>
                        <span style={ repoSpanStyle }
                            onMouseEnter={ (e) => buttonEnter(e) }
                            onMouseLeave={ (e) => repoButtonLeave(e) }>
                            <i style={ githubStyle } className='fab fa-github' />Repo
                        </span>
                    </a>
                </div>
            </div>
            <div style={ rightPanelStyle }>
            </div>
        </div>
    )
}

export default Project1Panel