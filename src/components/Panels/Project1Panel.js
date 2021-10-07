import React from 'react'

import strengthgap from '../../images/strengthgap.png'

const Project1Panel = () => {

    const containerDivStyle = {
        display: 'flex',
        height: 1080,
        borderTop: '5px solid #909090',
        borderBottom: '5px solid #909090',
    }

    const leftPanelStyle = {
        position: 'relative',
        flexBasis: '34%',
        backgroundColor: 'white',
        paddingTop: '14%',
        paddingLeft: '6.66%',
        paddingRight: '5.73%',
        height: '100%',
        //justifyContent: 'center',
    }

    const rightPanelStyle = {
        flexBasis: '66%',
        backgroundColor: 'grey',
        height: '100%',
    }

    const strengthgapStyle = {
        maxWidth: '100%',
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

    const seeItButtonStyle = {
        fontSize: '1.9em',
        fontWeight: 500,
        backgroundColor: 'white',
        border: '3px solid black',
        width: '43.5%',
        height: '6.3%',
    }

    const repoButtonStyle = {
        position: 'relative',
        fontSize: '1.9em',
        fontWeight: 500,
        backgroundColor: 'black',
        border: '3px solid black',
        color: 'white',
        width: '31%',
        height: '6.3%',
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
                    A common struggle for people who have just started<br />
                    working out is to ensure that the program they follow will<br />
                    target all muscle groups.<br /><br />
                    Not doing so - for instance, including chest exercises but<br />
                    no back exercises - can lead to muscle imbalance that<br />
                    can be detrimental to your health in the long term.
                </p>

                <button style={ seeItButtonStyle }>See it in action</button>
                <button style={ repoButtonStyle }><i style={ githubStyle } className='fab fa-github' />Repo</button>
            </div>
            <div style={ rightPanelStyle }>
                <img style={ strengthgapStyle } src={ strengthgap } alt='Mock-up of one of my projects, Strength Gap' />
            </div>
        </div>
    )
}

export default Project1Panel