/*
* Javascript
*/

function thaiBankAddressFormat(address){
    return ( address.length == 10 ) ? address.substring(0, 3) + '-' + address.substring(3, 4) + '-' + address.substring(4, 9) + '-' + address.substring(9, 10):address;
}