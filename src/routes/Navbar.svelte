<script>
    import NavList from "./NavList.svelte";

    let showModal = false;
    let currentSVG = 1;

function toggleSVG() {
    showModal = !showModal
  const svg = document.getElementById("currentSVG");

  if (currentSVG === 1) {
    svg.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />

    `;
    currentSVG = 2;
  } else {
    svg.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"  on:click={toggleSVG}/>
    `;
    currentSVG = 1;
  }
}

</script>

<nav class="fixed top-0 left-0 right-0 border-b-2" id="navbar">
    <nav class="relative flex lg:py-5 py-3 justify-between bg-white lg:px-12 px-4 ">
        <p class="flex"><img class="lg:h-12 h-10 rounded-full" src="src\assets\img\avatar.png" alt="">
            <span class="uppercase font-bold text-center my-auto mx-4 lg:text-xl ">Aghogho Emokiniovo</span>
        </p>
         <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="my-auto" on:click={toggleSVG}>
            <svg id="currentSVG" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-auto font-bold lg:hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
        </div>
          
        <ul class="lg:flex hidden">
          
            <li class="navli" 
                on:click={() => window.scrollTo({ top: document.getElementById('home').offsetTop, behavior: 'smooth' })} 
                
                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('home').offsetTop, behavior: 'smooth' });
                  }
                }}>
                <a href="#/">Home</a>
            </li>

            <li class="navli" 
                on:click={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}

                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' });
                  }
                }}>
                <a href="#/about">About</a>
            </li>

            <li class="navli" 
                on:click={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}

                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' });
                  }
                }}>
                <a href="#/projects">Project</a>
            </li>

            <li class="navli" 
                on:click={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
                
                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
                  }
                }}>
              <a href="#/contact">Contact</a>
            </li>
        </ul>
    </nav>
    <NavList isPromo={true} {showModal} on:click={toggleSVG}>
        <ul class="uppercase tracking-wider font-bold text-sm bg-white text-right " 
            on:click={toggleSVG}
            
            on:keydown={e=> {
              if (e.key === 'Enter') {
                toggleSVG
              }
            }}>

        <li class="p-6 border-t-2 navlink">
            <a href="#/"
                on:click={() => window.scrollTo({ top: document.getElementById('home').offsetTop, behavior: 'smooth' })}
                
                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('home').offsetTop, behavior: 'smooth' });
                  }
                }}>Home
            </a>
        </li>

        <li class="p-6 border-t-2 navlink">
            <a href="#/about"
                on:click={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}
                
                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' });
                  }
                }}>About
            </a>
        </li>

        <li class="p-6 border-t-2 navlink">
            <a href="#/projects"
                on:click={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
                
                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' });
                  }
                }}>Projects
            </a>
        </li>

        <li class="p-6 border-t-2 navlink">
            <a href="#/contact"
                on:click={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
                
                on:keydown={e => {
                  if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
                  }
                }}>Contact
            </a>
        </li>
    </ul>
    </NavList>
</nav>


<style lang="postcss">
</style>