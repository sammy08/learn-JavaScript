
        //variaveis 
        var button = document.getElementById("btn");
        
        //addEventListene
        button.addEventListener("click",valida,false)
        
        //function
        function valida(){
            
            //variaveis
            var user = document.forms["myForm"]["user"].value;
            var email = document.forms["myForm"]["email"].value;
            var senha = document.forms["myForm"]["senha"].value;
            //fim variaveis
            
            //if e else
            if(user === ""){
                document.getElementById("response").innerHTML = "campo nome está vazio";
                document.getElementById("btn").disabled = true;
                return false;
            }
            else if(email === ""){
                document.getElementById("response").innerHTML = "campo email está vazio";
                return false;
            }
            else if(senha === ""){
                document.getElementById("response").innerHTML = "campo senha está vazio";
                return false;
            }
            //fim if else
        }
    