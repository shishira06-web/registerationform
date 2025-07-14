/*document.addEventListener('DOMContentLoaded', function() {
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

    document.getElementById('email').addEventListener('input', function() {
  const emailInput = this.value;
  const errorSpan = document.getElementById('email-error');
  const emailPattern = /^[^\s@]+@gmail\.com$/;
  if (emailInput && !emailPattern.test(emailInput)) {
    errorSpan.textContent = "Please enter a valid email address.";
    errorSpan.style.display = "block";
  } else {
    errorSpan.textContent = "";
    errorSpan.style.display = "none";
  }
});

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
});try {
      // NEW: send data to backend (POST)
      const res = await fetch(reqres-free-v1, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const saved = await res.json();
      console.log('✅ Saved to server:', saved);
      alert('Form submitted successfully!');
      form.reset();                     // clear form on success
    } catch (err) {
      console.error(err);
      alert('❌ Could not submit form. Please try again.');
    }
  ;

  /* ---------- INITIAL LOAD (GET) ---------- *//*
  // NEW: fetch previously registered patients just once on page load
  (async function loadPatients() {
    try {
      const res = await fetch(reqres-free-v1); // GET
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const json = await res.json();
      console.log('📋 Existing patients:', json);
      // You could also render these records into a table or list here
    } catch (err) {
      console.warn('Could not load patients:', err);
    }
  })();
*/
// ――― constants (keep at the top)
const API_URL = 'https://reqres.in/api/users';   // any valid endpoint
const API_KEY = 'reqres-free-v1';                // mock key for reqres

// ――― inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- POST on form submit ---------------- */
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect inputs
    const form = e.target;
    const data = {
      fullName:  form.querySelector('input[placeholder="Enter your name"]').value,
      dob:       form.querySelector('input[type="date"]').value,
      email:     form.querySelector('input[type="email"]').value,
      mobile:    form.querySelector('input[type="tel"]').value,
      gender:    form.querySelector('input[name="gender"]:checked')?.value || '',
      age:       form.querySelector('input[type="number"]').value,
      aadhar:    form.querySelector('input[placeholder="Enter your Aadhar Number"]').value,
      state:     form.querySelector('input[placeholder="Enter your State"]').value,
      address:   form.querySelector('input[placeholder="Enter your Address"]').value,
      insurance: form.querySelector('input[placeholder="Type Yes or No"]').value,
      timeSlot:  form.querySelector('select').value,
      symptoms:  form.querySelector('textarea').value,
      consent:   form.querySelector('input[type="checkbox"]').checked
    };

    /* ---- minimal inline validation ---- */
    if (!data.consent) {
      alert('Please confirm the information is accurate.');
      return;
    }

    // Optional: live Gmail-only check
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    const errorSpan    = document.getElementById('email-error');
    if (!emailPattern.test(data.email)) {
      if (errorSpan) errorSpan.textContent = 'Please enter a valid Gmail address.';
      return;
    } else if (errorSpan) {
      errorSpan.textContent = '';
    }

    /* ---- POST request with API key ---- */
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY           //  ← required by reqres
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(`Server ${response.status}`);
      const saved = await response.json();
      console.log('✅ Server response:', saved);
      alert('Form submitted successfully!');
      form.reset();                      // clear inputs after success
    } catch (err) {
      console.error('❌ POST failed:', err);
      alert('There was an error submitting the form.');
    }
  });

});
