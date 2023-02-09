import { writable } from "svelte/store";

// export const activeComponent = writable();
const patricia = "mypatricia.co"
const projectStore = writable([
    {
        name:"ArgentXYZ with User Authentication",
        description:"I developed a clone of the Argent XYZ website and added user authentication functionality using Django. I utilized my skills in HTML, CSS, JavaScript and Python to recreate the website's homepage and integrated Django to provide secure user authentication for the users. The result is a functional and visually appealing web application that showcases my ability to work with multiple technologies and create a complete web solution.",
        id:1,
        brief:"Developed a clone of the Argent XYZ website with user authentication using Django. Implemented HTML, CSS, JavaScript and Python to create a visually appealing and secure web application.",
        Image:"/public/django user-authentication.png",
        link:"https://emerson.pythonanywhere.com/",
        technologies: ["HTML", "CSS", "JS", "Python", "Django"]
    },
    {
        name:"myPatricia Clone",
        description: `I have successfully created a copy of the landing page for the website ${patricia} on my own platform, including replicating its design elements, layout and content. This clone is a demonstration of myexpertise in web development and your ability to recreate a functional and visually appealing website`,
        id:2,
        brief:`I have replicated the design and content of the landing page of ${patricia}  on my own website and connected it to your portfolio to showcase your skills in web development.`,
        Image:"/public/MyPatricia Landing Page - Google Chrome 19_01_2023 4_58_04 pm.png",
        link: "https://crypto-patricia-tailwind.netlify.app/",
        technologies: ["HTML", "TailwindCSS", "JavaScript"]
   },
   {
        name:"Blog App with react",
        description: "A dynamic blog app built with React. The app comes with a set of default blogs for users to explore and interact with. By clicking on any of the blogs, users can view the details and even delete them if they choose to. The app also provides the functionality for users to create new blogs, which get added seamlessly to the existing list. This app showcases my proficiency in React and my ability to create user-friendly and interactive web applications.",
        id: 3,
        brief: "Dynamic blog app built with React featuring default blogs, ability to view details, delete and create new blogs. Showcases my skills in creating interactive and user-friendly web apps.",
        Image:"/public/react blog.png",
        link: "https://blog-project-using-react.netlify.app/",
        technologies: ["ReactJS", "JSON"]
   },
        {
            name:"Argent XYZ Clone",
            description: "I successfully recreated the landing page for Argent XYZ, showcasing a modern and user-friendly design with intuitive navigation. Utilizing HTML, TailwindCSS, and JavaScript, I was able to replicate the original site's functionality and enhance the overall user experience. This project required a strong attention to detail and the ability to work with existing design elements to create a seamless and accurate clone.",
            id:4,
            brief: "Created a clone of Argent XYZ's landing page with HTML, TailwindCSS, and JavaScript. Implemented modern design and enhanced user experience for improved functionality. Showcased attention to detail and ability to replicate existing design.",
            Image:"/public/Argent homepage.png",
            link:"https://ea-emerson.github.io/Argent/",
            technologies: ["HTML", "TailwindCSS", "JavaScript"]
        }
])

export default projectStore