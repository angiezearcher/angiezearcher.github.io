$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var ideasArray = [];

$("#add").click(function(){	
	addIdea();
});



function addIdea(){		
	var ideaObj ={};
	
	ideaObj.name = $("#name").val();
	ideaObj.idea = $("#idea").val();
	ideaObj.description = $("#description").val();
	
	ideasArray[index] = ideaObj;
	console.log("Add idea "+ideasArray);	
	
	$(".ideatable").append("<tr id="+index+"><th>"+index+"</th><td>"+ideasArray[index].name+"</td><td>"+ideasArray[index].idea+"</td><td>"+ideasArray[index].description+"</td><td><select name='rating' id='"+index+"'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option>)</select></td></tr>");	
	index++;
	}
	
}); 