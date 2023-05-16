const getters = {
    getFavoritos(state) {
        return state.repositoriosFavoritados
    },
    getUsuarios(state) {
        return state.listaUsuarios
    },
    getRepositorios(state) {
        return state.listaRepositorios
    },
    getRepositoriosUsuario(state) {
        return state.repositoriosUsuario
    },
    isFavorito: (state) => (id) => state.repositoriosFavoritados.some((x) => x.id === id)
}

export default { ...getters };