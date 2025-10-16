import React, { useState } from "react";
import styles from "./ContactForm.module.css";

interface ContactProps {
  className?: string;
}

const ContactForm: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "phone") {
        const numericValue = value.replace(/\D/g, "");
        return { ...prev, [name]: numericValue };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      const data = await response.json();
      setStatus(data.message || "Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <form
      className={`${styles.form} ${className || ""}`}
      onSubmit={handleSubmit}
    >
      <label>
        Nome
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu Nome"
          required
        />
      </label>

      <label>
        E-mail
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Digite seu Email"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Telefone
        <input
          type="number"
          name="phone"
          value={formData.phone}
          placeholder="Digite seu Telefone"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Mensagem
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite o assunto"
          required
        />
      </label>

      <button type="submit" disabled={status === "Enviando..."}>
        {status === "Enviando..." ? "Enviando..." : "Enviar"}
      </button>

      {status && (
        <p
          className={`${styles.status} ${
            status.includes("Erro")
              ? styles["status-error"]
              : styles["status-success"]
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
