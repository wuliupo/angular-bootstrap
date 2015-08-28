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