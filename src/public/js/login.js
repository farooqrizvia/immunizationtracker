console.log('login javascript file is loaded!')

const loginForm = document.querySelector('form')
const username = document.querySelector('inputEmailAddress')
const password = document.querySelector('inputPassword')

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const location = search.value

//     messageOne.textContent = 'Loading...'
//     messageTwo.textContent = ''

//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error
//             } else {
//                 messageOne.textContent = data.location
//                 messageTwo.textContent = data.forecast
//             }
//         })
//     })
// })