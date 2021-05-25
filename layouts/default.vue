<template>
	<div>
		<nuxt />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";
	@Component({ name: "default" })
	export default class Default extends Vue {}
</script>

<style lang="postcss">
	.dark-mode {
		@apply text-gray-100 bg-gray-900;
	}
	.light-mode {
		@apply text-gray-900 bg-gray-100;
	}
</style>
