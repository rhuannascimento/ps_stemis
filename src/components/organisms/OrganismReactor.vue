<template>
  <div class="reactor-body">
    <AtomText content="Reator 1" class="title" />
    
    <div class="info-box">
      
      <div class="box temperature">
        <AtomText content="Temperatura em Celsius:" class="subtitle" />
        <MoleculeThermometer />
      </div>

      <div class="box alert">
        <AtomText content="Painel de alertas:" class="subtitle" />
        <MoleculeAlertBoxVue />
      </div>

      <div class="box control">
        <AtomText content="Controles:" class="subtitle" />
        <MoleculeControlBox />
      </div>

    </div>
  
  </div>
</template>

<script>
import MoleculeThermometer from '../molecules/MoleculeThermometer.vue';
import AtomText from '../atoms/AtomText.vue';
import MoleculeAlertBoxVue from '../molecules/MoleculeAlertBox.vue';
import MoleculeControlBox from '../molecules/MoleculeControlBox.vue';

export default {
  components:{
    MoleculeThermometer,
    AtomText,
    MoleculeAlertBoxVue,
    MoleculeControlBox
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
    max-width: 49vh
    flex-wrap: wrap
    row-gap: 2vh 

.box
    display: flex
    flex-direction: column
    align-items: center
    row-gap: 1vh
    background-color: $bg-200
    border-radius: 2px
    padding: 1vh  
    min-width: fit-content

.control
    min-width: 47vh

</style>