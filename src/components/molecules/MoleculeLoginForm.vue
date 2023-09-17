<template>
  <div class="form-body">

    <AtomLogo />

    <div class="input-box">
      <AtomText class="text" content="Usuário e senha = admin" color="dark"/>
      <AtomInput placeholder="Usuário" type="text" />
      <AtomInput placeholder="Senha" type="password"/>
      <span class="login-alert"></span>
    </div>

    <AtomButton value="Entrar ->" @click="tryLogin()"/>

  </div>
</template>

<script>
import AtomInput from '../atoms/AtomInput.vue';
import AtomLogo from '../atoms/AtomLogo.vue';
import AtomButton from '../atoms/AtomButton.vue';
import AtomText from '../atoms/AtomText.vue';

import { mapMutations } from 'vuex';

export default {
    components:{
        AtomInput,
        AtomLogo,
        AtomButton,
        AtomText
    },

    methods:{
      ...mapMutations(['setLogin']),
      tryLogin(){
        let user = document.querySelectorAll(".input")[0].value
        let pass = document.querySelectorAll(".input")[1].value
        if(user == "admin" && pass == "admin"){
            this.setLogin()
        }else{
          document.querySelectorAll(".input")[0].value = ""
          document.querySelectorAll(".input")[1].value = ""
          document.querySelector(".login-alert").innerText = "O usuário e/ou a senha estão incorretos"
        }
      }
    }
}
</script>

<style lang="sass" scoped>
.form-body
    padding: 6vh
    height: fit-content
    width: fit-content
    background-color: $bg-100
    border-radius: 2px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    row-gap: 4vh

    @include mobile
      width: 60%

.input-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    row-gap: 1.5vh

.login-alert
    color: $danger   
    font-size: 12pt
    font-family: GrandiFlora
    font-weight: 600

.text
    font-weight: 600

</style>