<script lang="ts">
	import type { Link } from '$lib/types/data';

	export let link: Link;
</script>

<a rel={link.rel ?? ''} target="_{link.site}" href={link.url}>
	<img src="images/{link.icon}" alt="{link.site} Icon" />
	&ensp;{link.username}
</a>

<style>
	a {
		text-decoration: none;
		color: ghostwhite;
	}
	img {
		max-height: 1.1em;
		vertical-align: middle;
	}
</style>
