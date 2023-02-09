<script>
    import projectStore from "../lib/store/projectStore";
    import ProjectDetails from "./ProjectDetails.svelte";
    export let projects = [];
    
    let selectedProjectId;

    import { writable } from 'svelte/store';
  const activeProject = writable();

  function setActiveProject(id) {
    activeProject.set(id);
  }

    
    function handleClick(id) {
    selectedProjectId = id;
    }

    projectStore.subscribe(data => {
        projects = data
    })

    let showProject = false;
    let openProjects = {};

	const toggleProject = (id, index) => {
		showProject = !showProject;
        openProjects[index] = !openProjects[index]; 
	}
    
</script>

<section class="px-5 py-20" id="projects">
    <header class="uppercase text-4xl font-bold py-5 border-b-4 border-b-[#5271FF] text-center tracking-wide ">Project</header>
    <header class="lg:text-xl pt-12 pb-4 text-center lg:w-1/2 m-auto font-bold">Here you will find some of the personal projects that I created with each project containing a brief description.</header>

    {#each projects as project, index}
        <div class="project py-12 lg:flex lg:px-20 lg:justify-evenly border-b-2 border-gray-400">
            <div class="lg:block">
                <a href={project.link}>
                    <img src={project.Image} alt="{project.name}" class="border-[1px] rounded-lg border-black w-[90vw] m-auto lg:w-[500px] lg:rounded-xl">
                </a>
                    <h2 class="my-1 font-bold text-lg text-center capitalize lg:hidden">{project.name}</h2>
            </div>
            
            <div class="hidden lg:block w-[500px] h-fit self-center">
                <p class="hidden lg:block lg:text-2xl my-1 font-bold capitalize">{project.name}</p>
                <p class="text-gray-600 leading-loose text-lg">{project.brief}</p>
                <div class="flex">
                    {#each project.technologies as technology}
                        <strong class="skill text-sm text-[#555] mr-3">{technology}</strong>
                    {/each}
                </div>
                <a href={project.link} class="xs text-[#5271ff] hover:text-[#415ac9] underline" target="_blank" rel="noreferrer">Go to website</a>
            </div>

            <button on:click={() => handleClick(project.id)} 
                on:click={() => setActiveProject(project.id)}
                on:click={() => toggleProject(project.id, index)}
                class="uppercase font-bold text-xs px-8 py-4 mx-auto block my-2 rounded bg-[#5271FF] h-fit lg:hidden">
                {showProject == true && project.id === selectedProjectId? 'Hide Details' : 'More Details'}
            </button>
            {#if openProjects[index]}
            <div class="description lg:hidden text-center">
                <p class="text-sm leading-[1.9] text-gray-600 tracking-wide">{project.description}</p>
                <div class="mx-auto flex flex-wrap mb-2">
                    {#each project.technologies as technology}
                        <strong class="skill text-sm text-[#555] mr-2 mb-2">{technology}</strong>
                    {/each}
                </div>
                <a href={project.link} class="xs text-[#5271ff]">Go to website</a>
            </div>

            {/if}
        </div>
{/each}

</section>

<style lang="postcss">
        .skill {
        padding: 12px 15px;
        background-color: rgb(218, 218, 218);
        width: fit-content;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        /* margin: 8px 0px */
    }
</style>