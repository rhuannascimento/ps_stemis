<template>
  <div class="home-body">
    <MoleculeHeader/>
    <div class="home-box">
      <OrganismDashboard/>
    </div>
  </div>
</template>

<script>
import MoleculeHeader from '@/components/molecules/MoleculeHeader.vue';
import OrganismDashboard from '@/components/organisms/OrganismDashboard.vue';

export default {
  components:{
    MoleculeHeader,
    OrganismDashboard
  }
}
</script>

<style lang="sass" scoped>

.home-body
    background-color: $bg-100
    width: 100%
    height: 100vh
    @include mobile
      height: fit-content
    
.home-box
  padding: 5vh
</style>