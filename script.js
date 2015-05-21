$(function() {
  var trigger = $('.js-trigger');
  var triggerTarget = $('.js-trigger-target');

  trigger.find(triggerTarget).addClass("is-noise");
  trigger.on("click", function() {
    $(this).find(triggerTarget).removeClass("is-noise");
  });
});
