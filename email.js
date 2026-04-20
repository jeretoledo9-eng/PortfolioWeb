const form = document.getElementById("contact-form-1");

emailjs.init("Pm8vsrJnkff744-ts");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send("service_7x4eywr", "template_s69tf8f", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    })
    .then(() => {
      alert("Mensaje enviado correctamente 🚀");
      form.reset();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
