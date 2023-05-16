<script setup>
const store = useFavoritesStore()
const { getFavoritos } = storeToRefs(store)

const lista = getFavoritos

</script>

<template>
    <div>
        <div class="title">
            <IconsGithub color="#000" width="40" height="40" />
            <h1>Repositórios Favoritados</h1>
        </div>
        <div v-if="getFavoritos.length == 0">
            <h1 class="text">Não há repositórios favoritados</h1>
        </div>
        <div v-else>
            <Repositories :lista="lista" />
        </div>
    </div>
</template>

<style scoped>
.title {
    display: inline-flex;
    margin: 20px;
    gap: 20px;
}

.text {
    display: flex;
    justify-content: center;
    margin: 10rem;
}
</style>