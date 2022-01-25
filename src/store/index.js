import { def } from "@vue/shared";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state:{
        data: '',
        step: 2,

    },
    getters:{

    },
    mutations:{
        increment (state) {
            state.step++
        },
        subtracked (state) {
            state.step--
        },
    },
    actions:{
        
    },
});

export default store;