<script lang="ts">
    import Textfield from '@smui/textfield';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let label = 'ラベル名'
    export let value = ''
    const updateValue = (event: Event) => {
        const { target } = event
        if(target instanceof HTMLInputElement) {
            value = target.value;
            console.log(value);
            dispatch('updateValue',value);
        }
    }
</script>

<div>
    <Textfield bind:value={value} bind:label={label} on:input="{updateValue}" />
</div>