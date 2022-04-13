import axios from "axios";

import { GET_COIN_DATA, GET_FAVORITES } from "./actions.types";

import { SET_COINS, SET_FAVORITES } from "./mutations.types";

const state = () => ({
    favorites: [],
    coins: []
})

const getters = {

}

const actions = {
    async [GET_COIN_DATA]({commit}, _){
        try {
            const COINGECKO_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
            const { data } = await axios.get(COINGECKO_URL);
            commit(SET_COINS, data);
            return data;
        } catch ({message}) {
            throw new Error(message);
        }
    },
    [GET_FAVORITES]({commit}, payload){
        commit(SET_FAVORITES, payload);
    }
}

const mutations = {
    [SET_COINS](state, payload){
        state.coins = payload;
    },
    [SET_FAVORITES](state, payload){
        state.favorites = payload;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};  