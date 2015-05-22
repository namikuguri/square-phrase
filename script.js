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

    triggerTarget.toggleClass('is-noise');
    if ($(this).text() == closeWord) {
      $(this).text(openWord);
    } else {
      $(this).text(closeWord);
    };
    trigger.css('cursor', 'inherit');
  });
});
