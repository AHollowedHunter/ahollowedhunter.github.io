<script lang="ts">
	import type { Project } from "$lib/types/data";

	export let projects: Project[];
</script>

<div class="row">
	{#each projects as project}
		<div class="col-12 col-sm-6 align-self-center pt-3 mx-auto">
			<div class="card text-bg-dark">
				<img
					src={project.img}
					class="card-img-top p-3 mx-auto align-center"
					style="height: 25vh; object-fit:scale-down"
					alt={project.title}
				/>
				<div class="card-body">
					<h5 class="card-title">{project.title}</h5>
					<p class="card-text">{project.description}</p>
					{#each project.links as link}
						<a href={link.url} target="_{link.title}" class="btn btn-light">{link.title}</a>
						&nbsp;
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
</style>
