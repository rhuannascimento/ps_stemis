<template>
  <span class="text">{{ content }}</span>
</template>

<script>
export default {

    props:{
        color: String,
        content: String
    },

    mounted(){
        this.colorSelector()
    },
    
    methods:{
        colorSelector(){
            switch (this.color){
                case "dark":
                    document.querySelector(".button").classList.add("dark")
                    break
                case "danger":
                    document.querySelector(".button").classList.add("danger")
                    break
                case "safe":
                    document.querySelector(".button").classList.add("safe")
                    break
                case "attention":
                    document.querySelector(".button").classList.add("attention")
                    break

            }
        }
    }

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
