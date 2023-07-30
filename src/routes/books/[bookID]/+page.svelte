<script>
	import { goto } from '$app/navigation';
	import axios from 'axios';
   export let data
   const book = data.book.data
   import DEL from '../../../images/DEL.svg'
   import EDIT from '../../../images/EDIT.svg'

   const handleUpdate = async () => {
    goto(`/books/edit/${book._id}`)
   }

   const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/api/v1/books/${book._id}`)
    .then((res) => {
        console.log(res)
        goto('/')
    })
    .catch((err) => {
        console.log(err)
    })
   }
</script>

<!-- book -->

<main class="mx-10">
    <main class="flex justify-between mt-10">
        <a href="/" class="text-mainclr font-bold hover:underline">Back</a>
    
        <span class="space-x-5">
            <button  on:click={handleUpdate} class="btn btn-outline btn-success">
                <img src={EDIT} alt="edit">
                Edit</button>
        <button on:click={handleDelete} class="btn btn-outline btn-error">
            <img src={DEL} alt="del">
            Delete</button>
        </span>
    </main>
    
    <main class="mt-10">
    
    
        <h1 class="font-extrabold text-2xl mb-3">{book.title}</h1>
    
        <span class="space-x-10">
            
        <small><span class="text-[#A9B0BB]">By:</span> {book.author} </small>
    
        <small><span class="text-[#A9B0BB]">Year:</span> {book.year} </small>
        </span>
    
        <p class="mt-10">{book.content}</p>
        
    </main>
</main>


