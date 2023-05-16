<script setup>
const store = useFavoritesStore();
const { getUsuarios } = storeToRefs(store)

function detalhesUsuario(username) {
    store.buscaInfoUsuario(username)
    store.buscaRepoUsuario(username)
    return navigateTo('/detalhesUsuario')
}
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="card" v-for="item in getUsuarios.items" :key="item?.id" @click="detalhesUsuario(item?.login)">
                <img class="image" :src="item?.avatar_url" :alt="item?.login">
                <h1 class="login">{{ item?.login }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: auto;
    flex-direction: column;
    margin: 20px 0;
}

.card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: center;
    width: 80%;
    height: 20vh;
    -webkit-box-shadow: 0px 0px 17px 4px rgba(148, 148, 148, 1);
    -moz-box-shadow: 0px 0px 17px 4px rgba(148, 148, 148, 1);
    box-shadow: 0px 0px 17px 4px rgba(148, 148, 148, 1);
    margin: 10px auto;
    border-radius: 10px;
}

.card:hover {
    cursor: pointer;
}

.image {
    height: 80%;
    margin: 13px;
    border-radius: 10px;
}

.login {
    margin: 13px;

}
</style>