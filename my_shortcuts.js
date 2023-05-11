// Keyboard Shortcuts
// Antoine AUGUSTI - antoine@augusti.fr
// Merci à Adrien COURTOIS pour son aide

var isG = false;

$(document).keydown(function(e)
{
	if (e.which == 17 || e.keyCode == 17)
	{ 
		isG = true; // si la touche CTRL a été pressée
	}
}).keyup(function(e)
{
	// if ($('input:focus').length > 0 || $('textarea:focus').length > 0 || isG != true)
	// { 
	// 	isG = false; // Si on se trouve dans un input, une textarea ou si on n'a pas pressé la touche CTRL, on ne peut pas faire des raccourcis clavier
	// 	return false;
	// }
	if (isG != true)
	{ 
	    return false;// Si on n'a pas pressé la touche CTRL, on ne peut pas faire des raccourcis clavier

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
		// CTRL + B
		case 66:
            research_text_highlighted_in('https://google.com/search?q=');
			return false;
		// CTRL + Y
		case 89:
			research_text_highlighted_in('https://www.youtube.com/results?search_query=');
			return false;
	}
	
	isG = false; // On réinitialise le booléen
});

function research_text_highlighted_in(site_url){
	// window.getSelection
	var selectedTextFormatted = getSelectedTextFormatted();
	if (selectedTextFormatted){
		window.open(site_url+selectedTextFormatted,'_blank');
	}
}

function getSelectedTextFormatted(){
	if (window.getSelection) {
		var selectedText = window.getSelection();
	}
	// document.getSelection
	else if (document.getSelection) {
		selectedText = document.getSelection();
	}
	// document.selection
	else if (document.selection) {
		selectedText = document.selection.createRange().text;
	}
	if  (selectedText) {
		var selectedTextFormatted = selectedText.toString().replace(" ", "+");
		return selectedTextFormatted 
	}
	return null
}
