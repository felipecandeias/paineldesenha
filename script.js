// script.js

let senha = ""; // Armazena a senha digitada
const senhaAtual = document.getElementById("senhaAtual");
const listaChamados = document.getElementById("listaChamados");

// Digita um número
function digitar(num) {
  if (senha.length < 3) { // Limita a senha a 3 dígitos
    senha += num;
    senhaAtual.textContent = senha;
  }
}

// Limpa a senha digitada
function limpar() {
  senha = "";
  senhaAtual.textContent = "---";
}

function chamar() {
    if (senha) {
      // Reproduz o som
      const audio = document.getElementById("audioChamada");
      audio.play();
  
      // Adiciona a senha na lista de chamados
      const li = document.createElement("li");
      li.textContent = `Senha: ${senha}`;
      listaChamados.appendChild(li);
  
      // Reseta o display
      limpar();
  
      // Alerta opcional
      alert(`Senha ${senha} chamada!`);
    } else {
      alert("Digite uma senha antes de chamar.");
    }
  }
  