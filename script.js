function createBubble() {
  // Create 4 types of bubbles
  const bubble = document.createElement("div"); // bottom
  bubble.classList.add("bubble");

  const bubble1 = document.createElement("div"); // right
  bubble1.classList.add("bubble1");

  const bubble2 = document.createElement("div"); // left
  bubble2.classList.add("bubble2");

  const bubble3 = document.createElement("div"); // top
  bubble3.classList.add("bubble3");

  // Random colors
  [bubble, bubble1, bubble2, bubble3].forEach((b) => {
    b.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  });

  // Random sizes
  [bubble, bubble1, bubble2, bubble3].forEach((b) => {
    let size = Math.random() * 60 + 20;
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
  });

  // Bottom → Up
  bubble.style.left = `${Math.random() * window.innerWidth}px`;
  bubble.style.bottom = `-150px`;
  let duration = Math.random() * 6 + 4;
  bubble.style.animation = `float ${duration}s linear forwards`;

  // Right → Left
  bubble1.style.top = `${Math.random() * window.innerHeight}px`;
  bubble1.style.left = `${window.innerWidth + 100}px`;
  let duration1 = Math.random() * 6 + 4;
  bubble1.style.animation = `moveLeft ${duration1}s linear forwards`;

  // Left → Right
  bubble2.style.top = `${Math.random() * window.innerHeight}px`;
  bubble2.style.left = `-150px`;
  let duration2 = Math.random() * 6 + 4;
  bubble2.style.animation = `moveRight ${duration2}s linear forwards`;

  // Top → Down
  bubble3.style.left = `${Math.random() * window.innerWidth}px`;
  bubble3.style.top = `-150px`;
  let duration3 = Math.random() * 6 + 4;
  bubble3.style.animation = `fall ${duration3}s linear forwards`;

  // Add to DOM
  document.body.appendChild(bubble);
  document.body.appendChild(bubble1);
  document.body.appendChild(bubble2);
  document.body.appendChild(bubble3);

  // Remove after animations
  setTimeout(() => bubble.remove(), duration * 1000);
  setTimeout(() => bubble1.remove(), duration1 * 1000);
  setTimeout(() => bubble2.remove(), duration2 * 1000);
  setTimeout(() => bubble3.remove(), duration3 * 1000);
}

// Create many bubbles
for (let i = 0; i < 50; i++) {
  setTimeout(createBubble, i * 50);
}

// index.html
setTimeout(() => {
  document.getElementById("text").classList.add("show");
}, 6000);
setTimeout(() => {
  document.getElementById("start").classList.add("show");
}, 6500);

function showForm() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("formBox").classList.remove("hidden");
}

function showDetails() {
  let username1 = document.getElementById("username1").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
    if (!checkEmail()) return;

  function checkEmail() {
  let email = document.getElementById("username").value.trim();

  if (email.endsWith("@gmail.com")) {
    alert("✅ Valid Gmail address");
    return true;  // success
  } else {
    alert("❌ Please enter a Gmail address ending with @gmail.com");
    return false; // fail -> stop
  }
}

  if (username1.length > 8) {
    alert("Your name not have more than 8 characters long.");
    return;
  }

  if (password.length < 8) {
    alert("Your password must be at least 8 characters long.");
    return;
  }

  if (username === "" || password === "" || username1 === "") {
    alert("Please enter e-mail, password and your name!");
    return;
  }

  document.getElementById("showName").innerText = username1;
  document.getElementById("showUser").innerText = username;
  document.getElementById("showPass").innerText = password;

  document.getElementById("formBox").classList.add("hidden");
  document.getElementById("text").classList.add("hidden");
  document.getElementById("details").classList.remove("hidden");

  document.getElementById("welcome").innerText = username1;
}
