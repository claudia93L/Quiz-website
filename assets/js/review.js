const starEls = document.querySelectorAll('.star.rating');

starEls.forEach((star) => {
  star.addEventListener('click', function (e) {
    let starEl = e.currentTarget;
    starEl.parentNode.setAttribute('data-stars', starEl.dataset.rating);
  });
});
