<template>
  <div class="dash-body">
    <OrganismReactor />
  </div>
</template>

<script>
import OrganismReactor from './OrganismReactor.vue';

export default {
  components:{
    OrganismReactor
  }
}
</script>

<style lang="sass" scoped>

.dash-body
    display: flex
    justify-content: center
    

</style>