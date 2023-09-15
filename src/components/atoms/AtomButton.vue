<template>
  <button class="button">{{ value }}</button>
</template>

<script>
export default {

    props:{
        value: String
    }

}
</script>

<style lang="sass" scoped>

.button
    cursor: pointer
    background-color: transparent
    border: none
    color: $text-200
    padding: 1vh 3vh 1vh 3vh
    font-size: 12pt
    border-radius: 5px
    transition: all 0.3s ease-in-out

.button:hover
    transform: scale(1.01)
    box-shadow: 1px 1px 2px $shadow

.button:active
    transform: scale(0.8)

</style>