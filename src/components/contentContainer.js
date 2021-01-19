import React, { useState } from 'react'
import ProjectDetails from './projectDetails'
import ProjectsContainer from './projectsContainer'

function ContentContainer() {
    const [project, setProject] = useState({ assigned: false })
    const [current, setCurrent] = useState(0)

    return <div style={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <ProjectsContainer project={project}
            setProject={setProject}
            setCurrent={setCurrent} />
        <ProjectDetails project={project}
            current={current}
            setCurrent={setCurrent} />
    </div>
}



export default ContentContainer