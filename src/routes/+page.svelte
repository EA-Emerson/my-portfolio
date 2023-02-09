<script>

</script>
<div class="pt-8 lg:h-[90vh] items-center flex bg-[#f3f4f6]" id="home">
    <div class="px-4 py-40  flex flex-col items-center text-center my-auto">
        <p class="uppercase text-3xl font-extrabold tracking-wide leading-relaxed lg:text-6xl lg:w-[90%]">
            Hey, I'm Aghogho Emokiniovo
        </p>
        <p class="py-8 text-[#444] lg:text-[22px] md:w-5/6 lg:w-3/4 lg:py-12">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button class="bigbtns"
                on:click={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
                    
                on:keydown={e => {
                if (e.key === 'Enter') {
                    window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' });
                }
                }}>
                <a href="#/projects" 
                    on:click={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
                        
                    on:keydown={e => {
                    if (e.key === 'Enter') {
                        window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' });
                    }
                    }}>
                    projects
                </a>
            </button>
        </div>
</div>

  
  <style lang="postcss">
 
  </style>