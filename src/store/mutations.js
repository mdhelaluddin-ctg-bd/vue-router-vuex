export default {
    LOAD_USERS : (state, users) => {
        state['users'] = users
        state.isLoaded = true
    }
} 