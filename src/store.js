import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [
            {id: 1, name: 'Wesley', registered: false},
            {id: 2, name: 'John', registered: false}
        ]
    }
});