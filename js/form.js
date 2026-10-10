const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value; 
  const message = document.querySelector("#message").value;

  if (!name || !email || !subject || !message) {
    alert("Please fill all the fields");
    return;
  }

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  } catch (error) {
    alert("Oops! There was a problem submitting your form.");
  }
});
