import React from 'react'
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

function HeaderBar() {
    return <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#062240',
        height: '50px'
    }}>
        <h2 style={{
            margin: '0',
            padding: '7px 96px',
            verticalAlign: 'middle',
            textAlign: 'left',
            color: '#ffffff'
        }}>Warren Yao</h2>
        <div style={{
            marginRight: '86px',
            display: 'flex'
        }}>
            <div style={{ margin: '10px 10px 0 0' }}>
                <a href='mailto:warrenyca905@gmail.com' target='_blank' rel="noopener noreferrer">
                    <FaEnvelopeSquare style={socialIconStyle} />
                </a>
            </div>
            <div style={{ margin: '10px 10px 0 0' }}>
                <a href='https://github.com/wyao905' target='_blank' rel="noopener noreferrer">
                    <FaGithubSquare style={socialIconStyle} />
                </a>
            </div>
            <div style={{ margin: '10px 10px 0 0' }}>
                <a href='https://www.linkedin.com/in/warren-yao/' target='_blank' rel="noopener noreferrer">
                    <FaLinkedin style={socialIconStyle} />
                </a>
            </div>
        </div>
    </div>
}

const socialIconStyle = {
    width: '30px',
    height: '30px',
    color: '#ffffff'
}

export default HeaderBar