import axios from 'axios'

const state = {
    users: {}
}
const getters = {
    userlist : (state) => state.users 
}

const actions = {
    async fetchUserList( { commit }) {
        const { data } = await axios.get('https://reqres.in/api/users?page=1');

        commit('setUserList', data)
    },
}

const mutations = {
    setUserList : (state, fetchUsers) => (state.users = fetchUsers)
}


export default {
    state,
    getters,
    mutations,
    actions
}