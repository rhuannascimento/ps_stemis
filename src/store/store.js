import { createStore } from "vuex";
import router from "@/routes/router";

const store = createStore({
    state:{
        logged: false,
    },
    getters:{

    },
    mutations:{
        setLogin(state){
            state.logged = true
            router.push('/home')
        }
    },
})

export default store;