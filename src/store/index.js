import {createStore} from 'vuex'
import journal from '@/modules/daybook/store/bookDay'

const store = createStore({

modules: {
    journal
}

})

export default store