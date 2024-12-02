document.getElementById('reminderBtn').addEventListener('click', function() {
  const modal = document.getElementById('reminderModal');
  modal.style.display = 'block';
  modal.style.opacity = '0';
  modal.offsetHeight; // Trigger reflow to restart the animation
  modal.style.animation = 'fadeIn 0.3s forwards';

  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.transform = 'scale(0.9)';
  modalContent.offsetHeight; // Trigger reflow
  modalContent.style.animation = 'scaleIn 0.3s forwards';
});

document.querySelector('.close').addEventListener('click', function() {
  const modal = document.getElementById('reminderModal');
  modal.style.animation = 'fadeOut 0.3s forwards';

  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.animation = 'scaleOut 0.3s forwards';

  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // Wait for the animation to finish before hiding the modal
});

// Close modal if user clicks outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('reminderModal')) {
    const modal = document.getElementById('reminderModal');
    modal.style.animation = 'fadeOut 0.3s forwards';

    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'scaleOut 0.3s forwards';

    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
});
