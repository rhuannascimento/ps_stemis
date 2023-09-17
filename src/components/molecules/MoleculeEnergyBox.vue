<template>
  <div>
    <AtomText :content="getReactorTemperature(0) * 10000 < 0 ? '0 KwH' : `${getReactorTemperature(0) * 10000} KwH`" />
  </div>
</template>

<script>
import AtomText from '../atoms/AtomText.vue';
import { mapGetters } from 'vuex';

export default {

    components:{
        AtomText
    },

    computed:{
        ...mapGetters(['getReactorTemperature'])
    }
}
</script>

<style lang="sass" scoped>

</style>