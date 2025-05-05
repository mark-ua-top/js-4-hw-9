const form = document.querySelector("#form");
const del = document.querySelector("#del");

function addToLocalStorage(userData, key) {
  localStorage.setItem(key, JSON.stringify(userData));
}

function removeAllFromLocalStorage() {
  localStorage.clear();
  PNotify.success({
    text: "Дані успішно видалено.",
    delay: 2000,
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("mail").value;
  const phone = document.getElementById("phone").value;

  if (!email.endsWith("@gmail.com")) {
    PNotify.error({
      text: "пошта формата @gmail.com",
      delay: 3000,
    });
    return;
  }

  if (!phone.startsWith("+380")) {
    PNotify.error({
      text: "номер телефону починається +380",
      delay: 3000,
    });
    return;
  }

  const userForm = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    phone: phone,
    mail: email,
  };

  addToLocalStorage(userForm, "userData");

  PNotify.success({
    text: "Дані збережено!",
    delay: 2000,
  });
});

del.addEventListener("click", (event) => {
  event.preventDefault();
  removeAllFromLocalStorage();
});