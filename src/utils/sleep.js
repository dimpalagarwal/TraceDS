export const sleep = (
    ms,
    speed
) =>
    new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms / speed
            )
    );