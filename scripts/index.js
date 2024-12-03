const submitButton = document.getElementById('submit-btn')
const listInput = document.getElementById('guess')
const tasklist = document.getElementById('list')

submitButton.addEventListener('click', () => {
  const uliterm = document.createElement('li')
  uliterm.innerHTML = listInput.value
  tasklist.append(uliterm)
  listInput.value = ''
  uliterm.addEventListener('click', () => {
    uliterm.style.textDecoration = 'line-through'
  })
})
