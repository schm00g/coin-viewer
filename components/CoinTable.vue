<template>
    <div>
        <h1>Coin Tables</h1>
        <div class="root">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="search-bar" type="text" placeholder="Search for coins">
                    <p class="text-gray-600 text-xs italic">For example BTC, Shiba...</p>
                </div>
            </div>
            <ul>
                <li v-for="coin in coins" :key="coin.id">
                    <b>{{ coin.name }}</b> <span class="uppercase">{{ coin.symbol }}</span> {{ coin.current_price }}
                </li>
            </ul>
        </div>
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
        };
    },
    async mounted(){
        try {
            // TODO: poll data on regular
            const COINGECKO_API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
            this.coins = await axios.get(COINGECKO_API).then((response) => {
                return response.data
            });
            return {} // ?
        } catch (error) {
            return { error }
        }

    }
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
</style>