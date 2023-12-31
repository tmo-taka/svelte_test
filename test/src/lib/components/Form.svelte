<script lang="ts">
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

<fieldset>
    <label for="UserName">{label}</label>
    <input type="text" value="{value}" on:input="{updateValue}"/>
</fieldset>