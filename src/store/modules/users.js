import axios from 'axios'

const state = {
    userlist: {}
}
const getters = {
    alluserlist : (state) => state.userlist 
}

const actions = {
    async fetchUserList( { commit }) {
        const { data } = await axios.get('https://reqres.in/api/users?page=1');
        console.log(data, 'data')
        commit('setUserList', data)
    },
}

const mutations = {
    setUserList : (state, fetchUsers) => (state.userlist = fetchUsers)
}


export default {
    state,
    getters,
    mutations,
    actions
}