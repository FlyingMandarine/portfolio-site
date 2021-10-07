import React from 'react'

import envelope from '../../images/envelope.png'

const ContactPanel = () => {

    const containerDivStyle = {
        display: 'flex',
        height: 1080,
        borderTop: '5px solid #909090',
        borderBottom: '5px solid #909090',
    }

    const leftPanelStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '66%',
        backgroundColor: '#EFEFEF',
        height: '100%',
        paddingLeft: '6.66%',
        paddingRight: '5.73%',
    }

    const rightPanelStyle = {
        flexBasis: '34%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: `url(${ envelope }) center/cover`,
        fontSize: '5em',
    }

    const h1Style = {
        fontSize: '4em',
        fontWeight: 500,
        marginBottom: '2.7%',
    }

    const paraStyle = {
        fontSize: '1.6em',
        fontWeight: 400,
        marginBottom: '6.5%',
    }

    const labelStyle = {
        fontSize: '1.4em',
        fontWeight: 500,
        marginBottom: '1.2%',
        display: 'inline-block',
    }

    const smallInputStyle = {
        backgroundColor: '#EFEFEF',
        border: '1px solid #909090',
        width: '64%',
        height: '3.3rem',
        marginBottom: '3%',
    }

    const largeInputStyle = {
        backgroundColor: '#EFEFEF',
        border: '1px solid #909090',
        width: '64%',
        height: '13.2rem',
        marginBottom: '5.8%',
    }

    const sendButtonStyle = {
        fontSize: '1.9em',
        fontWeight: 500,
        border: '3px solid black',
        width: '17.5%',
        height: 54,
    }

    const iconsStyle = {
        marginLeft: 20,
        marginRight: 20,
    }

    return (
        <div style={ containerDivStyle }>
            <div style={ leftPanelStyle }>
                <h1 style={ h1Style }>Contact me</h1>
                
                <p style={ paraStyle }>
                    If you have any feedback, feel free to contact me using the form below!
                </p>

                <form>
                    <label style={ labelStyle } htmlFor='name'>Name *</label>
                    <br /><input style={ smallInputStyle } id='name' name='name' /><br />
                    <label style={ labelStyle } htmlFor='email'>Email *</label>
                    <br /><input style={ smallInputStyle } id='email' name='email' /><br />
                    <label style={ labelStyle } htmlFor='message'>Message *</label>
                    <br /><textarea style={ largeInputStyle } multiple id='message' name='message' /><br />
                    <button style={ sendButtonStyle }>Send</button>
                </form>
            </div>
            <div style={ rightPanelStyle }>
                <div>
                    <i style={ iconsStyle } className='fab fa-linkedin' />
                    <i style={ iconsStyle } className='fab fa-github-square' />
                    <i style={ iconsStyle } className='fas fa-envelope-square' />
                </div>
            </div>
        </div>
    )
}

export default ContactPanel