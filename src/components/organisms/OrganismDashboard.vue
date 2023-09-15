<template>
  <div class="dash-body">
    <OrganismReactorTemperature />
  </div>
</template>

<script>
import OrganismReactorTemperature from './OrganismReactorTemperature.vue';

export default {
  components:{
    OrganismReactorTemperature
  }
}
</script>

<style lang="sass" scoped>

.dash-body
    height: 500vh
    

</style>