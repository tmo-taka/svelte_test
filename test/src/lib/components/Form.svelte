<script lang="ts">
  import Textfield from '@smui/textfield'
  import Icon from '@smui/textfield/icon'
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()
  export let label = 'ラベル名'
  export let value = ''
  export let ico: 'person' | 'key' | null
  export let name: string
  const updateValue = (event: Event) => {
    const {target} = event
    if (target instanceof HTMLInputElement) {
      value = target.value
      console.log(value)
      dispatch('updateValue', value)
    }
  }
</script>

<div>
  <Textfield bind:value bind:label input$name={name} on:input={updateValue}>
    <Icon class="material-icons" slot="leadingIcon">{ico}</Icon>
  </Textfield>
</div>
