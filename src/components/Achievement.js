import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { motion } from 'framer-motion'

const Achievement = () => {
    const title = useSelector(state => state.title)
    const text = useSelector(state => state.text)
    const counter = useSelector(state => state.counter)

    const [showing, setShowing] = useState(false)

    // Hook to trigger the achievement panel showing for a small amount of time before being hidden.
    useEffect(() => {
        setTimeout(() => {
            setShowing(false)
        }, 1000)

        setTimeout(() => {
            setShowing(true)
        }, 1000)
    }, [ counter ])

    const outerDivStyle = {
        fontWeight: 500,
        display: 'flex',
        color: 'white',
        lineHeight: '3em',
        position: 'fixed',
        left: -50,
        zIndex: 1,
        overflow: 'hidden',
    }

    const outerDivStyleComplete = {
        fontWeight: 500,
        display: 'flex',
        color: 'white',
        lineHeight: '3em',
        position: 'fixed',
        zIndex: 1,
        backgroundColor: 'darkgoldenrod',
    }

    const innerDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }

    const trophyStyle = {
        fontSize: '4.5em',
        marginLeft: '6.2%',
        marginTop: '8%',
        marginRight: '6%',
    }

    const titleStyle = {
        fontSize: '1.9em',
    }

    const titleSpanStyle = {
        color: 'blue',
    }

    const descriptionStyle = {
        fontSize: '1.7em',
    }

    const counterStyle = {
        fontSize: '1.6em',
        opacity: '68%',
    }

    const successStyle = {
        fontSize: '2em',
        position: 'absolute',
        right: '10%',
        bottom: '10%',
    }

    return (
        <>
        { showing === true &&
            <div
                initial={{ x: '-560px' }}

                animate={{ x: ['-560px', '0px', '0px', '-560px'] }}

                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.8, 1]
                }}

                style={ counter === 5 ? outerDivStyleComplete : outerDivStyle } className='achievement-div'
            >
                <i style={ trophyStyle } className='fas fa-trophy' />
                <div style={ innerDivStyle }>
                    <p style={ titleStyle }>Achievement Unlocked - <span style={ titleSpanStyle }>{ title }</span></p>
                    <p style={ descriptionStyle }>{ text }</p>
                    <p style={ counterStyle }>
                        { counter }/5 found
                    </p>
                    {
                            counter === 5 &&
                            <div style={ successStyle }>Well done!</div>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default Achievement