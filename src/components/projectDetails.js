import React from 'react'
import Slideshow from './slideshow'
import Tools from './tools'
import Links from './links'

function ProjectDetails(props) {
    if (props.project.assigned) {
        return <div id='project-details'
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0',
                width: '75%',
                padding: '48px 24px 0 24px',
                marginBottom: '24px',
                alignSelf: 'center',
                borderTop: 'solid #bab2b5 1px'
            }}>
            <h2 style={{
                margin: '0',
                alignSelf: 'center'
            }}>{props.project.name}</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignSelf: 'center'
            }}>
                <Slideshow picArr={props.project.pics}
                    current={props.current}
                    setCurrent={props.setCurrent} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    maxWidth: '40%'
                }}>
                    <div>
                        <div style={{
                            margin: '24px 0 48px 0',
                            display: 'flex',
                            flexWrap: 'wrap',
                            maxWidth: '400px'
                        }}>
                            <Tools toolArr={props.project.tools} />
                        </div>
                        <p style={{ maxWidth: '400px' }}>{props.project.summary}</p>
                        {props.project.name === 'Tasky' ? <div>
                            <p>Have a Monday.com account?</p>
                            <a href={props.project.demo} target='_blank' rel="noopener noreferrer">
                                <img alt='Add to monday.com' style={{
                                    height: '36px'
                                }} src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png' />
                            </a>
                        </div> : null}
                    </div>
                    <Links name={props.project.name}
                        video={props.project.video}
                        github={props.project.github}
                        demo={props.project.demo} />
                </div>
            </div>
        </div>
    } else {
        return null
    }
}

export default ProjectDetails