const state = {
    todolist: []
}
const getters = {
    todolist: (state) => state.todolist
}

const actions = {
    getLocalStroge({ commit }) {
        const todo = JSON.parse(localStorage.getItem('todolist'))
        commit('setTodoList', todo)
    },
    handleAddTodo({ commit }, todo) {
        const todolist = JSON.parse(localStorage.getItem('todolist'));
        if (todolist) {
            const newTodoList = [todo, ...todolist];
            localStorage.setItem('todolist', JSON.stringify(newTodoList));
            commit('setTodoList', newTodoList)
        } else {
            const newTodo = [todo]
            localStorage.setItem('todolist', JSON.stringify(newTodo));   
            commit('setTodoList', newTodo)            
        }   
    },
    deleteTodoById({ commit}, id) {
        const todolist = JSON.parse(localStorage.getItem('todolist'))
        const newTodolist = todolist.filter(item => item.id != id)
        localStorage.setItem('todolist', JSON.stringify(newTodolist));   
        commit('setTodoList', newTodolist)            
    }
}

const mutations = {
    setTodoList: ( state, todo ) => ( state.todolist = todo )
}

export default {
    state,
    getters,
    mutations,
    actions
}