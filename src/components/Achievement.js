import React from 'react'
import { useSelector } from 'react-redux'

const Achievement = () => {
    const title = useSelector(state => state.title)
    const text = useSelector(state => state.text)
    const counter = useSelector(state => state.counter)

    const outerDivStyle = {
        fontWeight: 500,
        display: 'flex',
        color: 'white',
        lineHeight: '3em',
        position: 'fixed',
        zIndex: 1,
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
        <div style={ outerDivStyle } className='achievement-div'>
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
    )
}

export default Achievement