<template>  
    <div>
        <audio ref="dangerAudio">
            <source src="../../assets/sound/temperature_alert.mp3" type="audio/mpeg">
        </audio>
        <font-awesome-icon :class="startWarmingAlert" icon="fa-triangle-exclamation"/>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

    computed:{
        ...mapGetters(['getReactorTemperature']),

        startWarmingAlert(){
            let temperature = this.getReactorTemperature(0)
            let audio = this.$refs.dangerAudio;

            if(temperature > 300){
                audio.play()
                return 'temperature-danger-icon icon pulse'
            }else{
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
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



.pulse 
  animation: pulse 1s infinite


</style>