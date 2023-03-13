<script lang="ts">
	import type { Project } from "$lib/types/data";

	export let projects: Project[];
</script>

<div class="row mb-5">
	{#each projects as project}
		<div class="col-12 col-sm-6 align-self-center pt-3 mx-auto">
			<div class="card text-bg-dark">
				<img
					src={project.img}
					class="card-img-top p-3 mx-auto w-50 align-center"
					alt={project.title}
				/>
				<div class="card-body">
					<h5 class="card-title">{project.title}</h5>
					<p class="card-text">{project.description}</p>
					<a href={project.url} target="_{project.title}" class="btn btn-light stretched-link"
						>Website</a
					>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
</style>
