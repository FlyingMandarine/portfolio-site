import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAchievement } from '../reducers/achievementReducer'

const ContactMe = () => {
    const dispatch = useDispatch()
    const achievement = useSelector(state => state)

    const [ clicked, setClicked ] = useState(false)

    const containerStyle = {
        fontSize: '2.2em',
        fontWeight: 700,
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
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
            top: 99999,
            behavior: 'smooth',
        })

        if (clicked === false) {
            const newAchievement = {
                title: 'Contact me!',
                text: 'Clicked on the big yellow box.',
                counter: achievement.counter + 1,
            }
            dispatch(updateAchievement(newAchievement))

            setClicked(true)
        }
    }

    return (
        <div style={ containerStyle } className='contactme-div' onClick={ () => scrollWin() }>
            <i style={ envelopeStyle } className='fas fa-envelope' />
            Contact me
        </div>
    )
}

export default ContactMe