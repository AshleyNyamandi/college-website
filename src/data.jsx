import { v4 as uuidv4 } from 'uuid';

// importing assets
import data_science from './assets/data_science.jpeg'
import machine_learning from './assets/machine_learning.jpeg'
import web_development from './assets/web_development.jpeg'
import campus1 from './assets/campus1.jpg'
import campus2 from './assets/campus2.jpg'
import campus3 from './assets/campus3.jpg'
import campus4 from './assets/campus4.jpg'
import campus5 from './assets/campus5.jpg'
import student1 from './assets/student1.jpeg'
import student2 from './assets/student2.jpeg'
import student3 from './assets/student3.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)



export const programsOffered = [
    {
        program: 'Data Science',
        backgroundImage: data_science,
        icon: <FontAwesomeIcon icon="fa-solid fa-database" />
    },
    {
        program: 'Machine Learning',
        backgroundImage: machine_learning,
        icon: <FontAwesomeIcon icon="fa-solid fa-square-binary" />
    },
    {
        program: 'Web Development',
        backgroundImage: web_development,
        icon: <FontAwesomeIcon icon="fa-brands fa-web-awesome" />
    },

]

export const gallery = [
    {
        id: uuidv4(),
        img: campus1
    },
    {
        id: uuidv4(),
        img: campus2
    },
    {
        id: uuidv4(),
        img: campus3
    },
    {
        id: uuidv4(),
        img: campus4
    },
    {
        id: uuidv4(),
        img: campus5
    },
]

export const students = [
    {
        id: uuidv4(),
        name: "Kane Rojas",
        img : student1,
        rating: 3,
        testimony: "Data Science program at Nymd is phenomenal. We didn't just learn theory; we worked with massive, real-world datasets from local companies and research institutes from day one. My capstone project involved building a predictive model for urban traffic patterns for the city council, and it's actually being piloted! The curriculum is constantly updated to include the latest tools (Python, R, SQL, Spark), and the career fair is packed with tech giants and startups desperate for qualified data scientists. If you want to solve complex problems with data, look no further.phenomenal. We didn't just learn theory; we worked with massive, real-world datasets from local companies and research institutes from day one. My capstone project involved building a predictive model for urban traffic patterns for the city council, and it's actually being piloted! The curriculum is constantly updated to include the latest tools (Python, R, SQL, Spark), and the career fair is packed with tech giants and startups desperate for qualified data scientists. If you want to solve complex problems with data, look no further."
    }, 

    {
        id: uuidv4(),
        img: student2,
        name: "Ashley Nyamandi",
        rating: 5,
        testimony: "The ML track here is no joke. The professors are brilliant—many are active researchers pushing the boundaries of NLP and computer vision. I had access to powerful GPU clusters for training complex models, which was a game-changer for my research. However, the focus is heavily on the theoretical and mathematical foundations. You'll need a lot of initiative to bridge the gap to production-level code and MLOps practices on your own. It prepared me incredibly well for my role as an ML Engineer, but the learning curve was steep."

    },

    {
        id: uuidv4(),
        img: student3,
        name: "Bruce Cess",
        rating: 3,
        testimony: "I came to Nymd with zero coding experience and just graduated as a full-stack developer. The web development program is intensely practical. We moved from fundamentals (HTML, CSS, JS) to modern frameworks (React, Node.js) and even touched on backend and DevOps with Docker and AWS. The best part was the Studio class, where we worked in agile teams to build a fully-functional web app for a real client. My portfolio from that class alone got me multiple job offers. The support from the coding community and TAs here is incredible."

    },

    {
        id: uuidv4(),
        img: null,
        name: "Rutendo Mlambo",
        rating: 5,
        testimony: "Let's be real: you come to Nymd for a high-paying tech job, and it delivers. As a Data Science major, I had an internship lined up after my sophomore year and a full-time offer from a FAANG company before graduation. The brand name on the resume opens doors. The workload is brutal, and the competition among students can be toxic if you let it get to you. You're paying for the network and the career launchpad. The actual teaching quality varies, but the outcomes speak for themselves."

    },

    {
        id: uuidv4(),
        img: null,
        name: "Bledis Moyo",
        rating: 3,
        testimony: "I majored in CS with a focus on web development but took every ML elective I could. The resources are top-tier: 24/7 computer labs, great software licenses, and hackathons that are legitimately fun. I do wish the different tech disciplines collaborated more. The ML students are in their math bubble, the web devs are building UIs, and the data scientists are in their own world. A required, cross-functional project course would be amazing and mirror real-industry workflows. Still, a fantastic education that made me a versatile candidate."

    },

    {
        id: uuidv4(),
        img: null,
        rating: 4,
        testimony: "The student body here is brilliant, and I learned as much from my peers in group projects as I did from lectures. However, the web development track feels a year or two behind the industry. We spent too much time on older technologies while barely scratching the surface of things like Next.js or cloud-native development. The administration is a nightmare—getting approval for a required course that was full felt like an epic quest. You can get a good education here, but you'll have to fight the system and do a lot of self-learning to stay relevant."

    },
]