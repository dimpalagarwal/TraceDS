export const getFavorites = () => {
    return JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );
};

export const toggleFavorite = (id) => {

    const favorites = getFavorites();

    const updated =
        favorites.includes(id)
        ?
        favorites.filter(
            fav => fav !== id
        )
        :
        [...favorites,id];

    localStorage.setItem(
        "favorites",
        JSON.stringify(updated)
    );

    return updated;
};