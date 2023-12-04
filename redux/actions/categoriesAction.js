import * as type from '../types/categoriesType'

export function fetchCategoriesAction(){
    
    return {
        type: type.FETCH_CATEGORIES_DATA,
        // payload: data
    }
}

export function subCategoriesAction(data){
    
    return {
        type: type.FETCH_SUB_CATEGORIES,
        payload: data
    }
}