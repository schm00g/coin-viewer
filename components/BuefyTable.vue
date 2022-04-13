<template>
    <section id="coin-table">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <input v-model="query" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search for coins">
                <p class="text-gray-600 text-xs italic">For example BTC, Shiba...</p>
            </div>
        </div>
        <b-field grouped group-multiline>
            <b-button
                label="Clear favorites"
                type="is-danger"
                icon-left="close"
                class="field"
                @click="favoritedRows = []" />

        </b-field>

        <b-tabs>
            <b-tab-item label="All Coins">
                <b-table
                    :data="filteredSearch"
                    :checked-rows.sync="favoritedRows"
                    :is-row-checkable="(row) => row.id !== 3 && row.id !== 4"
                    checkable
                    hoverable
                    :checkbox-position="checkboxPosition">

                    <b-table-column v-slot="props" field="name" label="Name" width="40" sortable  numeric>
                        {{ props.row.name }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="current_price" label="Current Price" width="40" sortable  numeric>
                        {{ props.row.current_price }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="price_change_percentage_24h" label="24h%" width="40" sortable  numeric>
                        {{ props.row.price_change_percentage_24h }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="market_cap" label="Market Cap" width="40" sortable  numeric>
                        {{ props.row.market_cap }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="total_volume" label="Volume(24h)" width="40" sortable  numeric>
                        {{ props.row.total_volume }}
                    </b-table-column>

                    <b-table-column v-slot="props" field="circulating_supply" label="Circulating Supply" width="40" sortable  numeric>
                        {{ props.row.circulating_supply }}
                    </b-table-column>

                    <template #bottom-left>
                        <b>Favorites</b>: {{ favoritedRows.length }}
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
    import axios from 'axios';
    export default {
        data() {
            return {
                data: [],
                query: "",
                checkboxPosition: 'left',
                favoritedRows: []
            }
        },
        computed: {
            filteredSearch(){
                return this.data.filter(coin => coin.name.toLowerCase().includes(this.query.toLowerCase()) || coin.symbol.toLowerCase().includes(this.query.toLowerCase()))
            }
        },
        async created(){
            try {
                const COINGECKO_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
                await axios.get(COINGECKO_URL).then(response => {
                    this.data = response.data;
                });
            } catch (error) {
                console.error(error)
            }
        }
    }
</script>

<style scoped>
#coin-table {
    padding: 3%;
}
</style>
