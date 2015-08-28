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
	if(oneSection.is(":checked")){
		sections.addClass('hide');
		$('#'+(location.hash||'overview').replace('#/','')).removeClass('hide');
	}else{
		sections.removeClass('hide');
	}
});
$('.bs-sidenav a, .navbar-nav a, .navbar-brand').click(function(){
	var target=$(this).attr('href');
	if(!oneSection.is(":checked")||!target)return;
	sections.addClass('hide');
	$(target).removeClass('hide');
});
oneSection.click();