<script lang='ts'>
	import { fetchData } from '$lib/fetchData';
	import type { BOOK } from '../models/singleBook';
	import Book from "$lib/Book.svelte";

	let books: BOOK[] = [];
	
	fetchData().then((res) => {


		books = res.data;

		
	});
</script>

<!-- card -->

<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-y-10 gap-x-5 mt-5">
	{#each books as book}
		<Book {book} />
	{/each}
</div>


