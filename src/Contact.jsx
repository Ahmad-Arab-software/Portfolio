import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState(""); // State to display the form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    // Prepare form data to send to Web3Forms
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "a756c955-d052-41aa-99f5-5dc8e75498c9"); // Your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset the form after success
      } else {
        setResult(resultData.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error sending the message.");
    }
  };

  return (
    <div
      id="contact"
      className="bg-[#f2fa9b] w-full h-full px-4 sm:px-8 lg:px-16 py-12 rounded-2xl shadow-lg flex flex-col lg:flex-row items-center relative"
    >
      {/* Left: Contact Info */}
      <div className="flex-1 text-left mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[100px] font-cooper text-[#1f2e13] mb-4">
          Kom in Contact
        </h1>
        <p className="text-md mb-4">
          Als je geïnteresseerd bent om samen te werken, vul dan het formulier
          aan de zijkant in met wat informatie over je project, en ik zal zo
          snel mogelijk reageren. Geef me alstublieft een paar dagen de tijd om
          te antwoorden.
        </p>
        <div>
          <p className="font-bold text-lg">Naam</p>
          <p>Ahmad Arab</p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-lg">Adres</p>
          <p>Rotterdam, Krimpen aan den IJssel,Vliegerzeil 7</p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-lg">E-mail</p>
          <p>ah.arab50@gmail.com</p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Stuur mij een bericht
        </h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Naam"
            value={formData.name}
            onChange={handleChange}
            className="border border-transparent outline outline-2 outline-[#1f2e13] bg-transparent rounded-lg p-2 placeholder-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="border border-transparent outline outline-2 outline-[#1f2e13] bg-transparent rounded-lg p-2 placeholder-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Bericht"
            value={formData.message}
            onChange={handleChange}
            className="border border-transparent outline outline-2 outline-[#1f2e13] bg-transparent rounded-lg p-2 placeholder-gray-600"
            rows="5"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#dce57d] text-[#1f2e13] rounded-lg border-b-4 border-[#1f2e13] hover:underline font-bold"
          >
            Verzenden
          </button>
        </form>
        <span>{result}</span> {/* Show result message */}
      </div>
    </div>
  );
};

export default Contact;
