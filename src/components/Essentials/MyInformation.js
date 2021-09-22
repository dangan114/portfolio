import { FaReact } from "react-icons/fa"
import { SiFlutter, SiJava, SiGoogle } from "react-icons/si"

export const MY_LANGUAGES = [
    {
        name: 'Java',
        rating: 3
    },
    {
        name: 'Javascript',
        rating: 4
    },
    {
        name: 'Python',
        rating: 2
    }
]

export const MY_TECHNOLOGY = [
    {
        name: 'ReactJs',
        rating: 4
    },
    {
        name: 'ASP.NET Core',
        rating: 3
    },
    {
        name: 'Flutter',
        rating: 3
    },
    {
        name: 'Nodejs',
        rating: 4,
    }
]

export const MY_PROJECTS = [
    {
        name: 'Simon App',
        technology: [<SiFlutter />, <SiJava />],
        images: [
            '1200px-Virginia_Tech_seal.png'
        ],
        description: [
            'Simon App is an alert Android phone app.',
            'The users set the time in the app for emergency.',
            'The phone alerts at the preset time with vibration and flashing lights.',
            'The time could be set to daily, weekly, or every Wednesday, etc...',
            'If there is no response after 20 seconds, the phone sends out SMS to at least five emergency contacts determined by users.'
        ]
    },
    {
        name: 'Travel Diary',
        technology: [<FaReact />, <SiGoogle />],
        images: [
            '1200px-Virginia_Tech_seal.png'
        ],
        description: [
            'Travel Diary is a web application used to rate hotels',
            'It uses Places API and Programmable Search Engine of Google to retrieve information of the hotels',
            'The users can rank the hotels and the result will be stored locally in their browsers'
        ]
    },
]

export const MY_EDUCATION = [
    {
        school: 'Virginia Tech',
        title: 'B.S in Computer Science, major in Secure Computing',
        logo: '1200px-Virginia_Tech_seal.png',
        GPA: 'N/A',
        graduation: 'May 2023'
    },
    {
        school: 'Northern Virginia Community College',
        title: 'A.S in Engineering',
        logo: '1200px-Northern_Virginia_Community_College_seal.png',
        GPA: '3.94/4.00',
        graduation: 'May 2021'
    },
    {
        school: 'St. Lawrence Seminary High School',
        title: '',
        logo: 'St_Lawrence_seal.png',
        GPA: '3.87/4.00',
        graduation: 'May 2017'
    }
]

export const MY_BASIC = {
    name: 'An Dang',
    email: 'an.dang114@gmail.com',
    github: 'https://github.com/dangan114',
    linkedin: 'https://www.linkedin.com/in/an-dang-98b361157/'
}

export const MY_INFORMATION = {
    languages: MY_LANGUAGES,
    technology: MY_TECHNOLOGY,
    projects: MY_PROJECTS,
    education: MY_EDUCATION,
    basic: MY_BASIC
}