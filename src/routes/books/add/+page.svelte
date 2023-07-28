<script>
   export let data
   import axios from 'axios';

    const { categories } = data
    const formData = {
        title : '',
        author : '',
        category : '',
        year : 0,
        content : ''
    }

    const handleSubmit = async () => {
        if(formData.year === 0){
            alert('Year cannot be 0')
        }
        const data = {
            title : formData.title,
            author : formData.author,
            content : formData.content,
            year : formData.year,
            genre : formData.category
        }
        const response = await axios.post('http://localhost:4000/api/v1/books', data)
        .then((res) => {
            console.log(res)
            alert('Book added successfully')
        })
        .catch((err) => {
            console.log(err)
            alert('Book not added')
        })
    }
</script>

<main class="mx-10">
	<h1 class="font-bold text-2xl">Upload Book</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="my-5">
			<label for="title" class="label">Book title</label>
			<input type="text" id="title" class="input input-bordered  w-full max-w-8xl" placeholder="Book title"
            bind:value={formData.title} 
            required
            />
		</div>
		<div class="my-5">
			<label for="author" class="label">Author</label>
			<input type="text" id="title" class="input input-bordered w-full max-w-8xl" placeholder="Book Author"
            bind:value={formData.author}
            required />
		</div>


        <div class="my-5 grid grid-cols-2 gap-2">
            <div >
                <label for="category" class="label">Category</label>
               <select  id="category" class="select select-bordered w-full max-w-3xl" bind:value={formData.category}
               required>
                <option disabled selected>Select Category</option>
                {#each categories as category}
                    <option value={category}>{category}</option>
                {/each}
               </select>
            </div>

            <div>
                <label for="author" class="label">Year</label>
                <input type="number" id="title" class="input input-bordered  w-full max-w-3xl" placeholder="Eg. 2018" 
                bind:value={formData.year}
                required/>
            </div>
        </div>


        <div>
            <label for="content" class="label">Content</label>

            <textarea id="content" class="textarea textarea-bordered textarea-lg w-full " bind:value={formData.content}
            required
            />
        </div>

        <button type="submit" class="btn w-full mt-5 bg-mainclr text-white hover:bg-subclr hover:text-mainclr">Upload Book</button>
	</form>
</main>
