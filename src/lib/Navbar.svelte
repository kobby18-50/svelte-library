<script>
    import { goto } from "$app/navigation";
    import LOGO from '../images/LOGO.svg'
</script>
<nav class="flex justify-between mx-10 mt-5">
    <a href="/">
        <img src={LOGO} alt="logo">
    </a>

    <button on:click={() => goto('/books/add')}  class="btn bg-mainclr capitalize text-white hover:bg-subclr hover:text-mainclr transition duration-500">+ Upload book</button>

    

</nav>