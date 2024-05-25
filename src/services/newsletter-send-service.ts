import axios from "axios";

export type NewsLetterEmailSend = {
  nome: string;
  email: string;
  setLoading: (state: boolean) => void;
  setSent: (state: boolean) => void;
};

export const handleSendNewsLetterEmail = async ({
  setLoading,
  setSent,
  email,
  nome,
}: NewsLetterEmailSend) => {
  setLoading(true);

  const url = "https://api.reputacao360.online/api/enviar-email";
  const dadosEmail = {
    to: "ja3328173@gmail.com",
    subject: "Novo inscrito na newsletter da HackyOff",
    body: `Novo e-mail cadastrado na newsletter HackyOff: ${nome} - ${email}`,
    email: "ja3328173@gmail.com",
    password: "pmjh fcjp wmrm fwmy",
    emailFrom: "neroo-newsletter@gokside.site",
    key: "Angola2020*",
  };

  try {
    const resposta = await axios.post(url, dadosEmail, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Email enviado com sucesso!", resposta);
    setSent(true);
    setLoading(false);
  } catch (erro: unknown) {
    console.error("Erro ao enviar email:", erro);

    setLoading(false);
  }
};
