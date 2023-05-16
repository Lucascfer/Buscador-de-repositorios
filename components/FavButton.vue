<script setup>
const store = useFavoritesStore();
const props = defineProps(['repo'])

function switchFav(repositorio) {
    if (store.isFavorito(repositorio.id) == false) {
        store.addFav(repositorio)
    } else {
        store.removeFav(repositorio.id)
    }
}
</script>

<template>
    <div>
        <button class="fav" @click="switchFav(props.repo)">
            <IconsStar :color="store.isFavorito(props.repo.id)" width="30" height="30" />
        </button>
    </div>
</template>

<style scoped>
.fav {
    background: 0;
    border: 0;
    padding: 0;
    margin: 10px;
    height: 40px;
    width: 40px;
    cursor: pointer;
}
</style>