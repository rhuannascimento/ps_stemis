<template>
  <div class="home-body">
    <OrganismInstructions v-if="instructions" @close-instructions="instructions=false" />
    <MoleculeHeader @show-instructions="instructions=true"/>
    <div class="home-box">
      <OrganismDashboard/>
    </div>
  </div>
</template>

<script>
import MoleculeHeader from '@/components/molecules/MoleculeHeader.vue';
import OrganismDashboard from '@/components/organisms/OrganismDashboard.vue';
import OrganismInstructions from '@/components/organisms/OrganismInstructions.vue';

export default {
  components:{
    MoleculeHeader,
    OrganismDashboard,
    OrganismInstructions
  },

  data(){
    return{
      instructions: true
    }
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