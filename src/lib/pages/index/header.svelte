<script lang="ts">
    import Highlight from "$lib/components/label/highlight.svelte";
</script>

<header class="relative flex h-screen items-center justify-between px-[15vw] py-[15%]">
    <div class="z-[1] flex flex-col items-start gap-4 text-left">
        <h1 class="text-5xl font-black md:text-6xl"><Highlight color="purple">Lisa's Pets</Highlight> <br /> <Highlight color="pink">Toy Breed puppies</Highlight></h1>

        <div class="mt-6 flex gap-5 text-secondary text-lg children:rounded-normal children:border-[2px] children:border-border children:bg-backgroundSecondary children:px-3 children:py-1">
            <a href="/">About Us</a>
            <a href="/">Contact</a>
            <a href="/">See Puppies</a>
        </div>
    </div>

    <div>
        <img src="/people.png" alt="lisa and melissa" />
    </div>
</header>
