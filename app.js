function contact(event) {
  event.preventDefault();
  const loading = document.querySelector("modal__overlay--loading");
  emailjs
    .sendForm(
      "service_p0bb60k",
      "template_u7u5aek",
      event.target,
      "vPtiCxyRZYqa8XExh"
    )
    .then(() => {})
    .catch(() => {
      alert(
        "The service is temporaly un available please contact me at prevdev"
      );
    });
  console.log("k");
}
