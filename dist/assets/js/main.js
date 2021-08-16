$(function () {

  $('.main__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.main__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.active[tab-content]').removeClass('active').hide();
    $('.main__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    $('[tab-content="' + id + '"]').addClass('active').fadeIn();
    return false;
  });

});