<template>
  <button :class="`button ${bg}`">{{ value }}</button>
</template>

<script>
export default {

    props:{
        value: String,
        bg: String
    },

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

.dark
    background-color: $bg-300 !important
    color: $text-100 !important

.danger
    background-color: $danger !important
    color: $text-100 !important

.safe
    background-color: $safe !important
    color: $text-100 !important

.attention
    background-color: $attention !important
    color: $text-100 !important

.light
    background-color: $bg-100 !important
    color: $text-200 !important

</style>