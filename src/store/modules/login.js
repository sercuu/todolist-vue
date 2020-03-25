

const state = {

    layout: 'auth-layout'
}
const getters = {

    layout:(state) => state.layout
}

const actions = {
    checkLayout({ commit }) {
        const auth = localStorage.getItem('token');


        if (auth) {
             // Servis baglanim 200 donerse true & hata alirsa false yollanicak
 
            commit('setLayout', 'default-layout');          
        } else {

            commit('setLayout', 'auth-layout');
        }

    },
    login({ commit }, user) {

        localStorage.setItem('token', JSON.stringify(user));
        // Servis baglanim 200 donerse true & hata alirsa false yollanicak

        commit('setLayout', 'default-layout');
    },
    logOut({ commit }) {

        localStorage.removeItem('token')

        commit('setLayout', 'auth-layout');

    }
}

const mutations = {
    setAuth: (state, status) => state.isAuth = status,
    setLayout: (state, layout) => state.layout = layout

}


export default {
    state,
    getters,
    mutations,
    actions
}