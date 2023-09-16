<template>
  <span :class="`text ${color}`">{{ content }}</span>
</template>

<script>
export default {

    props:{
        color: String,
        content: String
    },

};
</script>

<style lang="sass" scoped>

.text
    font-family: GrandiFlora
    color: $text-100

.dark
    color: $text-200 !important

.danger
    color: $danger !important

.safe
    color: $safe !important

.attention
    color: $attention !important
</style>
