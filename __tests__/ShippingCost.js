const ShippingCost = require("../public/ShippingCost.js");

it("tests that Alberta Tax is correct", ()=>{
    expect(ShippingCost.calculate("AB", 10)).toBe(53.32);//0.5
});

it("tests that the province of Manitoba's tax is correct", ()=>{
    expect(ShippingCost.calculate("MB", 10)).toBe(45.44);
})

it("tests that Ontario's tax is correct", ()=>{
    expect(ShippingCost.calculate("ON", 10)).toBe(23.19);
});

it("tests that the province of Qubec City tax is correct", ()=>{
    expect(ShippingCost.calculate("QC", 10)).toBe(28.37);
})

it("tests that the province of Nova Scotia tax is correct", ()=>{
    expect(ShippingCost.calculate("NS", 10)).toBe(34.26);
})

it("tests that Sasketwan's Tax is correct", ()=>{
    expect(ShippingCost.calculate("SK", 10)).toBe(45.44);   
});

it("tests that the province of PEI tax is correct", ()=>{
    expect(ShippingCost.calculate("PE", 10)).toBe(44.11);
})

it("tests that the province \"asdf\" throws an exception", ()=>{
    try{
        ShippingCost.calculate("asdf", 10);
        fail();
    }
    catch(e){
        expect(e.toString()).toBe("invalid province");
    }
});


