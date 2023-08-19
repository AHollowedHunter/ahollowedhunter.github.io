<script lang="ts">
	import type { Shield } from "$lib/types/data";
	import LinkWithIcon from "./LinkWithIcon.svelte";

	export let shields: Shield[];
</script>

<ul>
	{#each shields as link}
		<li>
			<img src={link.uri} alt={link.text} />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		max-width: fit-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-evenly;
        justify-content: center;
	}

	li {
		/* float: left; */
		padding: 4px;
	}

	img {
		height: 2rem;
	}
</style>
