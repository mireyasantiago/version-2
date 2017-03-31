alert("mensaje");
function crearLista(){
  var nuevaLista= document.createElement("ul");
  nuevaLista.innerHTML="<button onclick='eliminar(this)'>Borrar articulo</button>";
  var nombreDeLista= document.getElementById('nombreLista').value;
  var nodo= document.createTextNode(nombreDeLista);
  nuevaLista.appendChild(nodo);

  var crearListaNueva= document.getElementById('listasNuevas');
  crearListaNueva.appendChild(nuevaLista);
  borrarInput();
}



  function borrarInput(){
    var input = document.getElementById("nombreLista");
	  var valor=""
	  input.value =valor;
  }
  function eliminar(elemento){
      elemento.parentNode.remove();
  }




/*function iniciar(){
  // todo lo que haga en mi codigo se hara con esta funcion
  var lista= new Lista(titulo,id)


  alert("ejecutar")
}
iniciar();*/
