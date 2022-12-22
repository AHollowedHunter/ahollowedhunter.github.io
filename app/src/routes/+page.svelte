<script>
	import '$lib/styles/normalize.css';
	import '$lib/styles/skeleton.css';
	import '$lib/styles/custom.css';
	import Links from '$lib/components/Links.svelte';

	import data from '$data';
</script>

<div
	style="justify-content: center;
align-items: center; display: flex; height: 100vh;"
>
	<div class="container">
		<div class="row">
			<div class="one-half column">
				<h1>Ashley Cave</h1>
				<h5>BSc Software Engineering Bournemouth University</h5>
			</div>
			<div class="one-half column">
				<Links links={data.links} />
			</div>
		</div>
	</div>
</div>
