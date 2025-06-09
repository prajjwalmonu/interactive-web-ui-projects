
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('formError');

  if (!name || !email || !message) {
    error.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  error.textContent = "Form submitted successfully!";
  this.reset();
});


function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  const list = document.getElementById('taskList');
  console.log(task);
  if (task === "") return;

  const li = document.createElement('li');
  li.innerHTML = `${task} <button onclick="removeTask(this)">Remove</button>`;
  list.appendChild(li);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}