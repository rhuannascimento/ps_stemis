<template>
  <div class="header-body">
    <AtomButton class="instruction-button" bg="light" value="Intruções" @click="this.$emit('show-instructions')"/>
    <AtomText class="text" content="Opções de simulação:"/>
    <div class="button-box">
        <AtomButton bg="attention" value="Gerar aumento de temperatura" @click="upReactorTemperature()"/>
        <AtomButton bg="attention" value="Gerar aumento de radiação" @click="upReactorRadiation()"/>
    </div>
    
  </div>
</template>

<script>
import AtomButton from '../atoms/AtomButton.vue';
import AtomText from '../atoms/AtomText.vue';

export default {
    components:{
        AtomButton,
        AtomText
    },

    methods:{
    
        upReactorTemperature(){
            this.$store.dispatch('startWarmin', 0);  
        },
        upReactorRadiation(){
            this.$store.dispatch('startRadiation', 0); 
        }

    },
    

}
</script>

<style lang="sass" scoped>
.header-body
    max-width: 100%
    min-height: 10vh
    height: fit-content
    background-color: $bg-300
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    row-gap: 1vh
    padding: 2vh
    position: sticky
    top: 0

.text
    font-weight: 600

.button-box
    display: flex
    column-gap: 1vh



</style>