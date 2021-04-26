
function on_load_body(){

	/*Récupération des noms des menus*/
	const headers = document.querySelectorAll('#h2_title_summary');
	
	if(headers.length > 0){ //si on a pas reussi a recupérer les titres, on affiche pas de menus
		var global_div = '<header class="d-flex justify-content-center py-3" ><ul class="nav nav-pills" id="generated_summary" ></ul></header>';
		document.getElementById('div_generated').innerHTML += global_div;

		for(var i=0, iMax = headers.length; i < iMax; i++) {
		   if(headers[i].textContent.length > 0){ //si le titre récupéré est pas vide
		   		//Mise en place des noms servant d'ancres pour les jumpto
		   		var first_word = headers[i].textContent.split(" ")[0].toLowerCase(); //recupere le premier mot de chaque titre, et le met en minuscule
		   		first_word = first_word.replace(/\s/g,''); //supprime les espaces en trop
		   		var anchor = "div_"+first_word;

		   	   //Creation des elements li
			   var li_element = '<li class="nav-item"><a href="#'+anchor+'" class="nav-link" style="font-weight:bold">'+headers[i].textContent+'</a></li>';

			   //Ajout des éléments dans la page
			   document.getElementById('generated_summary').innerHTML += li_element;
			}
		}
	}
}
/*
function toggleVisibility(){
	//recuperer le sibling de l'element cliqué (il faut mettre le bouton juste avant le div )
	//et faire le toggle dessus
	
	var d = document.getElementById(id);
    d.style.display = 
       (d.style.display == "block") ? "none":"block";
}
*/





