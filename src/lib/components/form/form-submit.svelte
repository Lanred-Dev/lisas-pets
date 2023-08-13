<script lang="ts">
    import { twMerge } from "tailwind-merge";

    export let classes: string = "";
</script>

<button class={twMerge("rounded-normal border border-border bg-backgroundSecondary px-3 py-1", classes)} type="submit">
    <slot />
</button>
