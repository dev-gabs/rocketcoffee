function openMenu() {
  document.body.classList.add('menuOpened')
}
window.addEventListener('scroll', onScroll)

function onScroll() {
  navOnScroll()
}

function closeMenu() {
  document.body.classList.remove('menuOpened')
}

function navOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
