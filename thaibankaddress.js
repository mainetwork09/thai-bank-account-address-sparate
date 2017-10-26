/*
 * Javascript
 */

String.prototype.thaiBankAddressFormat = function() {
    return (this.length == 10) ? this.substring(0, 3) + '-' + this.substring(3, 4) + '-' + this.substring(4, 9) + '-' + this.substring(9, 10) : this;
}

/** Usage */
var bankAddress = "1234567891";
console.log(bankAddress.thaiBankAddressFormat())