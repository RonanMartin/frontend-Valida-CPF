
              // MODEL - SECTION
                function validaCPF (cpf){
                  var API_URL = "http://localhost:8080/valida-cpf?numero=" + cpf
                  var request = new XMLHttpRequest();
                  var resposta;

                  request.responseType = "json"
                  request.onreadystatechange = function(){
                              if (request.readyState == 4 && request.status == 200){                              
                                resposta = request.response;
                                    if (resposta.valido === true) {
                                      document.getElementById('resp').innerHTML = '';

                                      //const input = document.getElementById('cpf');
                                      //input.style = 'background-color: rgb(131, 247, 208);'

                                      const cpfOk = document.createElement('div');
                                      cpfOk.style = 'margin-bottom: 25px; margin-top: 0px; color:rgb(19, 122, 67)'

                                      cpfOk.innerText = resposta.formatado + ' CPF válido!'
                                      
                                      const CPFvalido = document.getElementById('resp');
                                      CPFvalido.appendChild(cpfOk);
                                    } else {
                                      document.getElementById('resp').innerHTML = '';

                                      //const input = document.getElementById('cpf');
                                      //input.style = 'background-color: rgb(255, 122, 122);'

                                      const cpfOk = document.createElement('div');
                                      cpfOk.style = 'margin-bottom: 25px; margin-top: 0px; color:rgb(222, 40, 40)'

                                      cpfOk.innerText = resposta.formatado + ' CPF inválido!'                                      

                                      const CPFvalido = document.getElementById('resp');
                                      CPFvalido.appendChild(cpfOk);
                                    }

                                } else {
                                  console.log(resposta)                                  
                                  }
                              }                    
                  
                  request.open("GET", API_URL, true);
                  request.send();              
                }
                  
              // CONTROLER - SECTION

                
                function getCPF() {
                  const cpfbox = document.getElementById('cpf');
                  const cpf = cpfbox.value;
                  validaCPF(cpf)
              }
                // var xhttp = new XMLHttpRequest();
               // xhttp.onreadystatechange = function () {
                //  if(this.readyState === 4 && this.status === 200) {
                 //     var div = document.getElementById("Response");
                 //     div.innerHTML = xhttp.responseText
                 // }
               // }

               // var API_URL = "http://localhost:8080/valida-cpf"

               // xhttp.open("GET", API_URL, true)
               // xhttp.send();
          