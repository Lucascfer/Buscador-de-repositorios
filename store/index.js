import state from "./user/state";
import getters from "./user/getters";
import actions from "./user/actions";

export const useFavoritesStore = defineStore('main', {
    state,
    getters,
    actions,
})