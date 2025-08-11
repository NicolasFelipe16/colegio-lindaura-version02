const big_lists = document.querySelectorAll('.big-list');
const see_more_buttons = document.querySelectorAll('.see-more-button');

big_lists.forEach((big_list, index) => {
  const see_more_button = see_more_buttons[index];
  if (see_more_button) {
    see_more_button.addEventListener('click', () => {
      big_list.classList.toggle('opened');
    });
  }
});
