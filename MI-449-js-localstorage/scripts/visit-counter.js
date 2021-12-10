// amount of times the user has visited the website in total

if (localStorage.getItem('visited')) {
  const visitCount = parseInt(localStorage.getItem('visited')) + 1
  localStorage.setItem('visited', visitCount)
} else {
  localStorage.setItem('visited', 1)
}

document.getElementById(
  'visit-counter'
).innerText = `You have visited this website ${localStorage.getItem(
  'visited'
)} times`
