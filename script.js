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