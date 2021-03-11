function postToGoogle() {
    var field1 = $("#nome").val();
    var field2 = $("#nomeGuerra").val();
    var field3 = $("#idade").val();
    var field4 = $("#email").val();
    var field5 = $("#steam").val();
     
    if(field1 == ""){
        alert('Por favor insira seu nome completo!');
        document.getElementById("nome").focus();
        return false;
    }
    if(field2 == ""){
        alert('Por favor insira seu nome de guerra!');
        document.getElementById("nomeGuerra").focus();
        return false;
    }
    if(field3 == "") {
        alert('Por favor insira sua idade!');
        document.getElementById("idade").focus();
        return false;
    }
    if(field4 == "") {
        alert('Por favor insira seu email!');
        document.getElementById("email").focus();
        return false;
    }
    if(field5 == "") {
        alert('Por favor insira seu steamId');
        document.getElementById("steamId").focus();
        return false;
    }


$.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfYR56trmlqOCugqKTTKVFoSoPpQ3DioT4xh7GdoaDQLM2DgQ/formResponse?",
    data: {"entry.174664374": field1, "entry.1654742130": field2, "entry.1913760268": field3, "entry.297235777": field4, "entry.1989898050": field5},
    type: "POST",
    dataType: "xml",
    success: function(d)
    {
    },
    error: function(x, y, z)
        {

            window.location.href = "cadastroS.html"
            
            
        }
});
return false;
}