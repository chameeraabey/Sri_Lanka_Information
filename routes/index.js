
var infoJson=require('../info.json');

var embed = require("embed-video");



//Routes

//Home route
exports.home=function(req,res){

	var places=infoJson.places;

	res.render('home',{
		title:'Destinations',
		places:places
	});
};


//single place route

exports.single=function(req,res){

	var visit_no=req.params.visit_no;
	//res.send('This is the page for visit '+visit_no);

	var places=infoJson.places;

	if(visit_no>=1 && visit_no<=6){

		var place=places[visit_no-1];
		var title=place.title;

		var embedHTML = embed(place.other);

		res.render('place_single',{
		title:title,
		places:places,
		place:place,
		video:embedHTML
		});
	}else{
		res.render('notFound',{
			places:places,
			title:'This is an invalid page!'
		});
	}

	
};

//Weather route
exports.wheather=function(req,res){
	var places=infoJson.places;

	res.render('weather',{
		title:'Weather',
		places:places
	});
};

//Page not found route
exports.notFound=function(req,res){

	var places=infoJson.places;
	
	res.render('notFound',{
			places:places,
			title:'This is an invalid page!'
	});
};
