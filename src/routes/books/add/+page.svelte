<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
	import axios from 'axios';

	const { categories } = data;
	const { success } = data;

	let defaultError: string;

	$: isSuccess = false;
	$: isFail = false;

	const validator = {
		yearValidator: '',
		titleValidator: '',
		authorValidator: '',
		contentValidator: ''
	};

	const formData = {
		title: '',
		author: '',
		category: '',
		year: 2023,
		content: ''
	};

	const handleSubmit = async () => {
		if (formData.year === 0 || formData.year < 2023 || formData.year > 2023) {
			validator.yearValidator = 'Year cannot be less than or more than 2023';
		}

		if (formData.title.length <= 3 || formData.title.length >= 30) {
			validator.titleValidator = 'Min length is 3 max length is 30';
		}

		if (formData.author.length <= 3 || formData.title.length >= 20) {
			validator.authorValidator = 'Min length is 3 max length is 20';
		}
		if (formData.content.length <= 200) {
			validator.authorValidator = 'Min length is 200 characters';
		}

		const data = {
			title: formData.title,
			author: formData.author,
			content: formData.content,
			year: formData.year,
			genre: formData.category
		};
		const response = await axios
			.post('http://localhost:4000/api/v1/books', data)
			.then((res) => {
				console.log(res);
				isSuccess = true;
				setTimeout(() => {
					goto('/');
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
				isFail = true;
				defaultError = err.message;
			});
	};
</script>

{#if isSuccess}
	<div class="lg:mx-10 sm:mx-5">
		<div class="w-full justify-end flex">
			<div class="alert alert-success sm:flex lg:w-[30%]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>{success}</span>
			</div>
		</div>
	</div>
{/if}
{#if isFail}
	<div class="lg:mx-10 sm:mx-5">
		<div class="w-full justify-end flex">
			<div class="alert alert-error sm:flex lg:w-[30%]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>{defaultError}</span>
			</div>
		</div>
	</div>
{/if}

<main class="lg:mx-10 sm:mx-5">
	<h1 class="font-bold text-2xl">Upload Book</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="my-5">
			<label for="title" class="label">Book title</label>
			<span class="text-warning">{validator.titleValidator}</span>
			<input
				type="text"
				id="title"
				class="input input-bordered w-full max-w-8xl"
				placeholder="Book title"
				bind:value={formData.title}
				required
			/>
		</div>
		<div class="my-5">
			<label for="author" class="label">Author</label>
			<span class="text-warning">{validator.authorValidator}</span>

			<input
				type="text"
				id="author"
				class="input input-bordered w-full max-w-8xl"
				placeholder="Book Author"
				bind:value={formData.author}
				required
			/>
		</div>

		<div class="my-5 grid grid-cols-2 gap-2">
			<div>
				<label for="category" class="label">Category</label>
				<select
					id="category"
					class="select select-bordered w-full max-w-3xl"
					bind:value={formData.category}
					required
				>
					<option disabled selected>Select Category</option>
					{#each categories as category}
						<option value={category}>{category}</option>
					{/each}
				</select>
			</div>

			<div>
				<div class="flex">
					<label for="author" class="label">Year</label>
					<span class="text-warning">{validator.yearValidator}</span>
				</div>
				<input
					type="number"
					id="title"
					class="input input-bordered w-full max-w-3xl"
					placeholder="Eg. 2018"
					bind:value={formData.year}
					required
				/>
			</div>
		</div>

		<div>
			<label for="content" class="label">Content</label>
			<span class="text-warning">{validator.contentValidator}</span>

			<textarea
				id="content"
				class="textarea textarea-bordered textarea-lg w-full"
				bind:value={formData.content}
				required
			/>
		</div>

		<button
			type="submit"
			class="btn w-full mt-2 bg-mainclr text-white hover:bg-subclr hover:text-mainclr"
			>Upload Book</button
		>
	</form>
</main>
