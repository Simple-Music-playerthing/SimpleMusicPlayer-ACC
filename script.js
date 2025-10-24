
// All of this essentially just allows us to change between the player tab and the playlist tab using the queue button
// there's supposed to be an animation, but I didn't get to it on time nor do I even know how to apparently since js
// doesn't allow transitions between opacities or background gradients xd

function queueTransition() {
  const playerBody = document.getElementById('player-body');
  const queue = document.getElementById('queue');
  const back = document.getElementById('back_button');
  let track_nav = document.getElementsByClassName('track_nav')


  // Change to a new gradient
  playerBody.style.opacity = "0.2";

  // Hide Queue button
  queue.style.display = "none";

  // Show Back2Player Button
  back.style.display = "block";

}

function backTransition() {
  const playerBody = document.getElementById('player-body');
  const queue = document.getElementById('queue');
  const back = document.getElementById('back_button');

  // Change back to previous, player's gradient
  playerBody.style.opacity = "1";

  // Hide Back Button
  back.style.display = "none";

  // Show Queue Button
  queue.style.display = "block";

}
