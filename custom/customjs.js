 $(document).ready(function(){
      $('[data-toggle="popover"]').popover(); 
 });

// rating stars
for (var i=1; i<7; i++){
	$("#input-id" + i.toString()).rating({stars:3, min:0, max:3, step:0.5, size:'sm'});
	$("#input-id"+ i.toString()).on('rating.change', function(event, value, caption) {
    	alert("New value is " + value);
	});
}

function update(picker) {
    document.body.style.backgroundColor = picker.toHEXString();
}
