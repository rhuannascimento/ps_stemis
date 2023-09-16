<template>  
    <div>
        <audio ref="warmingAudio">
            <source src="../../assets/sound/temperature_alert.mp3" type="audio/mpeg">
        </audio>
        <audio ref="fireAudio">
            <source src="../../assets/sound/fire_alert.mp3" type="audio/mpeg">
        </audio>
        <font-awesome-icon :class="startWarmingAlert" icon="fa-triangle-exclamation"/>
        <font-awesome-icon :class="startFireAlert" icon="fa-fire-flame-curved"/>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

    computed:{
        ...mapGetters(['getReactorTemperature', 'getReactorFire']),

        startWarmingAlert(){
            let temperature = this.getReactorTemperature(0)
            let warmin_audio = this.$refs.warmingAudio;

            if(temperature > 300){
                warmin_audio.play()
                return 'temperature-danger-icon icon attention-pulse'
            }else{
                if (warmin_audio) {
                    warmin_audio.pause();
                    warmin_audio.currentTime = 0;
                }
                return 'temperature-danger-icon icon'
            }
        },


        startFireAlert(){
            let fire = false;
            fire = this.getReactorFire(0)
            let fire_audio = this.$refs.fireAudio;

            if(fire){
                fire_audio.play()
                return 'temperature-danger-icon icon danger-pulse'
            }else{
                if (fire_audio) {
                    fire_audio.pause();
                    fire_audio.currentTime = 0;
                }
                return 'temperature-danger-icon icon'
            }
        }

    }

}
</script>

<style lang="sass" scoped>

.icon
    font-size: 25pt

.temperature-danger-icon
    color: $text-200



.attention-pulse 
  animation: attention-pulse 1s infinite

.danger-pulse 
  animation: danger-pulse 1s infinite


</style>