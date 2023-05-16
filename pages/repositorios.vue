<script setup>
import { useFavoritesStore } from '../store/index';

const store = useFavoritesStore();
const { getRepositorios } = storeToRefs(store)

const lista = getRepositorios
</script>

<template>
    <div>
        <div v-if="getRepositorios.length == 0">
            <h1 class="text">Volte ao menu inicial</h1>
        </div>
        <div v-else>
            <Repositories :lista="lista.items" />
        </div>
    </div>
</template>

<style scoped>
.text {
    display: flex;
    justify-content: center;
    margin: 10rem;
}
</style>