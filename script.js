function startCountdown()
{
    const targetDateInput = document.getElementById('target-date').value;
    const targetDate = new Date(targetDateInput);
  
    if (isNaN(targetDate)) {
      alert('Please enter a valid date and time.');
      return;
    }
  
    const timerElement = document.getElementById('timer');
  
    function updateCountdown() {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        timerElement.textContent = 'Countdown Complete!';
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    updateCountdown(); 
    const interval = setInterval(updateCountdown, 1000);
  };
  
