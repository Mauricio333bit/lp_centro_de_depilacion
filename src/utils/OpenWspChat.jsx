const openWhatsAppChat = (serviceName = "") => {
  const phoneNumber = "2613422675";
  const message = encodeURIComponent(
    serviceName
      ? `Hola, estoy interesado en el servicio "${serviceName}". ¿Me podrías brindar más información?`
      : "Hola, estoy interesado/a en tus servicios. ¿Me podrías brindar más información?"
  );

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

export default openWhatsAppChat;