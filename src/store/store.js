import { createStore } from "vuex";
import router from "@/routes/router";

const store = createStore({
    state:{
        logged: false,
        reactor: [
            {
                id: 1,
                temperature: 300,
                fire: false,
                stopWarming: false,
                outFire: false
            }
        ]
    },
    getters:{
        getReactorTemperature: (state) => (id) => {
            return state.reactor[id].temperature
        },
        getReactorFire: (state) => (id) => {
            return state.reactor[id].fire
        },
    },
    mutations:{
        setLogin(state){
            state.logged = true
            router.push('/home')
        },
        setUpReactorTemperature(state, payload){    
            state.reactor[payload].temperature += 50

            if(this.state.reactor[payload].fire){
                this.state.reactor[payload].temperature += 100
            }

        }
    },
    actions: {
        startWarmin({ commit }, payload) {
            let intervalId = setInterval(() => {
                commit('setUpReactorTemperature', payload);

                if(this.state.reactor[payload].temperature == 600){
                    this.state.reactor[payload].fire = true
                }

                if(this.state.reactor[payload].temperature == 750){
                    clearInterval(intervalId)
                }

            }, 2000); 
        },
    },
})

export default store;