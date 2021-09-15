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
        technology: 'Flutter',
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
        technology: 'ReactJs',
        images: [
            '1200px-Virginia_Tech_seal.png'
        ],
        description: [
            'Travel Diary is a web application used to rate hotels',
            'It uses Places API and Programmable Search Engine of Google to retrieve information of the hotels',
            'The users can rank the hotesl and the result will be stored locally in their browsers'
        ]
    },
]

export const MY_EDUCATION = [
    {
        school: 'Virginia Tech',
        logo: '1200px-Virginia_Tech_seal.png',
        GPA: 'N/A',
        graduation: 'May 2023'
    },
    {
        school: 'Northern Virginia Community College',
        logo: '1200px-Virginia_Tech_seal.png',
        GPA: '3.94/4.00',
        graduation: 'May 2021'
    },
    {
        school: 'St. Lawrence Seminary High School',
        logo: '1200px-Virginia_Tech_seal.png',
        GPA: '3.87/4.00',
        graduation: 'May 2017'
    }
]

export const MY_INFORMATION = {
    languages: MY_LANGUAGES,
    technology: MY_TECHNOLOGY,
    projects: MY_PROJECTS,
    education: MY_EDUCATION
}