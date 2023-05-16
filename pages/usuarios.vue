<script setup>
const store = useFavoritesStore();
const { getUsuarios } = storeToRefs(store)
</script>

<template>
    <div>
        <div v-if="getUsuarios.length == 0">
            <h1 class="text">Volte ao menu inicial</h1>
        </div>
        <div v-else>
            <List />
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