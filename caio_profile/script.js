function toggleMode(){
  
  const html = document.documentElement

  html.classList.toggle('light')

  // Trocando a imagem de perfil

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/profile_pic.jpg')
    img.setAttribute('alt', 'Foto de sol nascendo.')
  }else{
    img.setAttribute('src', './assets/profile_moon.png')
    img.setAttribute('alt', 'Foto de lua cheia.')
  }

}