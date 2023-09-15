<template>
  <div class="header-body">
    <AtomText class="text" content="Opções de simulação:"/>
    <div class="button-box">
        <AtomButton bg="attention" value="Gerar aumento de temperatura"/>
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
    }
}
</script>

<style lang="sass" scoped>
.header-body
    max-width: 100%
    height: 10vh
    background-color: $bg-300
    display: flex
    flex-direction: column
    justify-content: center
    row-gap: 1vh
    padding: 2vh
    position: sticky
    top: 0

.text
    font-weight: 600

.button-box
    display: flex
    max-width: 50%

</style>