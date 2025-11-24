document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email  = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
            alert(data.message);
            window.location.href = '/home.html';
        }else {
            alert(data.messagee || 'Login failed');
        }
    } catch (error) {
        console.error(err);
        alert("could not connect to server. try again later");
    }
});    