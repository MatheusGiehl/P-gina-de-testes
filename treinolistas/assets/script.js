// Seleciona os elementos do HTML
    const input = document.getElementById("tarefa");
    const botao = document.getElementById("adicionar");
    const mensagens = document.getElementById("mensagens");
    const lista = document.getElementById("lista");

    // Função que será chamada ao clicar no botão
    botao.addEventListener("click", () => {
      const texto = input.value.trim(); // remove espaços extras

      if (texto !== "") {
        // --- Usando append() ---
        // Aqui podemos adicionar texto direto + emoji
        mensagens.append("📌 ", texto, " ");

        // --- Usando appendChild() ---
        // Criamos um <li> dinamicamente
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);

        // Limpa o campo de entrada
        input.value = "";
      }
    });