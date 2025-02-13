const openWhatsAppChat = (service) => {
  const phoneNumber = "2613422675";
  const message = encodeURIComponent(
    service
      ? `Hola, estoy interesado/a en el servicio "${service.name}". ¿Tenes turnos disponibles?`
      : "Hola, estoy interesado/a en tus servicios. ¿Me podrías brindar más información?"
  );

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

export default openWhatsAppChat;