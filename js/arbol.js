class ArbolBinario {
    constructor() {
      this.raiz = null; // Nodo raíz
    }
  
    // Método para insertar un nodo
    insertar(isbn, titulo) {
      const nuevoNodo = new Nodo(isbn, titulo);
      if (this.raiz === null) {
        this.raiz = nuevoNodo;
      } else {
        this._insertarNodo(this.raiz, nuevoNodo);
      }
    }
  
    _insertarNodo(nodo, nuevoNodo) {
      if (nuevoNodo.isbn < nodo.isbn) {
        if (nodo.izquierdo === null) {
          nodo.izquierdo = nuevoNodo;
        } else {
          this._insertarNodo(nodo.izquierdo, nuevoNodo);
        }
      } else {
        if (nodo.derecho === null) {
          nodo.derecho = nuevoNodo;
        } else {
          this._insertarNodo(nodo.derecho, nuevoNodo);
        }
      }
    }
  
    // Método para buscar un nodo
    buscar(isbn) {
      return this._buscarNodo(this.raiz, isbn);
    }
  
    _buscarNodo(nodo, isbn) {
      if (nodo === null) return null;
      if (isbn === nodo.isbn) return nodo;
      if (isbn < nodo.isbn) return this._buscarNodo(nodo.izquierdo, isbn);
      else return this._buscarNodo(nodo.derecho, isbn);
    }
  
    // Método para eliminar un nodo
    eliminar(isbn) {
      this.raiz = this._eliminarNodo(this.raiz, isbn);
    }
  
    _eliminarNodo(nodo, isbn) {
      if (nodo === null) return null;
  
      if (isbn < nodo.isbn) {
        nodo.izquierdo = this._eliminarNodo(nodo.izquierdo, isbn);
        return nodo;
      } else if (isbn > nodo.isbn) {
        nodo.derecho = this._eliminarNodo(nodo.derecho, isbn);
        return nodo;
      } else {
        if (nodo.izquierdo === null && nodo.derecho === null) return null;
        if (nodo.izquierdo === null) return nodo.derecho;
        if (nodo.derecho === null) return nodo.izquierdo;
  
        const minNodo = this._minimoNodo(nodo.derecho);
        nodo.isbn = minNodo.isbn;
        nodo.titulo = minNodo.titulo;
        nodo.derecho = this._eliminarNodo(nodo.derecho, minNodo.isbn);
        return nodo;
      }
    }
  
    _minimoNodo(nodo) {
      while (nodo.izquierdo !== null) {
        nodo = nodo.izquierdo;
      }
      return nodo;
    }
  
    // Método para recorrer en orden
    recorridoEnOrden() {
      const resultado = [];
      this._recorridoEnOrden(this.raiz, resultado);
      return resultado;
    }
  
    _recorridoEnOrden(nodo, resultado) {
      if (nodo !== null) {
        this._recorridoEnOrden(nodo.izquierdo, resultado);
        resultado.push({ isbn: nodo.isbn, titulo: nodo.titulo });
        this._recorridoEnOrden(nodo.derecho, resultado);
      }
    }
  }
  