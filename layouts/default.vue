<template>
    <div>
        <header class="navigation">
            <div class="container">
                <NuxtLink to="/" class="title">
                    <span class="github">GitHub</span>
                    <span class="search">Search</span>
                </NuxtLink>

                <nav class="menu">
                    <NuxtLink to="/">Inicío</NuxtLink>
                    <NuxtLink to="/favorites">Favoritos</NuxtLink>
                </nav>
            </div>
        </header>

        <slot></slot>
    </div>
</template>

 
<style scoped>
.navigation {
    padding-left: 20px;
    padding-right: 20px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.navigation .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.title {
    font-weight: 400;
    font-size: 2rem;
}

.github {
    font-weight: bold;
}

.search {
    font-style: italic;
    margin-left: 0.5rem;
}

.menu {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2rem;
}

.menu a {
    margin-left: 2rem;
    font-weight: bold;
}

.menu .router-link-active {
    color: #ff0000;
}

@media (max-width: 500px) {
    .title {
        font-size: 1.3rem;
    }

    .search {
        margin-left: 0.2rem;
    }

    .menu a {
        margin-left: 0.5rem;
    }
}
</style>
  