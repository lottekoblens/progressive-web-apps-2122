export const loadingState = () => {
    const load = document.getElementById('loading');
    load.classList.add('loading-true'); // add class loading-true to show the loading icon
};

export const removeLoadingState = () => {
    const load = document.getElementById('loading');
    load.classList.remove('loading-true'); // remove class loading-true to delete the loading icon
};