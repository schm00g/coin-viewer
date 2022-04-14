<template>
    <section id="coin-table">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <input v-model="query" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search for coins">
                <p class="text-gray-600 text-xs italic is-pulled-right">For example BTC, Doge...</p>
            </div>
        </div>
        <b-field grouped group-multiline>
            <b-button
                v-show="favoritedRows.length >= 1"
                label="Clear favorites"
                type="is-danger is-light"
                icon-left="close"
                class="field"
                @click="clearFavorites" />
        </b-field>  

        <b-tabs>
            <b-tab-item label="All Coins">
                <b-table
                    :data="filteredSearch"
                    :checked-rows.sync="favoritedRows"
                    :is-row-checkable="(row) => row.id !== 1 && row.id !== 2"
                    checkable
                    hoverable
                    :checkbox-position="checkboxPosition"
                    @check="modifyFavorites"
                    >

                    <b-table-column v-slot="props" field="name" label="Name" width="40" sortable  numeric>
                        <span>{{ props.row.name }}  <span class="ticker">{{ props.row.symbol }}</span></span>
                    </b-table-column>

                    <b-table-column v-slot="props" field="current_price" label="Current Price" width="40" sortable  numeric>
                        ${{ formatNumber(props.row.current_price) }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="price_change_percentage_24h" label="24h%" width="40" sortable  numeric>
                        {{ props.row.price_change_percentage_24h }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="market_cap" label="Market Cap" width="40" sortable  numeric>
                        ${{ formatNumber(props.row.market_cap) }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="total_volume" label="Volume(24h)" width="40" sortable  numeric>
                        ${{ formatNumber(props.row.total_volume) }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="circulating_supply" label="Circulating Supply" width="40" sortable  numeric>
                        {{ formatNumber(props.row.circulating_supply) }}<span class="ticker"> {{ props.row.symbol }} </span></span>
                    </b-table-column>

                    <template #bottom-left>
                        <p v-if="filteredSearch.length === 0" class="empty">No matching items found 🔎</p>
                    </template>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Favorites">
                <template #header>
                    <span> Favorites <b-tag rounded> {{ favoritedRows.length }} </b-tag> </span>
                </template>
                <pre>{{ favoritedRows }}</pre>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
import { mapActions } from 'vuex'; 
import { GET_COIN_DATA, UPDATE_FAVORITES } from '../store/actions.types';

export default {
    name: "CoinDataTable",
    data() {
        return {
            query: "",
            checkboxPosition: 'left',
            favoritedRows: JSON.parse(localStorage.getItem('favorites')) 
                ? JSON.parse(localStorage.getItem('favorites'))
                : []
        }
    },
    computed: {
        coins(){
            return this.$store.state.coins || JSON.parse(localStorage.getItem('coins'));
        },
        filteredSearch(){
            return this.coins.filter(coin => coin.name.toLowerCase().includes(this.query.toLowerCase()) || coin.symbol.toLowerCase().includes(this.query.toLowerCase()))
        }
    },
    created(){
        this.getCoinData();
    },
    methods: {
        ...mapActions({
            getCoinData: GET_COIN_DATA,
            updateFavorites: UPDATE_FAVORITES,
        }),
        clearFavorites(){
            this.favoritedRows = [];
            this.updateFavorites(this.favoritedRows);
            localStorage.removeItem('favorites');
        },
        modifyFavorites(value){
            this.favoritedRows = value;
            this.updateFavorites(value);
        },
        formatNumber(number){
            return number.toLocaleString('en-US');
        }
    }
}
</script>

<style scoped>
#coin-table {
    padding: 3%;
}
.ticker {
    text-transform: uppercase;
    color: rgb(207, 207, 207);
}
</style>
