$(document).on("pageinit", "#pullersBank", function( event ) {
  var bank = localStorage.getItem('wcs_bankChosen');
});

$(document).on('click', '#pullers div#bankChoices button', function() {
  localStorage.setItem('wcs_bankChosen', $(this).text());
});