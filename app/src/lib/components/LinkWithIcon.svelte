<script lang="ts">
	import type { Link } from '$lib/types/data';

	export let link: Link;
</script>

<a rel={link.rel ?? ''} target="_{link.site}" href={link.url}>
	<div class="button button-primary">
		<img src="images/{link.icon}" alt="{link.site} Icon" />
		<span>{link.site}</span>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}

	.button {
		color: ghostwhite;
		font-size: 1em;
		font-weight: 400;
		text-transform: none;
		max-width: fit-content;
		overflow-wrap: break-word;
		white-space: normal;
		display: flex;
		height: auto;
		padding: 8px 16px;
	}

	.button.button-primary {
		background-color: #363636;
		border-color: #363636;
	}

	.button.button-primary:hover {
		background-color: #424242;
		border-color: #424242;
	}

	img {
		align-self: center;
		max-height: 1.5em;
		vertical-align: middle;
		/* Make white ghostwhite (#F8F8FF) */
		filter: sepia(77%) saturate(690%) hue-rotate(180deg) brightness(99%) contrast(106%);
	}

	span {
		flex: 1;
		padding-left: 0.5em;
		text-align: left;
		text-decoration: none;
		word-break: break-all;
	}
</style>
