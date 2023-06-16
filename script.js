function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.querySelector("#txtano")
var res = document.querySelector("div#res")


if (fano.value.length == 0 || fano.value > ano) {
  alert("Viajantes do tempo não são permitidos nessa área.")
} else {
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fano.value)
  var genero = ""
  var img = document.createElement("img")
  img.setAttribute('id', 'foto')
  if (fsex[0].checked) {
    genero = "Homem"
    if (idade >=0 && idade < 10) {
      //criança
      img.setAttribute('src', 'male-kid.jpg')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'male-teen.jpg')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'male-young.jpg')

    } else {
      //idoso
      img.setAttribute('src', 'male-senior.jpg')

    }
  } else if (fsex[1].checked) {
    genero = "Mulher"
    if (idade >=0 && idade < 10) {
      //criança
      img.setAttribute('src', 'female-kid.jpg')

    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'female-teen.jpg')

    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'female-young.jpg')

    } else {
      //idoso
      img.setAttribute('src', 'female-senior.jpg')

    }
  }

  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  res.appendChild(img)
}

}