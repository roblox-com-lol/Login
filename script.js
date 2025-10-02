
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('message');
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        messageEl.textContent = data.message;
        
        if (data.success) {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    } catch (error) {
        messageEl.textContent = 'Erro ao tentar fazer login';
    }
});
