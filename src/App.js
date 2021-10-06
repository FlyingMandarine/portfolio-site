import React from 'react'
import BioPanel from "./components/Panels/BioPanel"

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
                Second panel
            </div>
            <div>
                Third panel
            </div>
        </div>
    )
}

export default App