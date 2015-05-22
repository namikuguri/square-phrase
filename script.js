$(function() {
  var trigger = $('.js-trigger');
  var triggerTarget = $('.js-trigger-target');
  var triggerMachineGun = $('.js-trigger-machine-gun');

  trigger.find(triggerTarget).addClass('is-noise');
  trigger.on('click', function() {
    $(this).find(triggerTarget).removeClass('is-noise');
    $(this).css('cursor', 'inherit');
  });
  triggerMachineGun.on('click', function() {
    var openWord = 'すべて開く';
    var closeWord = 'すべて隠す';

    if ($(this).text() == openWord) {
      triggerTarget.removeClass('is-noise');
      $(this).text(closeWord);
      trigger.css('cursor', 'inherit');
    } else {
      triggerTarget.addClass('is-noise');
      $(this).text(openWord);
      trigger.css('cursor', 'pointer');
    };
  });
});
