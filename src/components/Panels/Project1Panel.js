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

    const seeItButtonStyle = {
        fontSize: '1.9em',
        fontWeight: 500,
        backgroundColor: 'white',
        border: 'solid 3px black',
        width: '43.5%',
        height: '100%',
    }

    const repoButtonStyle = {
        position: 'relative',
        fontSize: '1.9em',
        fontWeight: 500,
        backgroundColor: 'black',
        border: 'solid 3px black',
        color: 'white',
        width: '31%',
        height: '100%',
        textAlign: 'left',
        paddingLeft: '15%',
        marginLeft: '4.75%',
    }

    const githubStyle = {
        position: 'absolute',
        fontSize: '3.2rem',
        left: 15,
        top: 6,
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
                    <button style={ seeItButtonStyle }>See it in action</button>
                    <button style={ repoButtonStyle }><i style={ githubStyle } className='fab fa-github' />Repo</button>
                </div>
            </div>
            <div style={ rightPanelStyle }>
            </div>
        </div>
    )
}

export default Project1Panel