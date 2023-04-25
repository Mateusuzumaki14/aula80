//comece aqui

 var array1=[]
   var nome=""
  function submit() {
    for(var m=1; m<=4; m++){
        nome=document.getElementById("name"+m).value
        array1.push(nome)
    }
    document.getElementById("displayNameWithCommas").innerHTML=array1;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

  }

    function sorting(){
        array1.sort();
        var nomeorg=[]
        var arrayt=array1.length
        for(var m=0; m<arrayt; m++){
        nomeorg.push("<h4>nome-"+array1[m]+"</h4>")
        }
        var removecomas=nomeorg.join("")
        document.getElementById("displayNameWithoutCommas").innerHTML=removecomas;
    }