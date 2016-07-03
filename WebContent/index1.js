var $addBtn = $('button[name=add-btn]');
$addBtn.on('click', function() {
  var $todoInput = $('input[name=todo]');

  $todoInput.val($.trim($todoInput.val()));

  if ($todoInput.val() == '') {
    alert('할일을 입력하세요');
    $todoInput.focus();
    return flase;
  }

  $('.main-list').prepend('<li>' + $todoInput.val() + '<button class="btn btn-danger" onclick="deletBtnClicked(this);">삭제</button></li>');

  $todoInput.val('');

});

function deletBtnClicked(btn) {
  $(btn).parent().remove();
}