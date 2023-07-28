<script lang="ts">
	import type { BOOK } from "../models/singleBook";

    export let book : BOOK
</script>

<div class="card w-96 bg-[#FCFCFC] shadow-md p-5">
    <small class="bg-subclr text-mainclr rounded-md w-fit p-1 font-bold capitalize mb-5"
        >{book.genre}</small
    >

    <h1 class="font-bold text-lg">{book.title}</h1>
    <small>{book.content.slice(0, book.content.length - 500)}....</small>

    <div class="card-actions justify-start">
        <a href={`/books/${book._id}`}>
            <button
                class="btn capitalize text-white bg-mainclr btn-xs mt-5 hover:bg-subclr hover:text-mainclr transition duration-500"
                >Read Book</button
            >
        </a>
    </div>
</div>