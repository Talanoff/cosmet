window.$ = require('jquery');

(function () {

  let $formControl = $('.form-control');
  $formControl.on('focus', function () {
    $formControl.parent().addClass('has-content');
  });

  $formControl.on('blur', function() {
    if ($(this).val() === '') {
      $formControl.parent().removeClass('has-content');
    }
  });

})($);