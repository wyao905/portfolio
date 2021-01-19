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
        <div style={{ marginRight: '86px' }}>
            <a href='mailto:warrenyca905@gmail.com'>
                <FaEnvelopeSquare style={socialIconStyle} />
            </a>
            <a href='https://github.com/wyao905'>
                <FaGithubSquare style={socialIconStyle} />
            </a>
            <a href='https://www.linkedin.com/in/warren-yao/'>
                <FaLinkedin style={socialIconStyle} />
            </a>
        </div>
    </div>
}

const socialIconStyle = {
    width: '30px',
    height: '30px',
    color: '#ffffff',
    margin: '10px 10px 0 0'
}

export default HeaderBar