import React from 'react'

const ContactPanel = () => {

    const containerDivStyle = {
        backgroundColor: 'white',
    }

    const leftPanelStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '66%',
        height: '100%',
        paddingLeft: '6.66%',
        paddingRight: '5.73%',
    }

    const rightPanelStyle = {
        fontSize: '5em',
        flexBasis: '34%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
        lineHeight: 2,
    }

    const labelStyle = {
        fontSize: '1.4em',
        fontWeight: 500,
        marginBottom: '1.2%',
        display: 'inline-block',
    }

    const smallInputStyle = {
        border: 'solid 1px #909090',
        width: '64%',
        height: '8.5%',
        marginBottom: '3%',
        padding: '1em',
    }

    const largeInputStyle = {
        border: 'solid 1px #909090',
        width: '64%',
        height: '36%',
        marginBottom: '5.8%',
        padding: '1em',
    }

    const sendButtonStyle = {
        fontSize: '1.9em',
        fontWeight: 500,
        width: '17.5%',
        height: '2.8em',
    }

    const iconsStyle = {
        marginLeft: '.4em',
        marginRight: '.4em',
        opacity: '900%',
    }

    return (
        <div className='scroll-container'>
            <div style={ containerDivStyle } className='contact-panel-container'>
                <div style={ leftPanelStyle } className='contact-left-panel'>
                    <h1 style={ h1Style }>Contact me</h1>

                    <p style={ paraStyle }>
                        If you have any feedback, feel free to contact me using the form below.<br />
                        I aim to reply to every message within 24 hours.
                    </p>

                    <form action="https://formspree.io/f/xyylvljj" method="POST">
                        <label style={ labelStyle } htmlFor='name'>Name *</label><br />
                        <input style={ smallInputStyle } id='name' className='small-input' name='name' /><br />

                        <label style={ labelStyle } htmlFor='_replyto'>Email *</label><br />
                        <input style={ smallInputStyle } className='small-input' name='_replyto' /><br />

                        <label style={ labelStyle } htmlFor='message'>Message *</label><br />
                        <textarea style={ largeInputStyle } id='message' className='large-input' name='message' /><br />
                    </form>

                    <button style={ sendButtonStyle } className='send-btn'>Send</button>

                </div>
                <div style={ rightPanelStyle } className='contact-right-panel'>
                    <div>
                        <a href='https://www.linkedin.com/in/patrice-hermenault/' target='_blank' rel='noreferrer'>
                            <i style={ iconsStyle }
                                title='Check out my LinkedIn!'
                                className='fab fa-linkedin'
                            />
                        </a>
                        <a href='https://github.com/FlyingMandarine' target='_blank' rel='noreferrer'>
                            <i style={ iconsStyle }
                                title='Have a look at my GitHub!'
                                className='fab fa-github-square'
                            />
                        </a>
                        <a href='mailto:hermenaultpatrice@gmail.com?subject=Hello there!'>
                            <i style={ iconsStyle }
                                title='Send me an email!'
                                className='fas fa-envelope-square'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPanel