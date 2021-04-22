document.querySelector('#start_chat').addEventListener('click', event => {
  // console.log("clicou no botão")
  const chat_help = document.getElementById('chat_help'); // Esta linha ouve o botão Iniciar chat
  chat_help.style.display = 'none'; // Esta linha oculta a tela "iniciar suport com chat" depois de clicar no botão iniciar chat

  const chat_in_support = document.getElementById('chat_in_support'); // Esta linha ouve o botão "chat em suporte"
  chat_in_support.style.display = 'block'; // Esta linha oculta a tela "chat em suporte" depois de clicar no botão iniciar chat

  const socket = io();

  const email = document.getElementById('email').value; // Esta linha pega o que foi digitado no email
  const text = document.getElementById('txt_help').value; // Esta linha pega o que foi inserido no input de texto

  socket.on('connect', () => {
    const params = {
      email,
      text,
    };

    socket.emit('client_first_access', params, (call, err) => {
      if (err) {
        console.err(err);
      } else {
        console.log(call);
      }
    });
  });
});
