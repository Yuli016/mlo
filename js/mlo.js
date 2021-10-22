
jQuery(function(){

        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+jQuery(this).attr('target')).show();
        });
});
