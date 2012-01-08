$(function() {
	$("#content").replaceWith(Handlebars.templates.resources(res_data));
	$("#wrapper").dashboard({ columns: 3 });
});

$('.item_handle').live('hover', function () {
	$(this).toggleClass('item_hover');
});

$('.item_handle').live('click', function () {
	$(this).toggleClass('open').next().toggle();
});