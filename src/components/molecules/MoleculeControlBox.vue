<template>
  <div class="control-box">
    <div class="input-box">
        <AtomInput type="checkbox" @click="startWaterFlux($event)" />
        <AtomText content="Aumentar fluxo de água" class="text"/>
    </div>

    <div class="button-box">
        <AtomButton class="button" value="Ativar corta fogo" bg="attention" @click="this.setFireOut(0)" />
        <font-awesome-icon :class="getStatus" icon="fa-power-off" @click="powerOnOffReactor()"/>
    </div>

  </div>
</template>

<script>
import AtomInput from '../atoms/AtomInput.vue';
import AtomText from '../atoms/AtomText.vue';
import AtomButton from '../atoms/AtomButton.vue';


import { mapMutations, mapGetters } from 'vuex';

export default {
    components:{
        AtomInput,
        AtomText,
        AtomButton
    },

    computed:{
        ...mapGetters(['getPowerOnOff']),

        getStatus(){

            let condicao = this.getPowerOnOff(0)

            if(condicao){
                return "icon on"
            }else{
                return "icon off"
            }

        }
    },

    methods:{
        ...mapMutations(['setWaterFlux', 'setFireOut']),

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

        },

        powerOnOffReactor(){
            this.$store.dispatch('powerOnOffReactor', 0)
        }

    }

}
</script>

<style lang="sass" scoped>

.control-box
    display: flex
    align-items: center
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
    padding-right: 2vh
    border-radius: 3px

.icon
    font-size: 25pt
    cursor: pointer
    transition: transform 0.1s ease-in-out
    background-color: $attention
    width: fit-content
    padding: 1vh
    border-radius: 3px
    max-width: 20%
    @include mobile
        align-self: center

.icon:active
    transform: scale(0.70)

.on
    color: $safe

.off 
    color: $danger

.button-box
    display: flex
    column-gap: 1vh
    justify-content: center

.button
    @include mobile
        max-width: 58%

</style>