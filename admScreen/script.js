const API_URL = "http://localhost:3000/api/users";

const userTableBody = document.getElementById("userTableBody");
const userModal = new bootstrap.Modal(document.getElementById("userModal"));
const userIdInput = document.getElementById("userId");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

async function fetchUsers() {
    try {
        const response = await axios.get(API_URL);
        const users = response.data;

        userTableBody.innerHTML = "";
        users.forEach((user, index) => {
            userTableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.nome}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" title="Editar" onclick="editUser('${user._id}')">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" title="Excluir" onclick="deleteUser('${user._id}')">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
    }
}

async function editUser(userId) {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        const user = response.data;

        userIdInput.value = user._id;
        nomeInput.value = user.nome;
        emailInput.value = user.email;

        errorMessage.classList.add("d-none");
        userModal.show(); 
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
    }
}

async function saveUser(event) {
    event.preventDefault();

    const userData = {
        nome: nomeInput.value.trim(),
        email: emailInput.value.trim(),
    };

    if (!userData.nome || !userData.email) {
        errorMessage.textContent = "Todos os campos são obrigatórios.";
        errorMessage.classList.remove("d-none");
        return;
    }

    try {
        const userId = userIdInput.value;

        if (!userId) {
            throw new Error("Nenhum usuário selecionado para edição.");
        }

        const response = await axios.put(`${API_URL}/${userId}`, userData);

        if (response.status === 200) {
            userModal.hide();
            fetchUsers(); 
        } else {
            throw new Error("Erro ao salvar alterações no usuário.");
        }
    } catch (error) {
        errorMessage.textContent = "Erro ao salvar o usuário. Tente novamente.";
        errorMessage.classList.remove("d-none");
        console.error(error);
    }
}

async function deleteUser(userId) {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

    try {
        const response = await axios.delete(`${API_URL}/${userId}`);
        if (response.status === 200) fetchUsers();
        else throw new Error("Erro ao excluir usuário.");
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
    }
}

fetchUsers();

const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", saveUser);
