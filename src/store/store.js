import { createStore } from "vuex";
import router from "@/routes/router";

const store = createStore({
    state:{
        logged: true,
        reactor: [
            {
                id: 1,
                temperature: 300,
                fire: false,
                stop_warming: false,
                water_flux: false
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
        getWaterFlux: (state) => (id) => {
            return state.reactor[id].water_flux
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

        },

        setDownReactorTemperature(state, payload){    
            state.reactor[payload].temperature -= 100
        },

        setWaterFlux(state, payload){
            state.reactor[payload.reactor].water_flux = payload.value
        },

        setOperationalTemperature(state, payload){
            
            state.reactor[payload].temperature += 1
            
        }

    },
    actions: {
        startWarmin({ commit }, payload) {
            let intervalId = setInterval(() => {
                commit('setUpReactorTemperature', payload);

                if(this.state.reactor[payload].temperature == 600){
                    this.state.reactor[payload].fire = true
                }

                if(this.state.reactor[payload].temperature == 750 || this.state.reactor[payload].stop_warming){
                    clearInterval(intervalId)
                }

            }, 2000); 
        },

        startCool({ commit }, payload) {
            let intervalId = setInterval(() => {
                commit('setDownReactorTemperature', payload);

                if(this.state.reactor[payload].temperature <= 300){
                    this.state.reactor[payload].stop_warming = true;
                }

                if(this.state.reactor[payload].water_flux == false){
                    clearInterval(intervalId)
                }

            }, 2000); 
        },

        stratNaturalWarming({ commit }, payload) {
            let intervalId = setInterval(() => {
                if(this.state.reactor[payload].water_flux == false && this.state.reactor[payload].temperature < 300){
                    commit('setOperationalTemperature', payload);
                }else{
                    clearInterval(intervalId)
                }

            }, 10); 
        },
    },
})

export default store;