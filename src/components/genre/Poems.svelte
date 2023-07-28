<script lang='ts'>
	import { fetchData } from '$lib/fetchData';
	import type { BOOK } from '../../models/singleBook';
	import Book from "$lib/Book.svelte";

	let books: BOOK[] = [];
	fetchData().then((res) => {
		books = res.data;

		books = books.filter((book) => {
			return book.genre.includes('poems')
		})
	});
</script>

<!-- card -->

<div class="grid grid-cols-3 gap-y-10 gap-x-5 mt-5">
	{#each books as book}
		<Book {book} />
	{/each}
</div>
