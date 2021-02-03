window.onload = () => {
  const hours = new Date().getHours()

  let greeting = 'Good day'

  if (hours > 6 && hours < 12) {
    greeting = 'Good morning!'
  } else if (hours >= 12 && hours <= 16) {
    greeting = 'Good afternoon!'
  } else {
    greeting = 'Good evening!'
  }

  document.getElementById('greeting-text').innerHTML = greeting
}
