document.getElementById('loginForm').addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio automático do formulário

    if (validateform()) {
        this.reset(); 

        window.location.href = './home.html';
    }
});

function validateform() {
    try {
        const email = document.querySelector("[name='email']").value;  
        const password = document.querySelector("[name='senha']").value;  

       
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            throw new Error("Insira um email válido!");
        }

       
        const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        if (!passwordPattern.test(password)) {
            throw new Error("Senha inválida: deve ter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.");
        }

        return true;  // Validação bem sucedida permite o envio
    } catch (error) {
        alert(error.message); 
        return false;  // Impede o envio do formulário
    } 
}