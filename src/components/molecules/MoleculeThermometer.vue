<template>
  <div class="thermometer-body">
    <div class="display">
      
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

import { mapGetters } from 'vuex';

export default {

  computed:{
    ...mapGetters(['getReactorTemperature'])
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
