

$( document ).ready(function() {
    console.log( "ready!" );
	
    $(".custom-control-input").change(function() {

        input = $(this);
        context = input.attr('context').split('-');
            
        if (input.attr('id') == input.attr('context') + '-all') {
            input.closest('ul').find('input').not(input).each(function() {
                $(this).prop('checked', input.prop('checked'));
                if (input.prop('checked')) {
                    for (i = 0; i < context.length; i++) {
                        $("div[" + context[i] + "='" + $(this).attr('id') + "']").fadeIn();
                    }
                } else {
                    for (i = 0; i < context.length; i++) {
                        $("div[" + context[i] + "='" + $(this).attr('id') + "']").fadeOut();
                    }
                }
            })
        } else {
            if (!input.prop('checked')) {
                $("input#" + input.attr('context') + "-all").prop('checked', false);
            } else {

                index = 0;
                checked = 0;
                input.closest('ul').find('input').each(function() {
                    if ($(this).attr('id') != input.attr('context') + '-all') {
                        index = index + 1;
                        if ($(this).prop('checked')) {
                           checked = checked + 1;
                        }
                    }
                })
                if (index == checked) {
                   $("input#" + input.attr('context') + "-all").prop('checked', true);
                }
            }

            for (i = 0; i < context.length; i++) {
                $("div[" + context[i] + "='" + input.attr('id') + "']").fadeToggle("slow");
            }
        }
    });



    $('a.see').on('click',function() {

	      a = $(this)

	      if (a.text() != a.attr('data-text')) {
	          text = a.attr('data-text')
	          a.attr('data-text', a.text())
	          a.text(text)
	      }

	      toggle = a.attr('data-toggle')
	      section = a.attr('data-section')
        $("div[" + toggle + "='" + a.attr(toggle) + "']").find("div." + section).each(function() {
	          if ($(this).hasClass("d-none")) {
	              $(this).removeClass("d-none").fadeIn();
	          } else {
	              $(this).addClass("d-none").fadeOut();
	          }
	      });
    
    });

    $('[data-toggle="tooltip"]').tooltip({html:true})

});


