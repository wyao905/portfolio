import React from 'react'
import Projects from './projects'

function ProjectsContainer(props) {
    const handleClick = (e) => {
        props.setProject({ ...Projects[e.target.id], assigned: true })
        props.setCurrent(0)
    }

    return <div style={{
        marginTop: '48px',
        marginBottom: '48px'
    }}>
        <div className='row' style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            <div className='pic-container'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/daily_chirp.png'})`,
                    backgroundSize: '100%',
                    filter: `brightness(${props.project.name === 'The Daily Chirp' ? '35' : '100'}%)`
                }}><p className='overlay-text'
                    id='dailyChirp'
                    onClick={handleClick}>The Daily Chirp</p></div>
            <div className='pic-container'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/sudowiz.png'})`,
                    backgroundSize: '110%',
                    filter: `brightness(${props.project.name === 'Sudowiz' ? '35' : '100'}%)`
                }}><p className='overlay-text'
                    id='sudowiz'
                    onClick={handleClick}>Sudowiz</p></div>
            <div className='pic-container'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/tasky.png'})`,
                    backgroundSize: '100%',
                    filter: `brightness(${props.project.name === 'Tasky' ? '35' : '100'}%)`
                }}><p className='overlay-text'
                    id='tasky'
                    onClick={handleClick}>Tasky</p></div>
            <div className='pic-container'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/algodex.png'})`,
                    backgroundSize: '100%',
                    filter: `brightness(${props.project.name === 'Algodex' ? '35' : '100'}%)`
                }}><p className='overlay-text'
                    id='algodex'
                    onClick={handleClick}>Algodex</p></div>
            <div className='pic-container'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/virtual-classroom.png'})`,
                    backgroundSize: '100%',
                    backgroundPositionX: '0',
                    filter: `brightness(${props.project.name === 'Virtual Classroom' ? '35' : '100'}%)`
                }}><p className='overlay-text'
                    id='virtualClassroom'
                    onClick={handleClick}>Virtual Classroom</p></div>
        </div>
    </div>
}

export default ProjectsContainer