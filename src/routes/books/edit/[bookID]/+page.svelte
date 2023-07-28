<script>
	import { goto } from '$app/navigation';
	import axios from 'axios';
    

    export let data

    const  singleBook  = data.singleBook.data

    const handleUpdate = async () => {
        const data = {
            title : singleBook.title,
            author : singleBook.author,
            content : singleBook.content,
            year : singleBook.year,
            genre : singleBook.category
        }

        const response = await axios.patch(`http://localhost:4000/api/v1/books/${singleBook._id}`, data)
        .then((res) => {
            console.log(res)
            alert('Book Updated')
            goto(`/books/${singleBook._id}`)
           
            
        })
        .catch((err) => {
            
            alert('Update Failed')
            console.log(err)
        })
    }
  

</script>

<main class="mx-10">
	<h1 class="font-bold text-2xl">Upload Book</h1>
	<form on:submit|preventDefault={handleUpdate}>
		<div class="my-5">
			<label for="title" class="label">Book title</label>
			<input
				type="text"
				id="title"
				class="input input-bordered w-full max-w-8xl"
				placeholder="Book title"
				bind:value={singleBook.title}
				required
			/>
		</div>
		<div class="my-5">
			<label for="author" class="label">Author</label>
			<input
				type="text"
				id="title"
				class="input input-bordered w-full max-w-8xl"
				placeholder="Book Author"
				bind:value={singleBook.author}
				required
			/>
		</div>

		<div class="my-5 grid grid-cols-2 gap-2">
			<div>
				<label for="category" class="label">Category</label>
				<select
					id="category"
					class="select select-bordered w-full max-w-3xl"
					bind:value={singleBook.category}
					required
				>
					<option selected disabled value={singleBook.genre}>{singleBook.genre}</option>
				</select>
			</div>

			<div>
				<label for="author" class="label">Year</label>
				<input
					type="number"
					id="title"
					class="input input-bordered w-full max-w-3xl"
					placeholder="Eg. 2018"
					bind:value={singleBook.year}
					required
				/>
			</div>
		</div>

		<div>
			<label for="content" class="label">Content</label>

			<textarea
				id="content"
				class="textarea textarea-bordered textarea-lg w-full"
				bind:value={singleBook.content}
				required
			/>
		</div>

		<button
			type="submit"
			class="btn w-full mt-5 bg-mainclr text-white hover:bg-subclr hover:text-mainclr"
			>Update Book</button
		>
	</form>
</main>
