<template>
  <div class="control-box">
    <div class="input-box">
        <AtomInput type="checkbox" @click="startWaterFlux($event)" />
        <AtomText content="Aumentar fluxo de água" class="text"/>
    </div>
    <div class="input-box">
        <AtomInput type="checkbox" @click="startWaterFlux($event)" />
        <AtomText content="Ativar corta fogo" class="text"/>
    </div>
  </div>
</template>

<script>
import AtomInput from '../atoms/AtomInput.vue';
import AtomText from '../atoms/AtomText.vue';

import { mapMutations } from 'vuex';

export default {
    components:{
        AtomInput,
        AtomText
    },

    methods:{
        ...mapMutations(['setWaterFlux']),

        startWaterFlux(e){

            let payload = {
                reactor: 0,
                value: e.target.checked 
            }

            this.setWaterFlux(payload)

            if(payload.value){
                this.$store.dispatch('startCool', 0)
            }else{
                this.$store.dispatch('stratNaturalWarming', 0)
            }

        }

    }

}
</script>

<style lang="sass" scoped>

.control-box
    display: flex
    justify-content: center
    flex-direction: column
    row-gap: 2vh

.input
    min-width: fit-content
    box-shadow: none
    width: 3vh
    height: 3vh

.text
    font-weight: 600
    line-height: 1vh
.input-box
    display: flex
    justify-content: flex-start
    align-items: center
    column-gap: 0.5vh
    background-color: $attention
    padding-right: 0.5vh
    border-radius: 3px


</style>