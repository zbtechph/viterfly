import actions from './actions'
import mutations from './mutations'

export default {
    state: () => ({
        user: null
    }),
    actions,
    mutations,
    namespaced: true
}