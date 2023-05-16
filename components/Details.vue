<script setup>
const store = useFavoritesStore()
const { usuario } = storeToRefs(store)

</script>

<template>
    <div class="container">
        <img :src="usuario?.avatar_url" :alt="usuario?.name">
        <div class="text">
            <h2>{{ usuario?.name }}</h2>
            <span>{{ usuario?.login }}</span>
            <h3>{{ usuario?.company }}</h3>
            <h3>{{ usuario?.location }}</h3>
            <h3>{{ usuario?.public_repos }}</h3>
            <h3>{{ usuario?.followers }}</h3>
        </div>
    </div>
</template>

<style scoped>
.none {
    display: none;
}

.container {
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 644px;
    max-width: 339px;
    -webkit-box-shadow: 0px 0px 17px 4px rgba(148, 148, 148, 1);
    -moz-box-shadow: 0px 0px 17px 4px rgba(148, 148, 148, 1);
    box-shadow: 0px 0px 17px 4px rgba(148, 148, 148, 1);
    border-radius: 10px;
    margin: 30px;
}

img {
    max-width: 300px;
    margin: 20px;
    margin-bottom: 0;
    border-radius: 10px;
}

.text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
}

span {
    margin-bottom: 34px;
    color: #6f6f6f;
}

h3 {
    margin: 10px 0;
    color: #6f6f6f;
}
</style>