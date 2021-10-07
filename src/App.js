import React from 'react'

import BioPanel from "./components/Panels/BioPanel"
import ContactPanel from './components/Panels/ContactPanel'
import Project1Panel from './components/Panels/Project1Panel'

const App = () => {

    const containerDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',
    }

    return (
        <div style={ containerDivStyle }>
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