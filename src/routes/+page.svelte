<script lang="ts">
	import AfricaCulture from '../components/genre/AfricaCulture.svelte';
	import Fiction from '../components/genre/Fiction.svelte';
	import Folklore from '../components/genre/Folklore.svelte';
	import Folktales from '../components/genre/Folktales.svelte';
	import History from '../components/genre/History.svelte';
	import Poems from '../components/genre/Poems.svelte';
	import Science from '../components/genre/Science.svelte';
	import ShortStories from '../components/genre/ShortStories.svelte';
	import Technology from '../components/genre/Technology.svelte';
	import RecentBooks from '../components/RecentBooks.svelte';
	import Books from '../components/Books.svelte';
	

	export let data;
	const { categories } = data;
    let title:string
	let searchValue = ''

	let filter = componentSelector('all categories');

	function componentSelector(value: string) {
		switch (value) {
			case 'africa culture':
                title = 'africa culture'
				return AfricaCulture;

			case 'fiction':
                title = 'fiction'
				return Fiction;

			case 'folklore':
                title = 'folklore'
				return Folklore;

			case 'folktales':
                title = 'folktales'
				return Folktales;

			case 'history':
                title = 'history'
				return History;

			case 'poems':
                title = 'poems'
				return Poems;

			case 'science':
                title = 'science'
				return Science;

			case 'short stories':
                title = 'short stories'
				return ShortStories;

			case 'technology':
                title = 'technology'
				return Technology;

			default:
                title = 'all categories'
				return Books;
		}
	}


</script>

<main class="mx-10 mt-5">
	<!-- search -->
	<div class="flex mx-20">
		<input type="text" name="search" id="search" class="input w-full input-bordered" bind:value={searchValue} />
		<button class="btn bg-subclr capitalize">Search</button>
	</div>

	<!-- categories -->
	<div class="flex justify-between mt-5">
		{#each categories as genre}
			<button
				on:click={() => {
					filter = componentSelector(genre);
				}}
				class="capitalize"
			>
				{genre}
			</button>
		{/each}
	</div>

	<!-- recent books -->

	<h1 class="mt-10 font-bold text-lg">{data.recent}</h1>
	<RecentBooks />

	<!-- main genres -->
    <h1 class="mt-10 font-bold text-lg capitalize">{title}</h1>

	<svelte:component this={filter} />
</main>
