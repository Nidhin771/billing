function goToBill() {

  let customer = document.getElementById("customer").value.trim();
  let product = document.getElementById("product").value.trim();
  let price = parseFloat(document.getElementById("price").value);
  let qty = parseInt(document.getElementById("qty").value);

  // Validation
  if (customer === "" || product === "" || isNaN(price) || isNaN(qty)) {
    alert("Please fill all fields!");
    return;
  }

  if (price <= 0 || qty <= 0) {
    alert("Price and Quantity must be greater than zero!");
    return;
  }

  // Calculate total
  let total = price * qty;

  // GST Calculation (18%)
  let gst = total * 0.18;
  let finalTotal = total + gst;

  // Save data to localStorage
  localStorage.setItem("customer", customer);
  localStorage.setItem("product", product);
  localStorage.setItem("price", price.toFixed(2));
  localStorage.setItem("qty", qty);
  localStorage.setItem("total", total.toFixed(2));
  localStorage.setItem("gst", gst.toFixed(2));
  localStorage.setItem("finalTotal", finalTotal.toFixed(2));
  localStorage.setItem("date", new Date().toLocaleDateString());


  // Go to bill page
  window.location.href = "bill.html";
}

/* ---------------- Ripple Touch Effect ---------------- */

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function (e) {

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top = (e.clientY - rect.top) + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});





