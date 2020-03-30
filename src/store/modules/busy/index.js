const state = {
    busy: 0
};

const getters = {
    busy: (state) => state.busy
};

const actions = {
  
};

const mutations = {
    
    increaseBusy: (state) => {
        state.busy++
        console.log(state,'+')

    },
    decreaseBusy: (state) => {
        state.busy--
        console.log(state,'-')

    }
}


export default {
    state,
    getters,
    mutations,
    actions
}