import React from 'react'

import BioPanel from "./components/Panels/BioPanel"
import ContactPanel from './components/Panels/ContactPanel'
import Project1Panel from './components/Panels/Project1Panel'

import ContactMe from './components/ContactMe'

const App = () => {

    const containerDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
    }

    return (
        <div style={ containerDivStyle } className='app-container'>
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
    )
}

export default App