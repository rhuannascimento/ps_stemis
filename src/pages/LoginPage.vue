<template>
  <div class="login-page">
    <MoleculeLoginFormVue />
  </div>
</template>

<script>
import MoleculeLoginFormVue from '@/components/molecules/MoleculeLoginForm.vue'

export default {
  components:{
    MoleculeLoginFormVue
  }
}
</script>

<style lang="sass" scoped>

.login-page
    height: 100vh
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    background-color: $bg-300

</style>