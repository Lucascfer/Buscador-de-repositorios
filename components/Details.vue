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
            <div v-if="usuario.company" class="dados">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="#000" fill-rule="evenodd" d="M5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v3c0 .889-.387 1.687-1 2.236V11.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 11.5V8.236A2.993 2.993 0 0 1 0 6V3a1 1 0 0 1 1-1h4V1Zm4 0v1H6V1h3ZM1 3h13v3a1.996 1.996 0 0 1-2 2H8v-.5a.5.5 0 0 0-1 0V8H3a1.996 1.996 0 0 1-2-2V3Zm6 6H3c-.35 0-.687-.06-1-.17v2.67a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.83c-.313.11-.65.17-1 .17H8v.5a.5.5 0 0 1-1 0V9Z" clip-rule="evenodd"/></svg>
                <h3>{{ usuario?.company }}</h3>
            </div>
            <div v-if="usuario.location" class="dados">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="#000" d="M12 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5.002 5.002 0 0 1 7 7Zm2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.194-2.293.489-2.96.815c-1.22.597.206 1.026.95 1.258C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.749-.234 2.17-.66.95-1.258c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.884.433 1.811 1.162 1.811 2.241c0 .811-.524 1.4-1.034 1.777C17.816 21.865 14.536 22 12 22c-2.282 0-4.387-.288-5.955-.778C4.795 20.832 3 20.062 3 18.5c0-1.08.927-1.808 1.811-2.24c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"/></g></svg>
                <h3>{{ usuario?.location }}</h3>
            </div>
            <div v-if="usuario.public_repos" class="dados">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="M4 6h16v2H4zm2-4h12v2H6zm-4 8v2h2v8a2.003 2.003 0 0 0 2 2h12a2.006 2.006 0 0 0 2.004-2L20 12h2v-2Zm16 10H6v-8h12Z"/><path fill="currentColor" d="M8 17h4v2H8z"/></svg>
                <h3>{{ usuario?.public_repos }}</h3>
            </div>
            <div v-if="usuario.followers" class="dados">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="M16.5 15.5c1.72 0 3.75.8 4 1.28v.72h-8v-.72c.25-.48 2.28-1.28 4-1.28m0-1.5c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-1.5H3.5v-1c0-.63 2.79-2.16 6.32-2a5.12 5.12 0 0 1 1.55-1.25A12.28 12.28 0 0 0 9 13m0-6.5A1.5 1.5 0 1 1 7.5 8A1.5 1.5 0 0 1 9 6.5M9 5a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7.5 3.5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0-1.5A2.5 2.5 0 1 0 19 9.5A2.5 2.5 0 0 0 16.5 7Z"/></svg>
                <h3>{{ usuario?.followers }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dados {
    display: flex;
    align-items: center;
    gap: 10px;
}
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