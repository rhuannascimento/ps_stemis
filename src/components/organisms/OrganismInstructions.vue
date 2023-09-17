<template>
  <div class="instruction-body">
    <div class="box">
        <div class="title-box">
            <AtomText class="title" content="Bem vindo ao simulador!"/>
            <AtomText class="internal-text" content="O propósito desta página é simular um painel de controle de uma usina nuclear. É importante ressaltar que o desenvolvedor não possui um conhecimento aprofundado nesta área, o que significa que as medidas e relações presentes na simulação podem não ser precisas. Portanto, recomenda-se não utilizar esta página como fonte confiável para fins de estudo ou referência."/>
        </div>
        <div class="title-box">
            <AtomText class="title" content="Intruções"/>
            <div class="subtitle-box">
                <AtomText class="subtitle" content="Simulações"/>
                <AtomText class="internal-text" content="O simulador está equipado com dois botões localizados na parte superior, destinados a simular situações de emergência. Esses eventos podem ser controlados por meio dos comandos disponíveis:" />
                <AtomText class="internal-text pad-right" content='- "Gerar aumento de temperatura": Este comando incrementa gradualmente a temperatura do reator. Após a temperatura ultrapassar 300°C, um alarme de alerta é ativado. Ao atingir 600°C, o reator entra em combustão, desencadeando o alarme de incêndio. Quando o alarme de incêndio é acionado, a taxa de aumento da temperatura se torna mais rápida. Caso a temperatura atinja 700°C, os níveis de radiação começam a aumentar.'/>
                <AtomText class="internal-text pad-right" content='- "Gerar aumento de radiação": Este comando incrementa gradualmente os níveis de radiação e a temperatura. Quando a radiação excede 20 mSv, um alarme é ativado como sinal de alerta. Se a radiação ultrapassar 40 mSv, é acionado um alerta de evacuação.'/>
            </div>
            <div class="subtitle-box">
                <AtomText class="subtitle" content="Controles"/>
                <AtomText class="internal-text" content="Em controles, você encontra as ações para conter os eventos simulados:" />
                <AtomText class="internal-text pad-right" content='- "Aumentar fluxo de água": Este comando inicia um processo gradual de resfriamento do reator. Quando a temperatura cai abaixo de 300°C, a situação é considerada controlada, e você tem a opção de desligar o fluxo de água, permitindo que o reator retorne à temperatura ideal.'/>
                <AtomText class="internal-text pad-right" content='- "Ativar corta fogo": Quando o reator entra em chamas e o resfriamento apenas com o fluxo de água não é suficiente, você deve acionar o sistema corta fogo para conter a situação.'/>
                <AtomText class="internal-text pad-right" content='- "Botão Liga/Desliga": Este botão controla o funcionamento do reator, sendo a única solução para interromper um vazamento de radiação.'/>
            </div>
        </div>
        
        
        <AtomButton class="button" value="Iniciar" bg="light" @click="this.$emit('close-instructions')"/>
       
    </div>
  </div>
</template>

<script>
import AtomText from '../atoms/AtomText.vue';
import AtomButton from '../atoms/AtomButton.vue';
export default {
    components:{
        AtomText,
        AtomButton
    },
}
</script>

<style lang="sass" scoped>
.instruction-body
    position: fixed 
    z-index: 1
    width: 100%
    height: 100%
    background-color: $bg-200
    overflow-y: scroll

.box
    row-gap: 4vh
    display: flex
    flex-direction: column
    margin: 5vh


.title-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: left
    overflow-wrap: break-word
    text-align: justify
    row-gap: 2vh

.title, .text, .subtitle
    font-weight: 600

.title
    font-size: 25pt     
    text-align: center

.subtitle
    font-size: 18pt     
    text-align: center
    row-gap: 1vh

.internal-text
    font-size: 15pt 
    margin-top: 1vh

.subtitle-box
    display: flex
    flex-direction: column

.pad-right
    margin-left: 3vh

.button
    width: 25vh
    align-self: center
    margin-top: 3vh

</style>