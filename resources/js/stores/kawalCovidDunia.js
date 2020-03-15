import $axios from '../api.js'

const state = () => ({
    dataKawalWorld                : '',
    dataKawalWorldCountConfirm    : '',
    dataKawalWorldCountRecovered  : '',
    dataKawalWorldCountDeaths     : '',
    dataKawalWorldCountlastUpdate : '',
})

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.dataKawalWorld   = payload
    },
    ASSIGN_COUNT(state, payload) {
        state.dataKawalWorldCountConfirm   = payload.confirmed.value
        state.dataKawalWorldCountRecovered = payload.recovered.value
        state.dataKawalWorldCountDeaths    = payload.deaths.value
        state.dataKawalWorldCountlastUpdate    = payload.lastUpdate
    },
}

const actions = {
    getDataKawalDunia({ commit, state }, payload) {
        let search = typeof payload != 'undefined' ? payload:''
        return new Promise((resolve, reject) => {
            $axios.get('/kawal/covid/world')
                .then((response) => {
                    commit('ASSIGN_DATA', response.data)
                    resolve(response.data)
                })
                .catch((error) => {
                    if (error.response.status == 422 ||error.response.status == 404) {
                        //commit('SET_ERRORS', error.response.data.errors, { root: true })
                        alert('Tidak Mendapatkan Response')
                    }
                })
        })
    },
    getDataKawalDuniaCount({ commit, state }, payload) {
        let search = typeof payload != 'undefined' ? payload:''
        return new Promise((resolve, reject) => {
            $axios.get('/kawal/covid/world/count')
                .then((response) => {
                    commit('ASSIGN_COUNT', response.data)
                    resolve(response.data)
                })
                .catch((error) => {
                    if (error.response.status == 422 ||error.response.status == 404) {
                        //commit('SET_ERRORS', error.response.data.errors, { root: true })
                        alert('Tidak Mendapatkan Response')
                    }
                })
        })
    },
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}