<template>  
    <div class="icon-box">
        <audio ref="warmingAudio">
            <source src="../../assets/sound/temperature_alert.mp3" type="audio/mpeg">
        </audio>
        <audio ref="fireAudio">
            <source src="../../assets/sound/fire_alert.mp3" type="audio/mpeg">
        </audio>
        <audio ref="radiationAudio">
            <source src="../../assets/sound/radiation_alert.mp3" type="audio/mpeg">
        </audio>
        <font-awesome-icon :class="startWarmingAlert" icon="fa-triangle-exclamation"/>
        <font-awesome-icon :class="startFireAlert" icon="fa-fire-flame-curved"/>
        <font-awesome-icon :class="startWaterFlux" icon="fa-water"/>
        <font-awesome-icon :class="startRadiationAlert" icon="fa-radiation"/>
        <AtomText :class="startEvacuationAlert" content="Evacuação!" />
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
        ...mapGetters(['getReactorTemperature', 'getReactorFire', 'getWaterFlux', 'getRadiaction']),

        startWarmingAlert(){
            let temperature = this.getReactorTemperature(0)
            let warmin_audio = this.$refs.warmingAudio;

            if(temperature > 300){
                warmin_audio.play()
                return 'icon attention-pulse'
            }else{
                if (warmin_audio) {
                    warmin_audio.pause();
                    warmin_audio.currentTime = 0;
                }
                return 'icon'
            }
        },

        startFireAlert(){
            let fire = false;
            fire = this.getReactorFire(0)
            let fire_audio = this.$refs.fireAudio;

            if(fire){
                fire_audio.play()
                return 'icon danger-pulse'
            }else{
                if (fire_audio) {
                    fire_audio.pause();
                    fire_audio.currentTime = 0;
                }
                return 'icon'
            }
        },

        startWaterFlux(){
            let waterFlux = this.getWaterFlux(0)

            if(waterFlux){
                return "icon blue"
            }

            return "icon"

        },

        startRadiationAlert(){
            let radiation = this.getRadiaction(0)
            let radiation_audio = this.$refs.radiationAudio;

            if(radiation > 20){
                radiation_audio.play()
                return 'icon safe-pulse'
            }else{
                if (radiation_audio) {
                    radiation_audio.pause();
                    radiation_audio.currentTime = 0;
                }
                return 'icon'
            }
        },

        startEvacuationAlert(){
            let radiation = this.getRadiaction(0)

            if(radiation > 40){
                return 'text danger-pulse'
            }else{
                return 'text'
            }
        }

    }

}
</script>

<style lang="sass" scoped>

.icon-box
    display: flex
    justify-content: center
    flex-wrap: wrap
    column-gap: 1vh
    row-gap: 1vh
    max-width: 12vh
    
.text
    font-size: 15pt
    color: $text-200
    font-weight: 600

.icon
    font-size: 25pt
    color: $text-200
    
.attention-pulse 
  animation: attention-pulse 1s infinite

.danger-pulse 
  animation: danger-pulse 1s infinite

.safe-pulse 
  animation: safe-pulse 1s infinite

.blue
    color: $blue

</style>