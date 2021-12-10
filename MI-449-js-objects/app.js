// ----
// DATA
// ----

// window destructure
const { localStorage, alert } = window

// A couple jokes to start with
const initialJokes = {
  'the horse': {
    setup: 'A horse walks into the bar. The bartender asks...',
    punchline: 'Why the long face?'
  },
  'Orion\'s pants': {
    setup: 'How does Orion keep his pants up?',
    punchline: 'With an asteroid belt.'
  }
}

// The message to display if the jokes object is empty
const noJokesMessage = 'I... I don\'t know any jokes. 😢'

// -------------
// PAGE UPDATERS
// -------------

// Update the listed jokes, based on the jokes object
let jokeKeys
let jokes
const jokesMenuList = document.getElementById('jokes-menu')
const updateJokesMenu = function () {
  // Don't worry too much about this code for now.
  // You'll learn how to do advanced stuff like
  // this in a later lesson.

  // initialize the local joke object if not available
  if (!localStorage.getItem('jokes')) {
    localStorage.setItem('jokes', JSON.stringify(initialJokes))
  } else if (jokes) { // update the jokes if this function is called again
    localStorage.setItem('jokes', JSON.stringify(jokes))
  }

  // instantiate a joke object from the localstorage
  jokes = JSON.parse(localStorage.getItem('jokes'))

  // retrieve keys from jokes object
  jokeKeys = Object.keys(jokes)

  const jokeKeyListItems = jokeKeys.join('</li><li>') || noJokesMessage
  jokesMenuList.innerHTML = '<li>' + jokeKeyListItems + '</li>'
}

// Update the displayed joke, based on the requested joke
const requestedJokeInput = document.getElementById('requested-joke')
const jokeBox = document.getElementById('joke-box')
const updateDisplayedJoke = function () {
  const requestedJokeKey = requestedJokeInput.value
  jokeBox.textContent = requestedJokeKey
  const noJokeFoundMessage = 'No matching joke found :(.'

  if (!requestedJokeKey) return null

  const jokeMatches = Object.keys(jokes)
    .filter(key => (
      key.toLowerCase().includes(requestedJokeKey.toLowerCase())
    ))
    .slice(0, 3)
    .map(text => {
      const joke = jokes[text]
      return (
        `
        <section>
          <p>${joke.setup}</p>
          <p>${joke.punchline}</p>
        </section>
        <hr>
        `
      )
    })
    .join('')
  jokeBox.innerHTML = jokeMatches || noJokeFoundMessage
}

// -------
// MAKE AND UPLOAD A JOKE
// -------

// Get all elements from the new joke menu
const newJokeIdList = ['about', 'setup', 'punchline', 'form']
const [
  newJokeAbout,
  newJokeSetup,
  newJokePunchline,
  newJokeForm
] = newJokeIdList.map((entry) => (
  document.getElementById(`new-joke-${entry}`)
))

// joke factory for making cool jokes
const createJoke = (setup, punchline) => ({setup, punchline})

// upload the joke to the storage if valid
const uploadJoke = e => {
  e.preventDefault()

  if (!newJokeForm.checkValidity()) {
    alert('please fill out all fields before submitting')
    return null
  }

  const newJoke = createJoke(newJokeSetup.value, newJokePunchline.value)

  jokes[newJokeAbout.value] = newJoke
  return updatePage()

}

// -------
// REMOVE A JOKE
// -------

const removeJokeIdList = ['input', 'button']
const [
  removeJokeInput,
  removeJokeButton
] = removeJokeIdList.map(id => (
  document.getElementById(`remove-joke-${id}`)
))

const removeJoke = () => {
  const removalInput = removeJokeInput.value

  // query the jokes object for matching characters
  const jokeToRemove = Object
    .keys(jokes)
    .filter(joke => (
      joke
        .toLowerCase()
        .includes(removalInput.toLowerCase())
    ))[0]

  if (!jokeToRemove) {
    return null
  } else {
    // remove the joke from the jokes object and update storage
    delete jokes[jokeToRemove]
    return updatePage()
  }
}

// Function to keep track of all other
// page update functions, so that we
// can call them all at once
const updatePage = function () {
  updateJokesMenu()
  updateDisplayedJoke()
}

// -------
// STARTUP
// -------

// Update the page immediately on startup
updatePage()

// ---------------
// EVENT LISTENERS
// ---------------

// Upload a new joke
newJokeForm.addEventListener('submit', uploadJoke)
// Remove a joke
removeJokeButton.addEventListener('click', removeJoke)
// Keep the requested joke up-to-date
requestedJokeInput.addEventListener('input', updateDisplayedJoke)
