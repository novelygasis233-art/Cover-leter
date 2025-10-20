// 🗓️ Auto-fill today's date
document.getElementById("dateField").value = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// 📧 Email icon acts as hidden print button
document.getElementById("printButton").addEventListener("click", () => {
  window.print();
});
