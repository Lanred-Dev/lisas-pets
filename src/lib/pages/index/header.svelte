<script lang="ts">
    import Highlight from "$lib/components/label/highlight.svelte";
    import HeaderLandscape from "./headerLandscape.svelte";
</script>

<header class="relative flex h-screen w-screen items-center justify-between pl-[15vw]">
    <div class="z-[1] flex flex-col items-start gap-4 text-left">
        <h1 class="text-5xl font-black md:text-6xl"><Highlight color="purple">Lisa's Pets</Highlight> <br /> <Highlight color="pink">Toy Breed Puppies</Highlight></h1>

        <div class="mt-6 flex gap-5 text-lg text-secondary children:rounded-normal children:border-[2px] children:border-border children:bg-backgroundSecondary children:px-3 children:py-1">
            <a href="/">About Us</a>
            <a href="/">Contact</a>
            <a href="/">See Puppies</a>
        </div>
    </div>

    <div class="relative h-full w-[50%]">
        <img class="absolute bottom-0 left-1/2 w-[80%] -translate-x-1/2" src="/people.png" alt="lisa and melissa" />
    </div>

    <HeaderLandscape />
</header>
