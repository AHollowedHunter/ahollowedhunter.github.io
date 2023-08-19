<script>
	import Links from "$lib/components/Links.svelte";

	import data from "$data";
	import Projects from "$lib/components/Projects.svelte";
	import Skills from "$lib/components/Skills.svelte";
</script>

<div class="container-md mt-3">
	<div class="row justify-content-end mb-3">
		<div class="col-12 col-md-3 align-self-center text-center">
			<img
				class="avatar w-100"
				src="https://avatars.githubusercontent.com/u/45659989?v=4"
				alt="Me"
			/>
		</div>
		<div class="col-12 col-md-6 align-self-center my-3">
			<h1>Ashley Cave</h1>
			<h4>Software Engineer</h4>
			<br />
			<p>Hello I'm Ashley, a software engineer based in the UK.</p>
			<p>
				I enjoy working with C# and .NET, although I've got a wide variety of experience with other
				languages and technologies.
			</p>
			<p>
				I take photos of wildlife or other things, and sometimes I post them so checkout my links.
			</p>
		</div>
		<div class="col-12 col-md-3 align-self-center">
			{#if data.links}
				<Links links={data.links} />
			{/if}
		</div>
	</div>
	{#if data.projects}
		<div class="row mb-3">
			<div class="col">
				<h4>Projects</h4>
				<Projects projects={data.projects} />
			</div>
		</div>
	{/if}
	{#if data.shields}
		<div class="row mb-3">
			<div class="col">
				<h4>Skills and such</h4>
				<Skills shields={data.shields} />
			</div>
		</div>
	{/if}
	<div class="row">
		<div class="col">
			<h4>GitHub activity</h4>
			<div class="d-flex justify-content-center">
				<img
					class="ghchart"
					src="https://ghchart.rshah.org/070700/ahollowedhunter"
					alt="ahollowedhunter's Github activity chart"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.avatar {
		border-radius: 50%;
		max-width: 30vw;
	}

	h1 {
		font-size: calc(2rem + 1.5vw);
	}

	.container-md {
		max-width: 960px;
	}

	.ghchart {
		max-width: 100%;
		filter: invert();
	}
</style>
