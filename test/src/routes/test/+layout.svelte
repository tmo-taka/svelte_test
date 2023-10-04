<script>
    export async function load({ parent }) {
        const { a } = await parent();
        console.log(a)
        return  { b: a + 1 }
    }
</script>

<main>
    <h2>so import</h2>
    <slot />
</main>