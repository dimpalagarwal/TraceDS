export const getHistory = () => {

    return JSON.parse(
        localStorage.getItem("history")
        || "[]"
    );
};

export const addToHistory = (item) => {

    const history =
        getHistory();

    const filtered =
        history.filter(
            h => h.path !== item.path
        );

    const updated =
        [
            item,
            ...filtered,
        ].slice(0,10);

    localStorage.setItem(
        "history",
        JSON.stringify(updated)
    );
};