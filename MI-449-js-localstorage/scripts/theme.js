// switch between day and night themes
let theme = localStorage.getItem('theme')

if (!theme) {
  localStorage.setItem('theme', 'day-theme')
  theme = localStorage.getItem('theme')
}

document.getElementById('theme-presenter').innerText = theme.split('-')[0]

document.body.setAttribute('class', theme)

document.getElementById('theme-switcher').addEventListener('click', () => {
  theme = localStorage.getItem('theme')
  return theme === 'day-theme'
    ? setTheme('night-theme')
    : setTheme('day-theme')
})

const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  document.getElementById('theme-presenter').innerText = theme.split('-')[0]
  return document.body.setAttribute('class', theme)
}
