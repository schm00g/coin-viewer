<template>
    <section>
        <b-field grouped group-multiline>
            <b-button
                label="Clear Favourites"
                type="is-danger"
                icon-left="close"
                class="field"
                @click="favouritedRows = []" />

        </b-field>

        <b-tabs>
            <b-tab-item label="All Coins">
                <b-table
                    :data="data"
                    :columns="columns"
                    :checked-rows.sync="favouritedRows"
                    :is-row-checkable="(row) => row.id !== 3 && row.id !== 4"
                    checkable
                    :checkbox-position="checkboxPosition">

                    <template #bottom-left>
                        <b>Favourites</b>: {{ favouritedRows.length }}
                    </template>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Favourites">
                <template #header>
                    <span> Favourites <b-tag rounded> {{ favouritedRows.length }} </b-tag> </span>
                </template>
                <pre>{{ favouritedRows }}</pre>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
    import data from './coindata.json';
    export default {
        data() {
            return {
                data,
                checkboxPosition: 'right',
                favouritedRows: [data[0], data[1]],
                columns: [
                    {
                        field: 'name',
                        label: 'Name',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'current_price',
                        label: 'Price',
                    },
                    {
                        field: 'price_change_percentage_24h',
                        label: '24h%',
                    },
                    {
                        field: 'market_cap',
                        label: 'Market Cap',
                        centered: true
                    },
                    {
                        field: 'total_volume',
                        label: 'Volume(24h)',
                    },
                    {
                        field: 'circulating_supply',
                        label: 'Circulating Supply',
                    }
                ]
            }
        }
    }
</script>
