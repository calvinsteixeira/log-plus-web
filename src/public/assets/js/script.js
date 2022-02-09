// MODULES

// DOM VARIABLES //

const $inputUsername = document.querySelector('#username')
const $inputPassword = document.querySelector('#password')
const $inputTenant = document.querySelector('#tenant')
const $loginForm = document.querySelector('#login-form')

// EVENTS

$loginForm.addEventListener('submit', e => {
  e.preventDefault()
  axios
    .post(
      '/login',
      {
        tenant: $inputUsername.value,
        username: $inputUsername.value,
        password: $inputPassword.value
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
})
