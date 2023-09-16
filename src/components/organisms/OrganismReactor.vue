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

      <div class="box energy">
        <AtomText content="Energia:" class="subtitle" />
        <MoleculeEnergyBoxVue />
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
import MoleculeEnergyBoxVue from '../molecules/MoleculeEnergyBox.vue';

export default {
  components:{
    MoleculeThermometer,
    AtomText,
    MoleculeAlertBoxVue,
    MoleculeControlBox,
    MoleculeEnergyBoxVue
  }
}
</script>

<style lang="sass" scoped>
.reactor-body
    background-color: $bg-300
    padding: 2vh
    width: fit-content
    max-width: 98% 
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
    justify-content: center
    column-gap: 2vh
    max-width: fit-content
    flex-wrap: wrap
    row-gap: 2vh 
    max-width: 100% 

.box
    display: flex
    flex-direction: column
    align-items: center
    row-gap: 1vh
    background-color: $bg-200
    border-radius: 2px
    padding: 1vh  
    width: 45%
    @include mobile
      width: 40%

.energy
    width: 100%
.control
    width: 100%

</style>