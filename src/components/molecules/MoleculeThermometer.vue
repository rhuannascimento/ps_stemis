<template>
  <div class="thermometer-body">
    <div class="display">
      <div v-for="classe in updateThermometer" :key="classe" :class="classe">

      </div>
    </div>
    <div class="temperature">
      <ul class="temperature-list">
        <li>700°C</li>
        <li>600°C</li>
        <li>500°C</li>
        <li>400°C</li>
        <li>300°C</li>
        <li>200°C</li>
        <li>100°C</li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapGetters} from 'vuex';

export default {


  computed:{
    ...mapGetters(['getReactorTemperature']),

    updateThermometer(){

        let temperature = this.getReactorTemperature(0);
      
        if(temperature <= 0){
          return []
        }else if(temperature <= 100){
          return ['green-box']
        }else if(temperature <= 200){
          return ['green-box', 'green-box']
        }else if (temperature <= 300){
          return ['green-box', 'green-box', 'green-box']
        }else if(temperature <= 400){
          return ['green-box', 'green-box', 'green-box', 'yellow-box']
        }else if(temperature <= 500){
          return ['green-box', 'green-box', 'green-box', 'yellow-box', 'yellow-box']
        }else if(temperature <= 600){
          return ['green-box', 'green-box', 'green-box', 'yellow-box', 'yellow-box', 'red-box']
        }else if(temperature <= 700){
          return ['green-box', 'green-box', 'green-box', 'yellow-box', 'yellow-box', 'red-box', 'red-box']
        }else{
          return ['green-box', 'green-box', 'green-box', 'yellow-box', 'yellow-box', 'red-box', 'red-box', 'red-box']
        }

    }
  }

};
</script>

<style lang="sass" scoped>
li
    color: $text-100
.thermometer-body
    display: flex
    align-items: center
    width: fit-content
    height: 20vh

.temperature-list
    list-style-type: '- '
    margin-left: -3vh

.display
    border: $bg-100 solid 2px
    height: 100%
    width: 3vh
    display: flex
    flex-direction: column-reverse

.green-box
    width: 100%
    height: 2.5vh
    background-color: $safe

.yellow-box
    width: 100%
    height: 2.5vh
    background-color: $attention

.red-box
    width: 100%
    height: 2.5vh
    background-color: $danger
</style>
