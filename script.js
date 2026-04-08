const DateTime = luxon.DateTime;

// setup datepicker
flatpickr("#dateInput", {
  dateFormat: "Y-m-d",
  minDate: "2006-01-01",
  maxDate: "2026-12-31"
});

// ambil element
const btn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const input = document.getElementById("dateInput").value;

  // validasi kosong
  if (!input) {
    result.textContent = "Please select a date";
    return;
  }

  const birthDate = DateTime.fromISO(input);
  const now = DateTime.now();

  // validasi masa depan
  if (birthDate > now) {
    result.textContent = "Birth date cannot be in the future";
    return;
  }

  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

  result.textContent = `You are ${Math.floor(diff.years)} years ${Math.floor(diff.months)} months ${Math.floor(diff.days)} days old`;
});