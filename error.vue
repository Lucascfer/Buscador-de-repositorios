<template>
    <div class="container">
        <IconsGithub color="#000" width="200" height="200" />
        <h2>Desculpe</h2>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <NuxtLink class="button" to="/">Voltar ao menu inicial</NuxtLink>
    </div>
</template>

<script>
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: auto 5rem ;
    margin: auto;
    gap: 30px;
    height: 100vh;
    background-color: #D9D9D9;
}

.button {
    border: 1px solid #000;
    border-radius: 15px;
    padding: 15px;
    margin: 15px auto;
}

.button:hover {
    background-color: #000000;
    color: #D9D9D9;
    cursor: pointer;
    transition: 0.35s;
}
</style>