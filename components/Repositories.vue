<script setup>
const props = defineProps(['lista', 'FinishedList'])
</script>

<template>
    <div class="domain">
        <div class="main" v-for="item in props.lista" :key="item?.id">
            <div class="container">
                <h2>{{ item?.name }}</h2>
                <span>{{ item?.description }}</span>
                <p class="stars">
                <div class="icon">
                    <IconsStar color="#6f6f6f" width="20" height="20" />
                </div>
                <h3>{{ item?.stargazers_count }}</h3>
                </p>
            </div>
            <FavButton :repo="item" />
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    justify-content: space-between;
    text-align: left;
    min-height: 5vh;
    border-bottom: 1px solid #000000;
    margin: 5px 20px;
}

.container {
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: 35px;
}

span,
h3 {
    font-size: 20px;
    color: #6f6f6f;
}

h2,
h3,
span {
    margin: 5px;
    padding: 5px 0;
}

.stars {
    display: flex;
    text-align: center;
}

.icon {
    fill: bisque;
    display: flex;
    margin: auto 10px;
}
</style>