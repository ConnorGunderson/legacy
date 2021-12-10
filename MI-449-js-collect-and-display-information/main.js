
const codeElem = document.querySelector('code')

const previewBody = Object.values(document.querySelectorAll("h2")).filter(elem => {
  return elem.innerText === "Preview"
})[0].nextElementSibling

const labels = Object.values(document.querySelectorAll('label'))

const inputs = labels.map(elem => {
  return elem.nextElementSibling
})

codeElem.innerText = previewBody.innerHTML

inputs.forEach(elem => {

  elem.addEventListener('input', e => {
    e.preventDefault()
    return changeHTML(e.target.previousElementSibling.innerText, e.target.value)
  }
)})

const changeHTML = (label, innerText) => {
  // capture the first and last name <em> elem
  let [first, last] = Object.values(previewBody.querySelector('em').querySelectorAll('span'))
  // capture the two paragraph elements and destructure them into different variables
  let [descriptionElem, emailPhone] = Object.values(previewBody.querySelectorAll('p'))

  // destructure the email and phone <a> tags into their own variables
  let [email, phone] = Object.values(emailPhone.querySelectorAll("a"))

  switch (label.toLowerCase()) {
    case "first name":
      first.innerHTML = innerText || "FIRST_NAME"
      break;
    case "last name":
      last.innerHTML = innerText || "LAST_NAME"
      break;
    case "briefly describe yourself":
      descriptionElem.innerHTML = innerText || 'DESCRIBE_YOURSELF_INFO'
      break;
    case "email":
      email.href = `mailto:${innerText || "#"}`
      email.innerHTML = innerText || 'EMAIL_ADDRESS'
      break;
    case "phone":
      phone.href = `tel:${innerText || "#"}`
      phone.innerHTML = innerText || 'PHONE_NUMBER'
      break;
  }

  return codeElem.innerText = previewBody.innerHTML
}