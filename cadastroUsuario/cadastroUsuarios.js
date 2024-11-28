document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();
    const confirmSenha = document.getElementById("confirmPassword").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!nome || !email || !senha || !confirmSenha) {
        errorMessage.textContent = "Todos os campos são obrigatórios.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Insira um email válido.";
        return;
    }

    if (senha.length < 6) {
        errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    if (senha !== confirmSenha) {
        errorMessage.textContent = "As senhas não coincidem.";
        return;
    }

    const userData = { nome, email, senha };

    axios.post("http://localhost:3000/api/users", userData)
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "/gerenciamentoUsuarios.html"; 
        })
        .catch((error) => {
            console.error("Erro:", error);
            const message = error.response?.data?.message || "Erro ao cadastrar usuário.";
            if (error.response?.status === 409) { 
                errorMessage.textContent = "Este email já está em uso.";
            } else {
                errorMessage.textContent = message;
            }
        });
});
