//supplierCode:productNumber-size
function parsePartCode(partCode) {
    const firstCut=":";
    const secondCut="-";
    let startOfIndex=0;
    let whereToCut=partCode.indexOf(firstCut);
    let whereToCut2=partCode.indexOf(secondCut);
    let supplierCode=partCode.substring(startOfIndex,whereToCut);
    let productNumber=partCode.substring(whereToCut,whereToCut2);
    let size=partCode.substring(whereToCut2);

    console.log("Supplier Code:"+supplierCode);
    console.log("Product Number"+productNumber);
    console.log("Size "+size);

}
parsePartCode("1548:14758-Lg");
parsePartCode("6584:15988-Sm");