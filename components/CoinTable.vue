<template>
    <div class="root">
        {{ favourites }}
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <input v-model="query" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search for coins">
                <p class="text-gray-600 text-xs italic">For example BTC, Shiba...</p>
            </div>
        </div>
        <div class="tabs">
            <button @click="tabChange('all')">All</button><button @click="tabChange('favourites')">Favourites ({{favourites.length}})</button> 
        </div>
        <ul>
            <li v-for="coin in filteredSearch" :key="coin.id" @click="toggleFavourite(coin)">
                <b>{{ coin.name }}</b> <span class="uppercase">{{ coin.symbol }}</span> {{ coin.current_price }} <span v-if="favourites.includes(coin.symbol)">⭐</span>
            </li>
        </ul>
        <p v-if="filteredSearch.length === 0" class="empty">No items found 🔎</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "CoinTable",
    components: {},
    data() {
        return {
            coins: [],
            query: "",
            favourites: []
        };
    },
    computed: {
        filteredSearch(){
            // filter search in name and id
            return this.coins.filter(coin => coin.name.toLowerCase().includes(this.query.toLowerCase()) || coin.symbol.toLowerCase().includes(this.query.toLowerCase()))
        }
    },
    async mounted(){
        try {
            // TODO: poll data on regular
            const COINGECKO_API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
            this.coins = await axios.get(COINGECKO_API).then((response) => {
                return response.data
            });
            return { } // ?
        } catch (error) {
            return { error }
        }
    },    
    methods: {
        tabChange(tab){
            if(tab === 'all'){
                // TODO: return t full list of tokens
                location.reload(); 
                console.log(`tabChange`, tab);
            }
            if(tab === 'favourites'){
                // TODO: only display favourites
                this.coins = this.coins.filter(item => this.favourites.includes(item.symbol));
            }
        },
        toggleFavourite(item){
            return (
                    this.favourites.includes(item.symbol) ?
                    this.favourites.splice(this.favourites.indexOf(item.symbol), 1) : 
                    this.favourites.push(item.symbol)
                );
        }
    },
}
</script>

<style scoped>
    .root {
		width: 400px;
		margin: 0 auto;
	}
	.root p {
		text-align: right;
		font-size: 0.7em;
		margin: 0;
	}
    .root .empty {
        text-align: center;
		font-size: 1em;
    }
    .empty {
        padding-top: 7%;
    }
	ul {
		list-style:  none;
		width: 50px 0;
		padding: 0;
		background-color: #fafafa;
		border-radius: 5px;
		border: 1px solid #ddd;
	}
	li {
		text-align: left;
		padding: 20px;
		border-bottom: 1px solid #ddd;
	}
	li:nth-last-of-type(1) {
		border-bottom: none;
	}
    li:hover {
        background-color: yellow;
    }
    .tabs button {
        padding: 4px;
        font-size: 12px;
    }
</style>