export const removeItemFromArr = ( arr, item ) =>{
        let i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}