import Page__SvelteComponent_ from "./routes/+page.svelte";
import About__SvelteComponent_ from "./routes/About.svelte";
import Project__SvelteComponent_ from "./routes/Project.svelte";
import ProjectDetails__SvelteComponent_ from "./routes/ProjectDetails.svelte";
import NotFound__SvelteComponent_ from "./routes/NotFound.svelte";
import Contact__SvelteComponent_ from "./routes/Contact.svelte";

export default {
    "/": Page__SvelteComponent_,
    "/about": About__SvelteComponent_,
    "/projects": Project__SvelteComponent_,
    "/project/project": ProjectDetails__SvelteComponent_,
    "/contact": Contact__SvelteComponent_,

    "*": NotFound__SvelteComponent_
}
