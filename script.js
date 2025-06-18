generate.onclick = () => {
  const val = data.value.trim();
  if (val) {
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(val)}`;
    qr.style.display = "block";
  }
    
};
