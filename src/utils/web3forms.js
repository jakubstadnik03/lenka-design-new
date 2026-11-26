// Web3Forms – odesílání kontaktních formulářů.
// Access key je určený pro frontend (veřejný). Poptávky chodí na e-mail
// nastavený ve Web3Forms a zároveň se ukládají do jejich dashboardu,
// takže se žádná poptávka neztratí. Auto-reply se zapíná v dashboardu.
export const WEB3FORMS_ACCESS_KEY = "559eda88-1c29-453d-9e62-cedece447383";

export async function submitWeb3Form(formEl) {
  const formData = new FormData(formEl);
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);

  // Nastaví Reply-To na e-mail zákazníka, i když se pole jmenuje "E-mail"
  // (aby šlo odpovědět přímo z doručené pošty).
  const email = formData.get("E-mail") || formData.get("email");
  if (email) {
    formData.append("replyto", email);
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  return response.json();
}
