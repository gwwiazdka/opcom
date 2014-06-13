$(document).ready(function(){
	
	$.ajax({
	    type: "POST",
	    data: {
	      action:'show'
	    },
	    url: "todoHandler.php",
	    dataType: "html",
	    success: function(data) {
	      $('#list').html(data);
	    }
    });  
    
     $('body').on('click','.add',function(){
    	$('#form').css('display','block');
    	$('#name').val('');
    	$('#date').val('0000-00-00');
    	$(this).removeClass().addClass('addaction').html('Zapisz');
    });
    
    $('body').on('click','.addaction',function(){
    	$('#form').css('display','none');
    	$(this).removeClass().addClass('add').html('Dodaj');
    	var data={name:$('#name').val(),date:$('#date').val()};

    	$.ajax({
		    type: "POST",
		    data: {
		      action:'add',
		      content:data
		    },
		    url: "todoHandler.php",
		    dataType: "html",
		    success: function(data) {
		      $('#list').html(data);
		    }
    	});
    });
    
    
	$('body').on('click','.edit',function(){
		var id = $(this).attr('id');
		$(this).removeClass().addClass('save').html('Zapisz');
		var content = $('p#'+id+'.name').html();
		var contentdate = $('p#'+id+'.date').html();
		$('#'+id+'.name').html('<input type="text" id="editname"/>');
		$('#'+id+'.date').html('<input type="text" id="editdate"/>');
		$('#editname').val(content);
		$('#editdate').val(contentdate);
	});
	
	$('body').on('click','.save',function(){
		var id = $(this).attr('id');
		var data={name:$('#editname').val(), id:$(this).attr('id'),date:$('#editdate').val()};
		$.ajax({
		    type: "POST",
		    data: {
		      action:'edit',
		      content:data
		    },
		    url: "todoHandler.php",
		    dataType: "html",
		    success: function(data) {
		      $('#list').html(data);
		    }
    	}); 
    	$(this).removeClass().addClass('edit').html('Edytuj');
	});
	
	$('body').on('click','.delete',function(){
    	var data={id:$(this).attr('id')};
    	$.ajax({
		    type: "POST",
		    data: {
		      action:'delete',
		      content:data
		    },
		    url: "todoHandler.php",
		    dataType: "html",
		    success: function(data) {
		      $('#list').html(data);
		    }
    	});
    });
    
    $('body').on('click','.dane',function(){
    	var data={id:$(this).attr('id')};
    	$.ajax({
		    type: "POST",
		    data: {
		      action:'dane',
		      content:data
		    },
		    url: "todoHandler.php",
		    dataType: "html",
		    success: function(data) {
		      $('#list').html(data);
		    }
    	});
    });
    
     $('body').on('click','.notdane',function(){
    	var data = {id:$(this).attr('id')};
    	$.ajax({
		    type: "POST",
		    data: {
		      action:'notdane',
		      content:data
		    },
		    url: "todoHandler.php",
		    dataType: "html",
		    success: function(data) {
		      $('#list').html(data);
		    }
    	});
    });
	
});
