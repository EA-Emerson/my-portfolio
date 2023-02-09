<script>
    // const skills = ["HTML", "CSS", "JAVASCRIPT", "TAILWINDCSS", "BOOTSTRAP", "SCSS/ SASS", "REACT", "SVELTE", "PYTHON", "DJANGO", "SQL", "VERSION CONTROL"]
    const skills = [
        {name: "HTML", experience: 90},
        {name: "CSS", experience: 75},
        {name: "Javascript", experience: 75},
        {name: "JQuery", experience: 60},
        {name: "TailwindCss", experience: 85},
        {name: "Bootstrap", experience: 70},
        {name: "SCSS", experience: 50},
        {name: "React", experience: 50},
        {name: "Svelte", experience: 70},
        {name: "Python", experience: 60},
        {name: "Django", experience: 60},
        {name: "Git", experience: 60},
        {name: "Github", experience: 80},
    ]
</script>

<main class="px-5 py-20 bg-[#F9F9F9]" id="about">
    <header class="uppercase text-4xl font-bold py-5 border-b-4 border-b-[#5271FF] text-center tracking-wide">About me</header>

    <div class="lg:flex text-[#444] lg:w-full">
        <div class="lg:text-lg lg:px-20 lg:w-3/4">
            <header class="font-bold text-xl pt-12 pb-4">Get to know me!</header>
            <p >I'm a <strong>Frontend Web Developer</strong> and I aim at building the front end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>
                <a href="#/projects" class="underline"
                on:click={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
                
                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' });
                  }
                }}>Projects
            </a></strong> section.</p>
    
            <p>I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other members of the Dev Community. Feel free to Connect with me on my <a href="http://">LinkedIn</a>.</p>
    
            <p class="pb-6">I am a goal getter and I'm open to job opportunities where i can work, learn, grow and contribute. Don't hesitate to <strong>contact</strong> me if you have a good opportunity that matches my skills and experience.</p>
            
            <!-- <a href="#/contact" class="uppercase bg-[#5271FF] text-center mt-6 py-4 font-bold rounded px-12 tracking-wide text-lg"
                on:click={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
                    
                on:keydown={e => {
                if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
                }
                }}>
                contact
            </a> -->
            <button class="bigbtns"
                on:click={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
                    
                on:keydown={e => {
                if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
                }
                }}>
                <a href="#/contact" 
                    on:click={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
                        
                    on:keydown={e => {
                    if (e.key === 'Enter') {
                        window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
                    }
                    }}>
                    contact
                </a>
            </button>
        
        </div>
    
        <div class="lg:w-3/4 lg:px-20">
            <header class="font-bold text-xl pt-12 pb-4">My Skills</header>
            <div class="flex flex-wrap">
                {#each skills as skill}
                <div class="skill">
                    <strong class="text-sm text-[#555]">{skill.name}</strong>
                </div>
            {/each}
            </div>
                
        </div>
    </div>
</main>

<style>
    p {
        padding: 10px 0;
    }
    .skill {
        padding: 12px 15px;
        background-color: rgb(218, 218, 218);
        width: fit-content;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        margin: 8px
    }
</style>