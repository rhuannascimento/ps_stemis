import { createStore } from "vuex";
import router from "@/routes/router";

const store = createStore({
    state:{
        logged: true,
        reactor: [
            {
                id: 1,
                on: false,
                temperature: 0,
                fire: false,
                stop_warming: false,
                water_flux: false,
                fire_break: false
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
        getPowerOnOff: (state) => (id) => {
            return state.reactor[id].on
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
            if(state.reactor[payload].temperature > 0){    
                state.reactor[payload].temperature -= 100
            }
        },

        setWaterFlux(state, payload){
            state.reactor[payload.reactor].water_flux = payload.value
        },

        setOperationalTemperature(state, payload){
            if(state.reactor[0].on){
                state.reactor[payload].temperature += 1  
            }   
            
        },

        setFireOut(state, payload){
            state.reactor[payload].fire_break = true
            state.reactor[payload].fire = false
        },

        setOnOffReactor(state, payload){
            state.reactor[payload].on = !state.reactor[payload].on
        }

    },
    actions: {
        startWarmin({ commit }, payload) {
            this.state.reactor[payload].stop_warming = false
            this.state.reactor[payload].fire_break = false
            let intervalId = setInterval(() => {
                commit('setUpReactorTemperature', payload)

                if(this.state.reactor[payload].temperature == 600 && !this.state.reactor[payload].fire_break){
                    this.state.reactor[payload].fire = true
                }

                if(this.state.reactor[payload].stop_warming){
                    clearInterval(intervalId)
                }

            }, 2000); 
        },

        startCool({ commit }, payload) {
            let intervalId = setInterval(() => {
                commit('setDownReactorTemperature', payload)

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
                    commit('setOperationalTemperature', payload)
                }else{
                    clearInterval(intervalId)
                }

            }, 10); 
        },

        powerOnOffReactor({ commit }, payload) {

            commit('setOnOffReactor', payload);

            if(this.state.reactor[0].on){

                let intervalId = setInterval(() => {
                    if(this.state.reactor[payload].water_flux == false && this.state.reactor[payload].temperature < 300){
                        commit('setOperationalTemperature', payload)
                    }else{
                        clearInterval(intervalId)
                    }

                }, 10); 

            }else{

                this.state.reactor[payload] = {
                    id: 1,
                    on: false,
                    temperature: 0,
                    fire: false,
                    stop_warming: false,
                    water_flux: false,
                    fire_break: false
                }

            }
        },

    },
})

export default store;