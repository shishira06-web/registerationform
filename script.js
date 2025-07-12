document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const data = {
      fullName: form.querySelector('input[placeholder="Enter your name"]').value,
      dob: form.querySelector('input[type="date"]').value,
      email: form.querySelector('input[type="email"]').value,
      mobile: form.querySelector('input[type="tel"]').value,
      gender: form.querySelector('input[name="gender"]:checked')?.value || "",
      age: form.querySelector('input[type="number"]').value,
      aadhar: form.querySelector('input[placeholder="Enter your Aadhar Number"]').value,
      state: form.querySelector('input[placeholder="Enter your State"]').value,
      address: form.querySelector('input[placeholder="Enter your Address"]').value,
      healthInsurance: form.querySelector('input[placeholder="Type Yes or No"]').value,
      timeSlot: form.querySelector('select').value,
      symptoms: form.querySelector('textarea').value,
      consent: form.querySelector('input[type="checkbox"]').checked
    };

    // Simple validation (HTML5 already does most, but you can add more here)
    if (!data.consent) {
      alert("Please confirm the information is accurate.");
      return;
    }

    // Log validated data
    console.log("Form Data:", data);
    alert("Form submitted successfully! Check the console for data.");
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // ...existing form logic...

  // Show About section when About link is clicked
  document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.container').style.display = 'none';
    document.getElementById('about-section').style.display = 'block';
  });

  // Back to Registration
  document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('about-section').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
  });
});