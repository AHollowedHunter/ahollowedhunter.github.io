<script lang="ts">
	import type { Link } from '$lib/types/data';
	import LinkWithIcon from './LinkWithIcon.svelte';

	export let links: Link[];
</script>

<ul>
	{#each links as link}
		<li id={link.emoji}>
			<LinkWithIcon {link} />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}
</style>
