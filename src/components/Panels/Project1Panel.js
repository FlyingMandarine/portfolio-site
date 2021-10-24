import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAchievement } from '../../reducers/achievementReducer'

import strengthgap from '../../images/strengthgap.webp'

const Project1Panel = () => {
    const dispatch = useDispatch()
    const achievement = useSelector(state => state)

    const [ linkClicked, setLinkClicked ] = useState(false)

    const leftPanelStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        flexBasis: '34%',
        paddingLeft: '6.66%',
        paddingRight: '5.73%',
        height: '100%',
    }

    const rightPanelStyle = {
        position: 'relative',
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
        color: 'black',
        width: '35.2%',
        height: '4.8%',
        textAlign: 'right',
        paddingRight: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
        marginBottom: '15%',
    }

    const buttonsDivStyle = {
        height: '5%',
    }

    const seeItSpanStyle = {
        fontSize: '1.9em',
        fontWeight: 500,
        padding: '3% 6%',
    }

    const linkStyle = {
        textDecoration: 'none',
    }

    const repoSpanStyle = {
        position: 'relative',
        fontSize: '1.9em',
        fontWeight: 500,
        padding: '3% 3% 3% 14%',
        marginLeft: '4.75%',
    }

    const githubStyle = {
        position: 'absolute',
        pointerEvents: 'none',
    }

    const handleLinkClick = () => {
        if (linkClicked === false) {
            const newAchievement = {
                title: 'Curiosity',
                text: 'You\'ve checked out Strength Gap.',
                counter: achievement.counter + 1
            }
            dispatch(updateAchievement(newAchievement))

            setLinkClicked(true)
        }
    }

    return (
        <div className='scroll-container'>
            <div className='project-panel-container'>
                <div style={ leftPanelStyle } className='project-left-panel'>
                    <div style={ projectDivStyle }><span>PROJECT</span></div>

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
                        <a style={ linkStyle } href='https://strength-gap.herokuapp.com/' target='_blank' rel='noreferrer' onMouseDown={ () => handleLinkClick() }>
                            <span style={ seeItSpanStyle } className='see-it-span'>
                                See it in action
                            </span>
                        </a>
                        <a style={ linkStyle } href='https://github.com/FlyingMandarine/strengthgap-react' target='_blank' rel='noreferrer'>
                            <span style={ repoSpanStyle } className='repo-span'>
                                <i style={ githubStyle } className='fab fa-github' />Repo
                            </span>
                        </a>
                    </div>
                </div>
                <div style={ rightPanelStyle }>
                </div>
            </div>
        </div>
    )
}

export default Project1Panel