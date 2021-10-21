import { createGlobalStyle } from 'styled-components'

import envelope from '../images/envelope-transparent.png'

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: color 1s linear;
    }

    .bio-panel-container,
    .project-panel-container,
    .contact-panel-container {
        display: flex;
        border-top: ${({ theme }) => theme.bioBorder};
        border-bottom: ${({ theme }) => theme.bioBorder};
    }

    .bio-left-panel,
    .contact-left-panel {
        background-color: ${({ theme }) => theme.leftPanelBgColor};
    }

    .achievement-div {
        background-color: ${({ theme }) => theme.achievementBgColor};
    }

    .skills-div {
        background-color: ${({ theme }) => theme.white};
    }

    .bio-h2 {
        color: ${({ theme }) => theme.h2Color};
    }

    .project-left-panel {
        background-color: ${({ theme }) => theme.projectLeftPanelBgColor};
    }

    .see-it-span {
        background-color: ${({ theme }) => theme.seeItSpanBgColor};
        color: ${({ theme }) => theme.black};
        border: solid 3px ${({ theme }) => theme.black};
    }

    .see-it-span:hover,
    .repo-span:hover,
    .send-btn:hover {
        background-color: #FEE035;
        color: black;
        border: solid 3px black;
    }

    .repo-span {
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
        border: solid 3px ${({ theme }) => theme.black};
    }

    .small-input,
    .large-input {
        background-color: ${({ theme }) => theme.leftPanelBgColor};
    }

    .send-btn {
        background-color: ${({ theme }) => theme.leftPanelBgColor};
        color: ${({ theme }) => theme.black};
        border: solid 3px ${({ theme }) => theme.black};
    }

    .fa-linkedin,
    .fa-github-square,
    .fa-envelope-square {
        color: ${({ theme }) => theme.black};
    }

    .fa-linkedin:hover,
    .fa-github-square:hover,
    .fa-envelope-square:hover {
        color: #FEE035;
    }

    .contact-right-panel {
        background: linear-gradient(${({ theme }) => theme.contactBg}),
                    url(${envelope}) center/cover;
    }
`