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
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "") : value,
    }));
    setErrors([]);
    setStatus("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.message.trim().length < 10) {
      setErrors(["A mensagem precisa ter no mínimo 10 caracteres."]);
      return;
    }

    setStatus("Enviando...");
    setErrors([]);

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

      const data = await response.json();

      if (!response.ok) {
        if (Array.isArray(data.message)) {
          setErrors(data.message);
        } else {
          setErrors([data.message || "Erro ao enviar mensagem."]);
        }
        setStatus("");
        return;
      }

      setStatus(data.message || "Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setErrors(["Erro ao enviar mensagem. Tente novamente."]);
      setStatus("");
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
          type="text"
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
          placeholder="Digite sua mensagem"
          required
        />
      </label>

      <button type="submit" disabled={status === "Enviando..."}>
        {status === "Enviando..." ? "Enviando..." : "Enviar"}
      </button>

      {errors.length > 0 && (
        <div className={styles.errorList}>
          {errors.map((err, i) => (
            <p key={i} className={styles.error}>
              {err}
            </p>
          ))}
        </div>
      )}

      {status && errors.length === 0 && (
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
