<script setup>
const store = useFavoritesStore();
const { getRepositoriosUsuario } = storeToRefs(store)

const lista = getRepositoriosUsuario
</script>

<template>
    <div>
        <div v-if="getRepositoriosUsuario.length == 0">
            <h1 class="text">Volte ao menu inicial</h1>
        </div>
        <div class="container" v-else>
            <Details />
            <div class="lista">
                <Repositories :lista="lista" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    margin: 20px;
}

.lista {
    margin: auto;
    width: 100%;
}

.text {
    display: flex;
    justify-content: center;
    margin: 10rem;
}
</style>