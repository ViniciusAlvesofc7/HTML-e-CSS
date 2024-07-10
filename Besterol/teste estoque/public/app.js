document.getElementById('formRegistro').addEventListener('submit', registrarProduto);
document.getElementById('btnConsultar').addEventListener('click', consultarProdutos);

function registrarProduto(e) {
  e.preventDefault();
  
  let nome = document.getElementById('nome').value;
  let preco = document.getElementById('preco').value;

  fetch('http://localhost:3000/api/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, preco })
  })
  .then(res => res.json())
  .then(data => {
    alert('Produto registrado com sucesso!');
    document.getElementById('formRegistro').reset();
  })
  .catch(err => console.error('Erro:', err));
}

function consultarProdutos() {
  fetch('http://localhost:3000/api/produtos')
    .then(res => res.json())
    .then(data => {
      let listaProdutos = document.getElementById('listaProdutos');
      listaProdutos.innerHTML = '';
      data.forEach(produto => {
        let li = document.createElement('li');
        li.textContent = `ID: ${produto.id} - Nome: ${produto.nome} - Preço: R$${produto.preco}`;
        listaProdutos.appendChild(li);
      });
    })
    .catch(err => console.error('Erro:', err));
}
