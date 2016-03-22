// The following jQuery function displays a description of each project
// once its title is hovered. The description is shown over the project's
// image.

$(".project-header").hover(function(){
	/* The following two lines save the dimensions of the project image
	to the variables width and height */
	var width = ($(this).parent()).find(".project-img").width();
	var height = ($(this).parent()).find(".project-img").height();
	/* The parent of the hovered project title is found, then its
	child "project-summary" is found and given the dimensions of
	the project's image. */ 
	($(this).parent()).find(".project-summary").css({"width": width, "height": height});
	/* The project's summary is shown as long as the title is hovered */
	($(this).parent()).find(".project-summary").slideToggle();
})