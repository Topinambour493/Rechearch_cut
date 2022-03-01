// Keyboard Shortcuts
// Antoine AUGUSTI - antoine@augusti.fr
// Merci à Adrien COURTOIS pour son aide

var isG = false;

$(document).keydown(function(e)
{
	if (e.which == 87 || e.keyCode == 87)
	{ 
		isG = true; // si la touche G a été pressée
	}
}).keyup(function(e)
{
	if ($('input:focus').length > 0 || $('textarea:focus').length > 0 || isG != true)
	{ 
		isG = false; // Si on se trouve dans un input, une textarea ou si on n'a pas pressé la touche G, on ne peut pas faire des raccourcis clavier
		return false;
	}

	if (e.keyCode == true)
	{
		var key = e.keyCode;
	} 
	else 
	{
		var key = e.which;
	}

	switch (key) // On regarde la deuxième touche pressée par l'utilisateur
	{
		// W + N
		case 78:
            research_google_text_highlighted()
			return false;
			break;
	}
	
	isG = false; // On réinitialise le booléen
});

function research_google_text_highlighted(){
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    navigator.clipboard.writeText(text);
    window.open('https://google.com','_blank');
}