import { createStore } from "vuex";
import router from "@/routes/router";

const store = createStore({
    state:{
        logged: false,
        reactor: [
            {
                id: 1,
                temperature: 300,
                flame: true,
                stopWarming: false,
                outFire: false
            }
        ]
    },
    getters:{
        getReactorTemperature(state){
            return state.reactor
        }
    },
    mutations:{
        setLogin(state){
            state.logged = true
            router.push('/home')
        },
        setUpReactorTemperature(state, payload){

            let timeoutId = setTimeout(function() {
                state.reactor[payload].temperature += 50
                if(state.reactor[payload].temperature == 600){
                    state.reactor[payload].flame = true
                }

                if(state.reactor[payload].temperature == 700 ){
                    clearTimeout(timeoutId)
                }

            }, 10000)

           /* while(state.reactor[payload.reactor].temperature <= 700 && payload.amount > 0){
                state.reactor[payload.reactor].temperature += 100;
                payload.amount -= 1;
                
                if(state.reactor[payload.reactor].temperature == 600){
                    state.reactor[payload.reactor].flame = true;
                }

            }*/


        }
    },
})

export default store;