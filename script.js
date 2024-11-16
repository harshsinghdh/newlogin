function handleRegister() {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
  
    if (name && email && password) {
      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      alert("Registration successful!");
      window.location.href = "index.html"; // Redirect to login
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  // Login Logic
  function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const user = JSON.parse(localStorage.getItem(email));
  
    if (user && user.password === password) {
      alert(`Welcome back, ${user.name}!`);
      window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
      alert("Invalid email or password.");
    }
  }