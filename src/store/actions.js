import * as types from './types'
export default {
    homeShow:({commit})=>{
        commit(types.HOMESHOW)
    },
    homeHide:({commit})=>{
        commit(types.HOMEHIDE)
    },
    showLoading:({commit})=>{
        commit(types.SHOWLOADING)
    },
    hideLoading:({commit})=>{
        commit(types.HIDELOADING)
    }
}