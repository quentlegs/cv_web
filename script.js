
function on_load_body(){
	/*Récupération des noms des menus*/
	//const headers = document.querySelectorAll('#div_titre_sommaire > h2'); //permet de récupérer tous les h2 directement enfants des div ayant un id=div_titre_sommaire
	const headers = document.querySelectorAll('#h2_title_summary');

	for(var i=0, iMax = headers.length; i < iMax; i++) {

	   //console.log(headers[i].tagName, headers[i].textContent);

	   if(headers[i].textContent.length > 0){
	   		var first_word = headers[i].textContent.split(" ")[0].toLowerCase(); //recupere le premier mot de chaque titre, et le met en minuscule
	   		first_word = first_word.replace(/\s/g,''); //supprime les espaces en trop
	   		var anchor = "div_"+first_word;
	   		console.log(anchor);

	   	   /*Creation des elements li */
		   var li_element = '<li class="nav-item"><a href="#'+anchor+'" class="nav-link" style="font-weight:bold">'+headers[i].textContent+'</a></li>';

		   /*Ajout des éléments dans la page*/
		   document.getElementById('generated_summary').innerHTML += li_element;
		}
	}
}



