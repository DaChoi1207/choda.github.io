let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> 
  Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "choda.visitor@gmail.com",
      Password: "18EA283DC754672781231EDAB12877EDB655",
      To: 'choda.visitor@gmail.com',
      From: "choda.visitor@gmail.com",
      Subject: subject.value,
      Body: bodyMessage
  }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            title: "Success!",
            text: "Message sent!",
            icon: "success"
          });
        }
      }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();

  form.reset();
  return false;
});