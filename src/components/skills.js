import React from 'react'
import {
    SiJavascript,
    SiReact,
    SiNodeDotJs,
    SiRedux,
    SiRuby,
    SiRails,
    SiPython,
    SiFlask
} from 'react-icons/si'

function Skills(props) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        padding: '36px 0',
        backgroundColor: '#062240',
        width: '100%'
    }}>
        <h2 style={{
            alignSelf: 'center',
            marginBottom: '48px'
        }}>Technologies</h2>
        <div style={{
            width: '70%',
            alignSelf: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                backgroundColor: '#062240'
            }}>
                <div className='skill-icon-container'>
                    <SiJavascript className='skill-icon' />
                    <p className='skill-label'>JavaScript</p>
                </div>
                <div className='skill-icon-container'>
                    <SiReact className='skill-icon' />
                    <p className='skill-label'>React</p>
                </div>
                <div className='skill-icon-container'>
                    <SiNodeDotJs className='skill-icon' />
                    <p className='skill-label'>Node.js</p>
                </div>
                <div className='skill-icon-container'>
                    <SiRedux className='skill-icon' />
                    <p className='skill-label'>Redux</p>
                </div>
                <div className='skill-icon-container'>
                    <SiRuby className='skill-icon' />
                    <p className='skill-label'>Ruby</p>
                </div>
                <div className='skill-icon-container'>
                    <SiRails className='skill-icon' />
                    <p className='skill-label'>Rails</p>
                </div>
                <div className='skill-icon-container'>
                    <SiPython className='skill-icon' />
                    <p className='skill-label'>Python</p>
                </div>
                <div className='skill-icon-container'>
                    <SiFlask className='skill-icon' />
                    <p className='skill-label'>Flask</p>
                </div>
            </div>
        </div>
    </div>
}

export default Skills