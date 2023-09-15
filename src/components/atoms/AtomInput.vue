<template>
    <input class="input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
    props:{
        type: String,
        placeholder: String
    }
}
</script>

<style lang="sass" scoped>
    

.input
    border-radius: 3px
    box-shadow: 1px 1px 2px $shadow
    background-color: transparent
    border: none
    outline: none
    color: $text-200
    padding: 1.5vh
    width: 100% 
    min-width: 35vh
    @include mobile
      min-width: 30vh
      border-bottom: solid $shadow 1px
      border-right: solid $shadow 1px

</style>