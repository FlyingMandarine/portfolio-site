import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/globalStyles'
import { lightTheme, darkTheme } from './components/Themes'

import BioPanel from "./components/Panels/BioPanel"
import ContactPanel from './components/Panels/ContactPanel'
import Project1Panel from './components/Panels/Project1Panel'

const App = () => {
    const [theme, setTheme] = useState('light')

    const handleToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
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
                    <div>
                        <BioPanel theme={ theme } handleToggler={ handleToggler } />
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