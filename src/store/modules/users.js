import axios from 'axios'

const state = {
    users: {}
}
const getters = {
    userlist : (state) => state.users 
}

const actions = {
    async fetchUserList({ commit }) {
        commit('setUserList_STARTED');
        
        await axios.get('https://reqres.in/api/users?page=1').then(resp => {
            commit('setUserList_COMPLETED', resp.data)

        }).catch(err => {
            console.error(err)
            commit('setUserList_FAILED', err)

        })

    },
}

const mutations = {
    setUserList_STARTED : (state) => (state.users = []),
    setUserList_COMPLETED : (state, fetchUsers) => (state.users = fetchUsers),
    setUserList_FAILED : (state, fetchUsersError) => (state.users = fetchUsersError)
}


export default {
    state,
    getters,
    mutations,
    actions
}