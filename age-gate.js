document.addEventListener('DOMContentLoaded', function() {
  const GATE_KEY = 'aura_labs_age_verified';
  
  // Check if user has already verified
  if (localStorage.getItem(GATE_KEY)) {
    document.body.style.display = 'block';
    return;
  }
  
  // Show gate
  const gate = document.getElementById('age-gate');
  if (gate) {
    gate.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  // Handle Enter button
  const enterBtn = document.getElementById('age-gate-enter');
  if (enterBtn) {
    enterBtn.addEventListener('click', function() {
      const checkbox = document.getElementById('age-gate-agree');
      if (checkbox && checkbox.checked) {
        localStorage.setItem(GATE_KEY, 'true');
        gate.style.display = 'none';
        document.body.style.overflow = 'auto';
      } else {
        alert('Please confirm the agreement to continue.');
      }
    });
  }
  
  // Handle Decline button
  const declineBtn = document.getElementById('age-gate-decline');
  if (declineBtn) {
    declineBtn.addEventListener('click', function() {
      window.location.href = 'https://www.google.com';
    });
  }
  
  // Handle checkbox state
  const checkbox = document.getElementById('age-gate-agree');
  if (checkbox) {
    checkbox.addEventListener('change', function() {
      enterBtn.style.opacity = this.checked ? '1' : '0.5';
      enterBtn.style.cursor = this.checked ? 'pointer' : 'not-allowed';
      enterBtn.disabled = !this.checked;
    });
    // Set initial state
    enterBtn.style.opacity = '0.5';
    enterBtn.disabled = true;
  }
});
