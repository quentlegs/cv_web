/*Gestion du menu/sommmaire*/
function on_load_body(){
	/*Récupération des noms des menus*/
	const headers = document.querySelectorAll('#h2_title_summary');
	
	if(headers.length > 0){ //si on a pas reussi a recupérer les titres, on affiche pas de menus
		var global_div = '<header class="d-flex justify-content-center py-1" ><ul class="nav nav-pills" id="generated_summary" ></ul></header>';
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
		removeMarginDiv();
	} 
}

var old_element_highlighted = null;
function search_word(){
	unhighlight_words(true);

	var word = document.getElementById("input_searched").value;
	if(word.length !=  0){ //ajouter une petit infobulle quand c'est nul ? 
		var reg = new RegExp(word, "g");
		var doc = document.getElementsByTagName("p"), e, c;
		for (var i = 0; i < doc.length; ++i) {
		  e = doc[i]; 
		  c = e.innerHTML.replace(reg ,
		          "<span class='highlight'>"+word+"</span>"
		          );
		  if (c != e.innerHTML )
		      e.innerHTML = c;
		}
	}
	old_element_highlighted = word;
}


function unhighlight_words(from_js = false){
	var el = document.querySelectorAll('[class="highlight"]')
	if(from_js == false){ //permet de supprimer le champ uniquement quand on clique sur le bouton "annuler"
		document.getElementById("input_searched").value = null;
	}
	for (var j = 0; j < el.length; ++j) {
		el[j].removeAttribute("class");
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

/*permet de supprimer une classe => de la marge quand le menu est affiché ou non*/
function removeMarginDiv(){
	var els = document.querySelectorAll('[class="div_search"]');
	for(var i = 0; i< els.length ; i++){
		els[i].removeAttribute("class");
	}
}





