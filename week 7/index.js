var baseUrl="https://rickandmortyapi.com/api"
async function getAllData(){
    var response = await fetch(baseUrl)
    var data = response.json()
    console.log(data)
}
getAllData()

var characters="https://rickandmortyapi.com/api/character"
async function getAllCharacters(){
    var response = await fetch(characters)
    var data = response.json()
    console.log(data)
}
getAllCharacters()

var character3="https://rickandmortyapi.com/api/character/3"
async function getAllCharacter3(){
    var response = await fetch(character3)
    var data = response.json()
    console.log(data)
}
getAllCharacter3()


var character126="https://rickandmortyapi.com/api/character/126"
async function getAllCharacter126(){
    var response = await fetch(character126)
    var data = response.json()
    console.log(data)
}
getAllCharacter126()

var character825="https://rickandmortyapi.com/api/character/825"
async function getAllCharacter825(){
    var response = await fetch(character825)
    var data = response.json()
    console.log(data)
}
getAllCharacter825()

var episode="https://rickandmortyapi.com/api/episode"
async function getAllEpisodes(){
    var response = await fetch(episode)
    var data = response.json()
    console.log(data)
}
getAllEpisodes()

var episode4="https://rickandmortyapi.com/api/episode/4"
async function getAllEpisode4(){
    var response = await fetch(episode4)
    var data = response.json()
    console.log(data)
}
getAllEpisode4()

var episode19="https://rickandmortyapi.com/api/episode/19"
async function getAllEpisode19(){
    var response = await fetch(episode19)
    var data = response.json()
    console.log(data)
}
getAllEpisode19()

var episode14="https://rickandmortyapi.com/api/episode/14"
async function getAllEpisode14(){
    var response = await fetch(episode14)
    var data = response.json()
    console.log(data)
}
getAllEpisode14()

var loc="https://rickandmortyapi.com/api/location"
async function getAllLocation(){
    var response = await fetch(loc)
    var data = response.json()
    console.log(data)
}
getAllLocation()

var loc5="https://rickandmortyapi.com/api/location/5"
async function getAllLocation5(){
    var response = await fetch(loc5)
    var data = response.json()
    console.log(data)
}
getAllLocation5()

var loc55="https://rickandmortyapi.com/api/location/55"
async function getAllLocation55(){   
    var response = await fetch(loc55)
    var data = response.json()
    console.log(data)
}
getAllLocation55()

var loc100="https://rickandmortyapi.com/api/location/100"
async function getAllLocation100(){
    var response = await fetch(loc100)
    var data = response.json()
    console.log(data)
}
getAllLocation100()