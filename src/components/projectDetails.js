import React from 'react'
import Slideshow from './slideshow'
import Tools from './tools'
import Links from './links'

function ProjectDetails(props) {
    if (props.project.assigned) {
        return <div id='project-details'
            style={{
                width: '1000px',
                padding: '48px 24px 0 24px',
                marginBottom: '24px',
                alignSelf: 'center',
                borderTop: 'solid #bab2b5 3px'
            }}>
            <h2 style={{ margin: '0' }}>{props.project.name}</h2>
            <div style={{ display: 'flex' }}>
                <Slideshow picArr={props.project.pics}
                    current={props.current}
                    setCurrent={props.setCurrent} />
                <div style={{
                    marginLeft: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '376px'
                }}>
                    <div>
                        <div style={{
                            margin: '24px 0 48px 0',
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                            <Tools toolArr={props.project.tools} />
                        </div>
                        <p>{props.project.summary}</p>
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