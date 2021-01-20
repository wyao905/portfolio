const Projects = {
    dailyChirp: {
        name: 'The Daily Chirp',
        summary: 'React and Node.js application that keeps track of the most recent happenings via tweets in your local area.',
        pics: [{
            id: 1,
            src: `${process.env.PUBLIC_URL}/assets/daily_chirp_1.png`,
            width: 'auto',
            alt: 'daily_chirp_1'
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/assets/daily_chirp_2.png`,
            width: 'auto',
            alt: 'daily_chirp_2'
        }],
        tools: ['Twitter API', 'MapQuest API', 'JavaScript', 'React', 'Node.js', 'Express'],
        github: 'https://github.com/wyao905/daily_chirp',
        demo: '',
        video: ''
    },
    sudowiz: {
        name: 'Sudowiz',
        summary: 'Sudoku wizard created using React, Python, and Flask. Sudowiz help users solve sudoku puzzles.',
        pics: [{
            id: 1,
            src: `${process.env.PUBLIC_URL}/assets/sudowiz_1.png`,
            width: 'auto',
            alt: 'sudowiz_1'
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/assets/sudowiz_2.png`,
            width: 'auto',
            alt: 'sudowiz_2'
        }],
        tools: ['JavaScript', 'React', 'Python', 'Flask'],
        github: 'https://github.com/wyao905/sudoku_solver',
        demo: 'https://sudowiz.herokuapp.com',
        video: ''
    },
    tasky: {
        name: 'Tasky',
        summary: 'Item view widget for the Monday.com platform. Created for the Monday.com hackathon.',
        pics: [{
            id: 1,
            src: `${process.env.PUBLIC_URL}/assets/tasky_1.png`,
            width: 'auto',
            alt: 'tasky_1'
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/assets/tasky_2.png`,
            width: 'auto',
            alt: 'tasky_2'
        }],
        tools: ['JavaScript', 'React', 'React Hooks', 'react-beautiful-dnd'],
        github: 'https://github.com/wyao905/tasky',
        demo: 'https://auth.monday.com/oauth2/authorize?client_id=cdd1875ed0b3a4086cbe66cf06fdf08c&response_type=install',
        video: 'https://www.youtube.com/watch?v=VC7ZrhEbBtY&feature=emb_title&ab_channel=JorgeCornejo'
    },
    algodex: {
        name: 'Algodex',
        summary: 'Front-end single page application with the goal of visualizing the runtime of an algorithm.',
        pics: [{
            id: 1,
            src: `${process.env.PUBLIC_URL}/assets/algodex_1.png`,
            width: 'auto',
            alt: 'algodex_1'
        },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/assets/algodex_2.png`,
            width: 'auto',
            alt: 'algodex_2'
        }],
        tools: ['JavaScript', 'React', 'Redux', 'React Hooks'],
        github: 'https://github.com/wyao905/algodex',
        demo: 'https://algodex.herokuapp.com',
        video: ''
    },
    virtualClassroom: {
        name: 'Virtual Classroom',
        summary: 'Full stack application that simulates an online virtual classroom environment.',
        pics: [{
            id: 1,
            src: `${process.env.PUBLIC_URL}/assets/virtual-classroom.png`,
            width: '1000px',
            alt: 'virtual-classroom'
        }],
        tools: ['JavaScript', 'Ruby', 'Rails', 'React', 'Redux', 'Redux-Thunk', 'Socket.IO'],
        github: 'https://github.com/wyao905/virtual_classroom',
        demo: 'https://vir-clsrm.herokuapp.com',
        video: ''
    }
}

export default Projects