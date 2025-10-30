// MENU HAMBÚRGUER RESPONSIVO
const hamburguer = document.getElementById("hamburguer");
const navLinks = document.getElementById("navLinks");

hamburguer.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// FECHAR MENU AO CLICAR EM UM LINK (MOBILE)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 720) {
      navLinks.classList.remove("active");
    }
  });
});

// FORMULÁRIO DE CONTATO (SIMULAÇÃO)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "✅ Mensagem enviada com sucesso!";
    formMsg.style.color = "green";
    form.reset();
  });
}
