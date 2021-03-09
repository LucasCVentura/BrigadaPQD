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
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdkMbXste8GD3O18jJd4fMxZ8lR_0tvV7IFF4cEVLQm6p5Q6A/formResponse?",
    data: {"entry.70738506": field1, "entry.1517720971": field2, "entry.1870601408": field3, "entry.1670685187": field4, "entry.1595942151": field5},
    type: "POST",
    dataType: "xml",
    success: function(d)
    {
    },
    error: function(x, y, z)
        {

            $('#success-msg').show();
            $('#form').hide();
            
        }
});
return false;
}