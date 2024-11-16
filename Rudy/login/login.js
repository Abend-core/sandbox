var message = 'coucou';

$(document).ready(function() {
    $('#identifiant').focus()
});

function searchId(touche, o){

    var valeur = $(o).val()
    o = $(o)[0];
    console.log(o)
    if(touche == "Enter" && valeur != 'Rudy'){
        $(o).attr('readonly', true);
        $('#identifiant').attr('id','')
        $('#console').append("<p id='message'>Erreur ! Cette identifiant existe pas.</p>")
        $('#console').append("<p id='message' class='ligne'>Identifiant:</p><input type='text' id='identifiant' class='disable' onkeydown='searchId(event.key, $(this))'/>")
        $('#identifiant').focus()
    }else if(touche == "Enter" && valeur == 'Rudy'){
        $('#console').append("<p id='message' class='ligne'>Password:</p><input type='text' id='password' class='disable' onkeydown='searchPassword(event.key, $(this))'/>")
        $('#password').focus()
    }

}
