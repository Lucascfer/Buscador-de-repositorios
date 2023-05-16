<script setup>
const store = useFavoritesStore();
const isActive = ref(false)
const busca = ref('')
const { notFound } = storeToRefs(store)

function getSearch(busca) {
    if (busca) {
        isActive.value === true ?
            store.buscaUsuarios(busca) :
            store.buscaRepositorios(busca)
    } else {
        store.notFound = true
    }
}

function closeNotFound() {
    store.notFound = false
}
</script>

<template>
    <div class="container">
        <IconsGithub color="#000" width="200" height="200" class="icon" />
        <div class="buttons">
            <button @click="isActive = false" type="button" class="btn" :class="{ 'active': !isActive }">
                Repositório
            </button>
            <button @click="isActive = true" type="button" class="btn" :class="{ 'active': isActive }">
                Usuário
            </button>
        </div>
        <div class="search">
            <input v-model="busca" @keyup.enter="getSearch(busca)" type="text" placeholder="Buscar..." aria-label="Search" />
        </div>

        <NotFound v-if="notFound" @close="closeNotFound()" />
    </div>
</template>

<style scoped>
.icon {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 2rem;
    height: 200px;
    font-size: 10rem;
}

.container {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}

.active {
    color: #FFFFFF;
    background-color: #000000 !important;
}

.buttons {
    margin: 0;
    padding: 0;
}

.btn {
    width: 11.625rem;
    background-color: #FFFFFF;
    border: 2px solid #000000;
    font-weight: bold;
    padding: 15px;
    border-radius: 15px;
    margin: 15px;
}

.btn:hover {
    background-color: #000000;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.35s;
}

.search input {
    padding: 15px;
    border-radius: 15px;
    border: 1px solid #7b7b7b;
    width: 30vw;
}
</style>