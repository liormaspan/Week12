const {infoArr}=require("./products.js")
// console.log(infoArr);

async function user(){
    const userName = await infoArr
    userName.forEach((element) => {
        console.log(element.productName="apple");
    });
};
user()

