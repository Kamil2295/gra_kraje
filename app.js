
test()


var json = []
async function getData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    console.log(json)
}


function losuj_nr() {
    var max = json.length -1
    return Math.floor(Math.random() * max);
  }
  

function losuj_kraje(){

    document.getElementById("gra").innerHTML = ""

    var kraj1 = json[losuj_nr()]
    var kraj2 = json[losuj_nr()]

    console.log(kraj1)
    console.log(kraj2)

    const div_kraj1 = document.createElement("div")
    const div_kraj2 = document.createElement("div")

    div_kraj1.classList.add("slide-in-bck-left")
    div_kraj2.classList.add("slide-in-bck-right")

    div_kraj1.setAttribute("id", "kraj1")
    div_kraj2.setAttribute("id", "kraj2")

    div_kraj1.setAttribute("onclick", `sprawdz(${kraj1.population}, ${kraj2.population}, "1")`)
    div_kraj2.setAttribute("onclick", `sprawdz(${kraj1.population}, ${kraj2.population}, "2")`)

    
    //nazwa kraju

    const nazwa_kraj1 = document.createElement("h1")
    const nazwa_kraj2 = document.createElement("h1")

    nazwa_kraj1.innerHTML = kraj1.name
    nazwa_kraj2.innerHTML = kraj2.name

    //flaga

    const flaga_kraj1 = document.createElement("img") 
    const flaga_kraj2 = document.createElement("img") 

    flaga_kraj1.setAttribute("src", kraj1.flag)
    flaga_kraj2.setAttribute("src", kraj2.flag)

    //kraj1 append
    div_kraj1.appendChild(nazwa_kraj1)
    div_kraj1.appendChild(flaga_kraj1)

    document.getElementById("gra").appendChild(div_kraj1)

    //odpowiedz append
    const odpowiedz = document.createElement("div")
    odpowiedz.setAttribute("id", "odpowiedz")
    document.getElementById("gra").appendChild(odpowiedz)
    

    //kraj2 append
    div_kraj2.appendChild(nazwa_kraj2)
    div_kraj2.appendChild(flaga_kraj2)

    document.getElementById("gra").appendChild(div_kraj2)

}


function sprawdz(p_k1, p_k2, wybrany){
    console.log(p_k1)
    console.log(p_k2)
    console.log(wybrany)

    const odpowiedz = document.getElementById("odpowiedz")

    if(p_k1>p_k2 && wybrany=="1"){
        odpowiedz.style.backgroundColor = "green"
    }

    if(p_k1>p_k2 && wybrany=="2"){
        odpowiedz.style.backgroundColor = "red"
    }

}


getData()