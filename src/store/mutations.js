
import {HOMESHOW, HOMEHIDE,SHOWLOADING,HIDELOADING} from './types'
import getters from './getters'
const state={
    homeShow:true,
    loading:false
}

const mutations={
    [HOMESHOW](state){
        state.homeShow=true;
    },
    [HOMEHIDE](state){
        state.homeShow=false;
    },
    [SHOWLOADING](state){
        state.loading=true;
    },
    [HIDELOADING](state){
        state.loading=false;
    }
}

export default{
    state,
    mutations,
    getters
}