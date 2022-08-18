import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://daybook-vue-2-default-rtdb.firebaseio.com'

})

export default journalApi