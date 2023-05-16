import axios from 'axios';

const actions = {
    addFav(repo) {
        this.repositoriosFavoritados = [...this.repositoriosFavoritados, repo];
    },
    removeFav(id) {
        this.repositoriosFavoritados = this.repositoriosFavoritados.filter((x) => x.id !== id)
    },

    async buscaUsuarios(payload, page = 1) {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${payload}&page=${page}&per_page=4`);
            this.listaUsuarios = response.data;

            response.data.items.length !== 0 ? navigateTo('/usuarios') : this.notFound = true
        } catch (error) {
            console.error(error);
        }
    },

    async buscaRepositorios(payload, page = 1) {
        try {
            const response = await axios.get(`https://api.github.com/search/repositories?q=${payload}&page=${page}&per_page=4`);
            this.listaRepositorios = response.data;

            response.data.items.length !== 0 ? navigateTo('/repositorios') : this.notFound = true
        } catch (error) {
            console.error(error);
        }
    },

    async buscaInfoUsuario(payload) {
        try {
            const response = await axios.get(`https://api.github.com/users/${payload}`);
            this.usuario = response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async buscaRepoUsuario(payload, page = 1) {
        try {
            const response = await axios.get(`https://api.github.com/users/${payload}/repos?sort=pushed&direction=desc&per_page=4&page=${page}`);
            this.repositoriosUsuario = response.data;
        } catch (error) {
            console.error(error);
        }
    },
}

export default { ...actions }