export const state = () => ({
    title: "State Store",
    counter: 0,
})

export const mutations = {
    increment(state){
        state.counter++;
    },
    decrement(state){
        state.counter--;
    }
}