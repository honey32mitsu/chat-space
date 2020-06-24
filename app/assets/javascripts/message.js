$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message">
          <div class="tweet-tag">
            <div class="tweet-name">
              ${message.user_name}
            </div>
            <div class="tweet-time">
              ${message.created_at}
            </div>
          </div>
          <div class="text">
            <p class="text__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="message">
          <div class="tweet-tag">
            <div class="tweet-name">
              ${message.user_name}
            </div>
            <div class="tweet-time">
              ${message.created_at}
            </div>
          </div>
          <div class="text">
            <p class="text__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('.send-point').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});