import React from 'react'

function Links(props) {
    if (props.name === 'Tasky') {
        return <div style={{ paddingBottom: '30px' }}>
            <div style={{ display: 'flex' }}>
                <div className='link-button-container'><a href={props.github}><button className='link-button'>GitHub</button></a></div>
                <div className='link-button-container'><a href={props.video}><button className='link-button'>Video Demo</button></a></div>
            </div>
            <div style={{
                marginTop: '18px',
                display: 'flex',
                alignItems: 'center',
                height: '36px'
            }}>
                <p style={{ margin: '12px 0' }}>Monday.com User?</p>
                <a href={props.demo}><img alt='Add to monday.com' style={{
                    margin: '12px 0 12px 12px',
                    height: '36px'
                }} src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png' /></a>
            </div>
        </div>
    } else if (props.video !== '') {
        return <div style={{
            display: 'flex',
            paddingBottom: '84px'
        }}>
            <div className='link-button-container'><a href={props.github}><button className='link-button'>GitHub</button></a></div>
            <div className='link-button-container'><a href={props.video}><button className='link-button'>Video Demo</button></a></div>
        </div>
    } else if (props.demo !== '') {
        return <div style={{
            display: 'flex',
            paddingBottom: '84px'
        }}>
            <div className='link-button-container'><a href={props.github}><button className='link-button'>GitHub</button></a></div>
            <div className='link-button-container'><a href={props.demo}><button className='link-button'>Demo</button></a></div>
        </div>
    } else {
        return <div style={{
            display: 'flex',
            paddingBottom: '84px'
        }}>
            <div className='link-button-container'><a href={props.github}><button className='link-button'>GitHub</button></a></div>
        </div>
    }
}

export default Links