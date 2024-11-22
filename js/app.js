const arbol = new ArbolBinario();

function agregarLibro() {
  const isbn = document.getElementById('isbn').value;
  const titulo = document.getElementById('titulo').value;
  if (isbn && titulo) {
    arbol.insertar(parseInt(isbn), titulo);
    alert('Libro agregado correctamente');
  } else {
    alert('Por favor, ingresa ISBN y título');
  }
}

function buscarLibro() {
  const isbn = document.getElementById('buscarISBN').value;
  const nodo = arbol.buscar(parseInt(isbn));
  const resultado = document.getElementById('resultadoBusqueda');
  if (nodo) {
    resultado.textContent = `Encontrado: ${nodo.titulo}`;
  } else {
    resultado.textContent = 'Libro no encontrado';
  }
}

function eliminarLibro() {
  const isbn = document.getElementById('eliminarISBN').value;
  arbol.eliminar(parseInt(isbn));
  alert('Libro eliminado si existía en el catálogo');
}

function mostrarCatalogo() {
  const catalogo = arbol.recorridoEnOrden();
  const lista = document.getElementById('catalogo');
  lista.innerHTML = '';
  catalogo.forEach(libro => {
    const item = document.createElement('li');
    item.textContent = `ISBN: ${libro.isbn}, Título: ${libro.titulo}`;
    lista.appendChild(item);
  });
}
