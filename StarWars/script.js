async function random(){
    const randomId = Math.floor(Math.random() * 83) + 1;
    try{
        const res=await fetch(`https://www.swapi.tech/api/people/${randomId}`)
        console.log(res);
        if(res.ok){
            const data=await res.json()
            console.log(data);
            // return(data.result.properties);

            async function homeName(){
                    const url=data.result.properties.homeworld
                    const info=await fetch(`${url}`)
                    if(info.ok){
                        const worldInfo=await info.json()
                        
                        console.log(worldInfo.result.properties.name)
                        const contain=document.getElementById("contain")
                        const name = document.getElementById("name");
                        const height = document.getElementById("height");
                        const gender = document.getElementById("gender");
                        const birthYear = document.getElementById("birthYear");
                        const homeWorld = document.getElementById("homeWorld")
                        
                        name.innerText=data.result.properties.name
                        height.innerText=`Height: ${data.result.properties.height}`
                        gender.innerText=`Gender: ${data.result.properties.gender}`
                        birthYear.innerText=`Birth Year: ${data.result.properties.birth_year}`
                        homeWorld.innerText=`Home Name: ${worldInfo.result.properties.name}`
                }else{
                    console.log("error");
                }
            }
            homeName()
        }else{
            console.log(error);
        }
    }catch(e){
        console.log(e);
    }
}

const findBtn=document.getElementById("searchBtn")
findBtn.addEventListener("click",async function(){
    await random()
})

function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }