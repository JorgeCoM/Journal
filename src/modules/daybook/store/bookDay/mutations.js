// export const myAction = (/*state*/) => {

// }

export const setEntries = (state, entries) => {

    state.entries = [...state.entries, ...entries]
    state.isLoading = false

}

export const updateEntries = (state, entries) => {

    const idx = state.entries.map(e => e.id).indexOf(entries.id)
    state.entries[idx] = entries

}

export const addEntries = (state, entries) => {

    state.entries = [entries, ...state.entries]

}

export const deleteEntry = (state, id) => {

    state.entries = state.entries.filter(e => e.id !== id)

}