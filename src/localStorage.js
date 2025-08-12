export const getFromLS = () => {
    const developers = localStorage.getItem('developers');
    if (developers) {
        return JSON.parse(developers);
    }
    return [];
}
const setToLS = data => {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem('developers', stringifiedData);
}
export const addToLS = id => {
    const data = getFromLS();
    data.push(id);
    setToLS(data);

}