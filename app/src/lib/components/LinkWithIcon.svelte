<script lang="ts">
	import type { Link } from '$lib/types/data';

	export let link: Link;
</script>

<a class="button button-primary" rel={link.rel ?? ''} target="_{link.site}" href={link.url}>
	<img src="images/{link.icon}" alt="{link.site} Icon" />
	&nbsp;{link.username}
</a>

<style>
	a {
		text-decoration: none;
		color: ghostwhite;
	}
	img {
		max-height: 1em;
		vertical-align: middle;
		/* Make white ghostwhite (#F8F*FF) */
		filter: sepia(77%) saturate(690%) hue-rotate(180deg) brightness(99%) contrast(106%);
	}
	.button {
		font-weight: 400;
		text-transform: none;
	}
	.button.button-primary {
		background-color: #363636;
		border-color: #363636;
		font-size: larger;
		height: auto;
		padding: 4px 16px;
	}
	.button.button-primary:hover {
		background-color: #424242;
		border-color: #424242;
	}
</style>
