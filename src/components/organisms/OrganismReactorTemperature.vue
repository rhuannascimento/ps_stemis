<template>
  <div class="reactor-body">
    <AtomText content="Reator 1" class="title" />
    
    <div class="info-box">
      
      <div class="temperature-box">
        <AtomText content="Temperatura em Celsius:" class="subtitle" />
        <MoleculeThermometer />
      </div>

      <div class="alert-box">
        <AtomText content="Painel de alertas:" class="subtitle" />
        <MoleculeAlertBoxVue />
      </div>

    </div>
  
  </div>
</template>

<script>
import MoleculeThermometer from '../molecules/MoleculeThermometer.vue';
import AtomText from '../atoms/AtomText.vue';
import MoleculeAlertBoxVue from '../molecules/MoleculeAlertBox.vue';

export default {
  components:{
    MoleculeThermometer,
    AtomText,
    MoleculeAlertBoxVue
  }
}
</script>

<style lang="sass" scoped>
.reactor-body
    background-color: $bg-300
    padding: 2vh
    width: fit-content 
    display: flex
    flex-direction: column
    align-items: center
    row-gap: 1vh 
    border-radius: 2px

.title
    font-weight: 600
    font-size: 20pt

.subtitle
    font-weight: 600

.info-box
    display: flex
    column-gap: 3vh

.temperature-box
    display: flex
    flex-direction: column
    align-items: center
    row-gap: 1vh
    background-color: $bg-200
    border-radius: 2px
    padding: 1vh  

.alert-box
    display: flex
    flex-direction: column
    border-radius: 2px
    background-color: $bg-200
    padding: 1vh  
    row-gap: 1vh

</style>