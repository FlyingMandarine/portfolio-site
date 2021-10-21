import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAchievement } from './reducers/achievementReducer'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/globalStyles'
import { lightTheme, darkTheme } from './components/Themes'

import Achievement from './components/Achievement'
import ContactMe from './components/ContactMe'

import BioPanel from './components/Panels/BioPanel'
import ContactPanel from './components/Panels/ContactPanel'
import Project1Panel from './components/Panels/Project1Panel'

const App = () => {
    const dispatch = useDispatch()
    const achievement = useSelector(state => state)

    const [ theme, setTheme ] = useState('light')
    const [ toggleNum, setToggleNum ] = useState(0)
    const [ scroll, setScroll ] = useState({ top: 0, bottom: 0, unlocked: false })

    useEffect(() => {
        // Each time the user toggles between Dark and Light mode, we check upon rendering
        // whether the user has toggled it ten times. If so, an achievement is unlocked.
        if (toggleNum === 10) {
            const newAchievement = {
                title: 'Epilepsy',
                text: 'Congrats! Now my eyes are bleeding.',
                counter: achievement.counter + 1,
            }
            dispatch(updateAchievement(newAchievement))

            setToggleNum(11)
        }
    }, [ toggleNum, dispatch, achievement.counter ])

    const handleToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        setToggleNum(toggleNum + 1)
    }

    // We keep track of how often the user reaches the top and bottom of the page
    // for yet another achievement check.
    window.onscroll = function(ev) {
        if (scroll.unlocked === false) {
            if (window.scrollY === 0) {
                setScroll({
                    top: scroll.top + 1,
                    bottom: scroll.bottom,
                    unlocked: false,
                })
            } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setScroll({
                    top: scroll.top,
                    bottom: scroll.bottom + 1,
                    unlocked: false,
                })
            }

            if ((scroll.top > 2) && (scroll.bottom > 2)) {
                const newAchievement = {
                    title: 'Rollercoaster',
                    text: 'Up and down and up and down and...',
                    counter: achievement.counter + 1,
                }
                dispatch(updateAchievement(newAchievement))

                setScroll({ unlocked: true })
            }
        }
    }

    const containerDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
    }

    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <>
                <GlobalStyles/>
                <div style={ containerDivStyle } className='app-container'>
                    <Achievement />
                    <ContactMe />

                    <BioPanel theme={ theme } handleToggler={ handleToggler } />
                    <Project1Panel />
                    <ContactPanel />
                </div>
            </>
        </ThemeProvider>
    )
}

export default App