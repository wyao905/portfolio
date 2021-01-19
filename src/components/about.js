import React from 'react'
import Skills from './skills'

function About() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        backgroundColor: '#123c69',
        color: '#ffffff'
    }}>
        <p style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '84px 0',
            textAlign: 'center',
            width: '50%',
            fontSize: '18px'
        }}>
            Junior developer with a background in Mechanical Engineering and a passion for problem solving.
            I am looking for opportunities to help create something new and exciting that has the potential to be a positive impact in people's lives and help people connect.
        </p>
        <Skills />
    </div>
}

export default About