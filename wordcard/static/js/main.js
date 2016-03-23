var audio = $("#audio")[0];

$(document).ready(function() {
  audio.load();
  $(".audioBtn").click(audioBtnAction);
  $("#carouselWrapper").swipeleft(nextCard);
  $("#carouselWrapper").swiperight(preCard);
  $('.answerBtn').click(showAnswerAction);
});

var nextCard = function() {
  pause();
  $('.answerContainer').slideUp();
  $('#carouselBox').carousel('next');
}

var preCard = function() {
  pause();
  $('.answerContainer').slideUp();
  $('#carouselBox').carousel('prev');
}

var showAnswerAction = function() {
  var answerContainer = $($(this).siblings('.answerContainer')[0]);
  var answerInner = answerContainer.children(".answerInner");
  answerContainer.slideToggle();
}

var audioBtnAction = function() {
  if (audio.paused) {
  	var st = parseFloat($(this).attr("st"));
  	var duration = parseFloat($(this).attr("duration"));
  	playWord(st, duration);
  } else {
  	pause();
  }
}

var setStartTime = function(st) {
  audio.currentTime = st;
}

var play = function() {
  if (!audio.paused)
  	return false;
  audio.play();
}

var playWord = function(st, duration) {
  setStartTime(st);
  play();
  setTimeout("pause()", duration);
}

var pause = function() {
  if (audio.paused)
  	return false;
  audio.pause();
}