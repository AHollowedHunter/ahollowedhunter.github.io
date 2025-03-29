<script>
	import "$lib/styles/custom.scss";
	
	import Footer from "$lib/components/Footer.svelte";
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<!-- <span style="height: 5rem"/> -->

<main>
	{@render children?.()}
</main>

<Footer />
