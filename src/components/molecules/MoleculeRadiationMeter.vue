<template>
  <div class="radiation-body">
    <div class="display">
      <div
        v-for="classe in updateRadiation"
        :key="classe"
        :class="classe"
      ></div>
    </div>
    <div class="radiation">
      <ul class="radiation-list">
        <li>40msv</li>
        <li>30msv</li>
        <li>20msv</li>
        <li>10msv</li>
        <li>0mSv</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getRadiaction"]),

    updateRadiation() {
      let radiation = this.getRadiaction(0);

      if (radiation == 0) {
        return ["white-box"];
      } else if (radiation <= 10) {
        return ["white-box", "green-box"];
      } else if (radiation <= 20) {
        return ["white-box", "green-box", "yellow-box"];
      } else if (radiation <= 30) {
        return ["white-box", "green-box", "yellow-box", "red-box"];
      } else if(radiation <= 40){
        return ["white-box", "green-box", "yellow-box", "red-box", "red-box"];
      }else{
        return ["white-box", "green-box", "yellow-box", "red-box", "red-box", "red-box"];
      }
    },
  },
};
</script>

<style lang="sass" scoped>
li
  color: $text-100
  margin-top: 1vh

.radiation-body
    display: flex
    align-items: center
    width: fit-content
    height: 20vh

.radiation-list
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
    height: 3.5vh
    background-color: $safe

.yellow-box
    width: 100%
    height: 3vh
    background-color: $attention

.red-box
    width: 100%
    height: 3.5vh
    background-color: $danger

.white-box
    width: 100%
    height: 3.5vh
    background-color: $text-100
</style>
