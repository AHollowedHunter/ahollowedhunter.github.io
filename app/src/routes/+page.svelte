<script>
	import "$lib/styles/normalize.css";
	import "$lib/styles/skeleton.css";
	import "$lib/styles/custom.css";
	import Links from "$lib/components/Links.svelte";

	import data from "$data";
</script>

<div class="container">
	<div class="row">
		<div class="six offset-by-three columns about">
			<h1>Ashley Cave</h1>
			<h5>Software Engineer</h5>
		</div>
		<div class="three columns">
			<!-- <h5>Links</h5> -->
			<Links links={data.links} />
		</div>
	</div>
	<div class="row">
		<div class="full-width columns">
			<img
				class="ghchart"
				src="https://ghchart.rshah.org/666666/ahollowedhunter"
				alt="ahollowedhunter's Github chart"
			/>
		</div>
	</div>
</div>

<style>
	.container {
		margin-top: 10rem;
	}
	.about {
	}
	.ghchart {
		filter: invert();
	}
</style>
