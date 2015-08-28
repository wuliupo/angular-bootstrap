$('code').each(function(){
	var code=$(this);
	var lang=code.attr('data-language');
	var target=code.attr('data-target');
	if(!lang||!target){
		return;
	}
	if(lang==='html'){
		code.text($('[ng-controller="'+target+'"]').parent().html().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
	} else {
		code.text('<script>\n'+$('#'+target).html().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')+'\n</script>');
	}
});

var sections=$('.container section,#overview');
var oneSection=$('#oneSection');
oneSection.click(function(){
	if(oneSection.is(":checked")&&location.hash){
		sections.addClass('hide');
		$('#'+location.hash.replace('#/','')).removeClass('hide');
	}else{
		sections.removeClass('hide');
	}
});
$('.bs-sidenav a, .navbar-nav .dropdown-menu a, .navbar-brand').click(function(){
	if(!oneSection.is(":checked"))return;
	sections.addClass('hide');
	$($(this).attr('href')).removeClass('hide');
});