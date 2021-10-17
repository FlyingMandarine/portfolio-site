import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/globalStyles'
import { lightTheme, darkTheme } from './components/Themes'

import BioPanel from "./components/Panels/BioPanel"
import ContactPanel from './components/Panels/ContactPanel'
import Project1Panel from './components/Panels/Project1Panel'

import ContactMe from './components/ContactMe'

const App = () => {
    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const containerDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
    }

    const darkToggleStyle = {
        fontSize: '1.6em',
        fontWeight: 400,
        position: 'absolute',
        top: '3.9%',
        right: '7%',
        zIndex: 1,
    }

    const darkSpanStyle = {
        marginRight: 20,
        color: 'black',
    }

    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <>
            <GlobalStyles/>
                <div style={ containerDivStyle } className='app-container'>

                    <div style={ darkToggleStyle }>
                        <span style={ darkSpanStyle }>To the dark side!</span>
                        <label className='switch'>
                            <input type='checkbox' 
                                onClick={ themeToggler }
                            />
                            <span className='slider'></span>
                        </label>
                    </div>

                    <ContactMe />
                    <div>
                        <BioPanel />
                    </div>
                    <div>
                        <Project1Panel />
                    </div>
                    <div>
                        <ContactPanel />
                    </div>
                </div>
            </>
        </ThemeProvider>
    )
}

export default App