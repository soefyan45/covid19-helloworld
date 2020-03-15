import $axios from '../api.js'

const state = () => ({
    dataKawalTerkomfirm     : '',
    dataKawalDirawat        : '',
    dataKawalSembuh         : '',
    dataKawalMeninggal      : '',
    dataKawallastUpdatedAt  : '',
})

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.dataKawalTerkomfirm   = payload.confirmed.value
        state.dataKawalSembuh       = payload.recovered.value
        state.dataKawalMeninggal    = payload.deaths.value
        state.dataKawalDirawat      = payload.activeCare.value
        state.dataKawallastUpdatedAt= payload.metadata.lastUpdatedAt
    },
}

const actions = {
    getDataKawal({ commit, state }, payload) {
        let search = typeof payload != 'undefined' ? payload:''
        return new Promise((resolve, reject) => {
            $axios.get('/kawal/covid')
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
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}