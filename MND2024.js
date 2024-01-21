const scriptURL = 'https://script.google.com/macros/s/AKfycbz-kh59kbQakL_s8ZgjxShwaRy3HsVlOZJkJJVrLF2tQD-A3fP3eHVBhI5RfICfvlzH/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'Post', body: new FormData(form)})
  .then(Response => alert("Thank you form is submitted successfully"))
  .then(() => {window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})




