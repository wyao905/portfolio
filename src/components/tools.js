import React from 'react'

function Tools(props) {
    return props.toolArr.map(tool => {
        return <p style={{
            margin: '3px 6px 3px 0',
            padding: '6px',
            color: 'white',
            backgroundColor: '#123c69',
            borderRadius: '6px',
            fontSize: '12px'
        }}>
            {tool}
        </p>
    })
}

export default Tools