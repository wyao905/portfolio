import React from 'react'

function Links(props) {
    if (props.video !== '') {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '84px'
        }}>
            <div className='link-button-container'><a href={props.github} target='_blank' rel="noopener noreferrer"><button className='link-button'>GitHub</button></a></div>
            <div className='link-button-container'><a href={props.video} target='_blank' rel="noopener noreferrer"><button className='link-button'>Video Demo</button></a></div>
        </div>
    } else if (props.demo !== '') {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '84px'
        }}>
            <div className='link-button-container'><a href={props.github} target='_blank' rel="noopener noreferrer"><button className='link-button'>GitHub</button></a></div>
            <div className='link-button-container'><a href={props.demo} target='_blank' rel="noopener noreferrer"><button className='link-button'>Demo</button></a></div>
        </div>
    } else {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '84px'
        }}>
            <div className='link-button-container'><a href={props.github} target='_blank' rel="noopener noreferrer"><button className='link-button'>GitHub</button></a></div>
        </div>
    }
}

export default Links