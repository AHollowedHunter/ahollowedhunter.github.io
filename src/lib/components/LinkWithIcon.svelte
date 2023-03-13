<script lang="ts">
	import type { Link } from "$lib/types/data";

	export let link: Link;
</script>

<a
	class="btn btn-lg btn-dark d-flex flex-row"
	rel={link.rel ?? ""}
	target="_{link.site}"
	href={link.url}
>
	<img src="images/{link.icon}" alt="{link.site} Icon" />
	<span class="text-nowrap fs-5">{link.site}</span>
</a>

<style>
	a {
		text-decoration: none;
	}

	.btn {
		color: ghostwhite;
		width: 100%;
	}

	img {
		align-self: center;
		max-height: 1.5rem;
		vertical-align: middle;
		/* Make white ghostwhite (#F8F8FF) */
		filter: sepia(77%) saturate(690%) hue-rotate(180deg) brightness(99%) contrast(106%);
	}

	span {
		flex: 1;
		padding-left: 0.5rem;
		text-align: left;
		text-decoration: none;
		word-break: break-all;
	}
</style>
