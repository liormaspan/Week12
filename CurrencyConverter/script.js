let moneyData;

const firstCurrncey=document.getElementById("currencyNow")
const secoundCurrncey=document.getElementById("changeCurrency")
const inputUser=document.getElementById("inputUser")
inputUser.addEventListener("click",inputUser)

const change=document.getElementById("switch")
change.addEventListener("click",change)


function switchMoney(){
    const temp=firstCurrncey.value
    firstCurrncey.value=secoundCurrncey.value
    secoundCurrncey.value=temp
}

function convert(){
    const befor=firstCurrncey.value
    const after=secoundCurrncey.value
    const moneyInput=document.getElementById("userInput").value
    const changeCurrency=moneyData.conversion_rates[after]
    const result=moneyInput*changeCurrency
    document.getElementById("result").innerText=`${moneyInput} ${befor} = ${result.toFixed}(2)${after}`
}

async function currncey(){
   try{const res=await fetch("https://v6.exchangerate-api.com/v6/e7a123f06f034204fecf7db6//latest/ILS")
    console.log(res);
    if(res.ok){
        moneyData=await res.json()
        console.log(moneyData.conversion_rates);
        const rates=moneyData.conversion_rates
        for(const code in rates){
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");
    
            option1.value = code;
            option1.text = code;
    
            option2.value = code;
            option2.text = code;

            firstCurrncey.add(option1)
            secoundCurrncey.add(option2)


        }
    }else{
        throw new Error("Sorry there is an Error");
    }
} catch(e){
    console.log(error);
}

}
currncey()
