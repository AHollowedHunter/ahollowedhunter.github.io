<script lang="ts">
	import type { Link } from "$lib/types/data";
	import LinkWithIcon from "./LinkWithIcon.svelte";

	export let links: Link[];
</script>

<ul>
	{#each links as link}
		<li id={link.emoji}>
			<LinkWithIcon {link} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		max-width: fit-content;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: space-around;
	}

	li {
		width: 50%;
		padding: 0.5rem;
	}

	@media (min-width: 768px) {
		ul {
			display: inline;
		}

		li {
			width: auto;
		}
	}
</style>
