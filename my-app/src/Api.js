import { API_URL } from './config';

const randomMeals = async () => {
    const response = await fetch(API_URL + `random.php`);
    return await response.json();
};
const categoryMale = async () => {
    const response = await fetch(API_URL + `categories.php`);
    return await response.json();
    
};
    const filterByCategory = async categoryName => {
        const response = await fetch (API_URL + `filter.php?c=`+ categoryName)
        return await response.json();
    };
    const filterById =async filterId => {
        const response = await fetch (API_URL + `lookup.php?i=` + filterId)
        return await response.json();
    }


const categoryBeef = async () => {
    const response = await fetch(API_URL + `filter.php?c=beef`)
    return await response.json();
}
const categoryChicken = async () => {
    const response = await fetch(API_URL +`filter.php?c=chicken`)
    return await response.json();
}
const categoryDessert = async () =>{
    const response = await fetch(API_URL+`filter.php?c=dessert`)
    return await response.json();
}
const categoryLamb = async () =>{
    const response = await fetch(API_URL + `filter.php?c=lamb`)
    return await response.json();

}

export { randomMeals, categoryMale ,categoryBeef, filterByCategory ,filterById, categoryChicken, categoryDessert,categoryLamb};
