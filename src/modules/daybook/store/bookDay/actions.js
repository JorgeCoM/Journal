// export const myAction = async (/*{ commit }*/) => {


// }
import journalApi from "@/api/journalApi"

export const loadEntries = async ({commit}) => {

    const {data} = await journalApi.get('/entries.json')
    if(!data) {
        commit('setEntries', [])
    }

   
    const entries = []
    for (let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }  
commit('setEntries', entries)
}

export const updateEntries = async ({ commit }, entries) => {
    
const { date, picture, text } = entries
const dataToSave = {date, picture, text}
const reps = await journalApi.put(`/entries/${entries.id}.json`, dataToSave)
console.log(reps)
commit('updateEntries', {...entries})
}

export const createEntries = async ({ commit }, entries) => {

const { date, picture, text } = entries
const dataToSave = {date, picture, text}

const { data }= await journalApi.post(`/entries.json`, dataToSave)

dataToSave.id = data.name

commit('addEntries', dataToSave)

return data.name
}

export const deleteEntry = async ({ commit }, id) => {

    await journalApi.delete(`/entries/${id}.json`)

commit('deleteEntry', id)

return id
}
