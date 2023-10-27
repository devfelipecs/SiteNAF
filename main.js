const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(agenda)
  activateMenuAtCurrentSection(doacao)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a sessão passou da linha
  // quais dados vou precisar
  // o topo da sessão

  const sectionTop = section.offsetTop

  // a altura da sessão
  const sectionHeight = section.offsetHeight

  // o topo da sessão chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo

  //a sessão termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da sessão passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //limites da sessão

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  duration: 700,
  distance: '30px'
}).reveal(`#home,
 #home img,
  #home .stats,
   #services,
   #services header,
    #services .card,
    #agenda,
    #doacao,
    #about,
    #about header,
    #about content`
)

const input = document.querySelector('input')

function copyToClipboard() {
  navigator.clipboard.writeText(input.value).then(() => {
    alert('Chave Pix Copiada!');
  })
}