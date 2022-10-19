
var xhr = new XMLHttpRequest ();

var documento;

xhr.responseType = "json"  // aqui padronizamos a resposta para o formato JSON
xhr.onreadystatechange = function(){
  if (xhr.readyState == 4 && xhr.status == 200){
    documento = xhr.response;
    // documento = JSON.parse(documento); // convertendo a resposta de string para JSON, caso não houvesse definido a resposta padrão como JSON
    console.log(documento)
  } else {
   
  }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1")

xhr.send();