
              // MODEL - SECTION

              

                function validaCPF (cpf){
                  var API_URL = "http://localhost:8080/valida-cpf?numero=" + cpf
                  
                  const input = document.getElementById('cpf');

                  const cpfOk = document.createElement('div');
                  cpfOk.style = 'margin-bottom: 25px; margin-top: 0px; color:rgb(19, 122, 67)'

                  console.log(input)

              fetch(API_URL)
              .then(res => res.json())
              .then(res => {
                  console.log(res)
                if (res.valido == true) {
                  document.getElementById('resp').innerHTML = '';
                                      
                  input.style = 'background-color: rgb(131, 247, 208);'
                  console.log(input)                  

                  cpfOk.innerText = res.formatado + ' CPF válido!'
                  
                  const CPFvalido = document.getElementById('resp');
                  CPFvalido.appendChild(cpfOk);

                } else {
                  document.getElementById('resp').innerHTML = '';

                  input.style = 'background-color: rgb(255, 195, 195);'
                  console.log(input)

                  cpfOk.style = 'margin-bottom: 25px; margin-top: 0px; color:rgb(222, 40, 40)'

                  cpfOk.innerText = res.formatado + ' CPF inválido!'                                      

                  const CPFvalido = document.getElementById('resp');
                  CPFvalido.appendChild(cpfOk);                 
                }
              })
            }    
                  
              // CONTROLER - SECTION

                

                function getCPF() {
                  const input = document.getElementById('cpf');
                  const cpf = input.value;
                  const larg = cpf.length
                    if (larg < 11) {
                      document.getElementById('resp').innerHTML = '';

                      input.style = 'background-color: rgb(255, 195, 195);'
                      const cpfInc = document.createElement('div');
                      cpfInc.style = 'margin-bottom: 25px; margin-top: 0px; color:rgb(222, 40, 40)'

                      cpfInc.innerText = 'CPF incompleto!'                                      

                      const CPFincompleto = document.getElementById('resp');
                      CPFincompleto.appendChild(cpfInc); 
                    } else {
                      validaCPF(cpf)
                        }
                }
                      
              // FUNÇÃO BASEADA EM REQUISIÇÃO XHR 
              //function validaCPF (cpf){
               // var API_URL = "http://localhost:8080/valida-cpf?numero=" + cpf
               // var request = new XMLHttpRequest();
               // var resposta;
               // const input = document.getElementById('cpf');

               // request.responseType = "json"
               // request.onreadystatechange = function(){
               //             if (request.readyState == 4 && request.status == 200){                              
               //               resposta = request.response;
              //                   if (resposta.valido === true) {
               //                     document.getElementById('resp').innerHTML = '';

                                    
                //                    input.style = 'background-color: rgb(131, 247, 208);'

                //                    const cpfOk = document.createElement('div');
                 //                   cpfOk.style = 'margin-bottom: 25px; margin-top: 0px; color:rgb(19, 122, 67)'

                 //                   cpfOk.innerText = resposta.formatado + ' CPF válido!'
                                    
                 //                   const CPFvalido = document.getElementById('resp');
                 //                   CPFvalido.appendChild(cpfOk);
                 //                 } else {
                  //                  document.getElementById('resp').innerHTML = '';

                 //                   input.style = 'background-color: rgb(255, 122, 122);'

                 //                   const cpfOk = document.createElement('div');
                 //                   cpfOk.style = 'margin-bottom: 25px; margin-top: 0px; color:rgb(222, 40, 40)'

                 //                   cpfOk.innerText = resposta.formatado + ' CPF inválido!'                                      

                 //                   const CPFvalido = document.getElementById('resp');
                  //                  CPFvalido.appendChild(cpfOk);
                  //                }

                   //           } else {
                   //             console.log(resposta)                                  
                  //             }
                   //         }                    
                
               // request.open("GET", API_URL, true);
              //  request.send();              
            //  }
