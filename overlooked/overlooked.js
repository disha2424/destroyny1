function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  function nextModal(currentModalIndex) {
    closeModal(`modal${currentModalIndex}`);
    // Calculate next modal index, looping back to the first modal if at the end
    const nextIndex = (currentModalIndex % 8) + 1; // There are 8 modals
    openModal(`modal${nextIndex}`);
  }
  
  // Close the modals when the user clicks anywhere outside of the modal content
  window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    }
  };

  let currentImageIndex = 0;
  const switcherImages = [
      'bill0.jpg', // First image
      'bill1.png', // Second image
      'bill2.png', // Third image
      'bill3.png'  // Fourth image
  ];
  
  function switchImage() {
      const imageElement = document.getElementById('switcher-image');
  
      // Check if the current image is bill3
      if (currentImageIndex === 3) {
          // Start the falling animation
          imageElement.classList.add('fall');
  
          // Wait for the animation to finish before stopping
          imageElement.addEventListener('animationend', () => {
              // Set the image to empty or hide it after falling
              imageElement.src = ''; // Optionally set to a placeholder image
              imageElement.classList.remove('fall'); // Remove animation class
              // Optionally set currentImageIndex to a state that indicates no image should show
              currentImageIndex = -1; // Or just leave it as is
          }, { once: true }); // Ensure this only runs once per click
      } else if (currentImageIndex >= 0) {
          currentImageIndex++;
          imageElement.src = switcherImages[currentImageIndex];
      }
  }
    
