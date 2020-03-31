class ShippingCost{
    static calculate(sProv, nAmt){ // nAmt is refering to the shippingcost.js => calculate("ON", 10)).toBe(1.3)
        let rc = 0;
        let amnt = 0;
        //alert(nAmt) --> nAmt is refered to as odata in the main.js
        switch(sProv){
            case "AB":
                rc = nAmt *5.332;
                //amnt = rc * 10;
                //alert(rc)
                break;
            case "MB":
                rc = nAmt *4.544;
                break;
            case "NS":
                rc = nAmt *3.426;
                break;
            case "ON":
                rc = nAmt *2.319;
                break;
            case "QC":
                rc = nAmt *2.837;
                break;  
            case "SK":
                rc = nAmt *4.544;
                break; 
            case "PE":
                rc = nAmt *4.411;
                break;    
            
            default:
                throw "invalid province";
        }
        return Number(rc.toFixed(2));
    }
}

module.exports = ShippingCost;