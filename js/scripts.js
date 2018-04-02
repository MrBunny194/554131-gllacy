var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".feedback-form")
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".feedback-form-close");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var comment = popup.querySelector("[name=user-comment]");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-on");
    login.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-on");
    popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function(event) {
  if (!login.value || !email.value || !comment.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } 
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        if(popup.classList.contains("modal-show") && overlay.classList.contains("modal-overlay-on")) {
            popup.classList.remove("modal-show");
            overlay.classList.remove("modal-overlay-on");
            popup.classList.remove("modal-error");
        }
    }
});