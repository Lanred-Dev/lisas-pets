<script lang="ts">
    export let color = "pink";
</script>

<span class="bg-gradient-to-t bg-clip-text text-transparent {color == 'pink' ? 'from-brand-500' : 'from-backgroundSecondary-500'} {color == 'pink' ? 'to-brand-600' : 'to-backgroundSecondary-700'} bg-[length:200%_200%]"><slot /></span>
