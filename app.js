// Modal elements
const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const closeBtn = document.querySelector(".close");

const tabLogin = document.getElementById("tab-login");
const tabSignup = document.getElementById("tab-signup");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Open modal
loginBtn.onclick = () => { modal.style.display = "block"; showForm("login"); }
signupBtn.onclick = () => { modal.style.display = "block"; showForm("signup"); }

// Close modal
closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; }

// Switch tabs
tabLogin.onclick = () => showForm("login");
tabSignup.onclick = () => showForm("signup");

function showForm(type){
  if(type==="login"){
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  } else {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  }
}

// Dummy submit handlers
loginForm.onsubmit = e => {
  e.preventDefault();
  alert("Login Successful (Demo)");
  modal.style.display = "none";
};
signupForm.onsubmit = e => {
  e.preventDefault();
  alert("Signup Successful (Demo)");
  modal.style.display = "none";
};

// --- Expense submit UI handlers ---
const cameraInput = document.getElementById('cameraInput');
const fileInput = document.getElementById('fileInput');
const pasteBtn = document.getElementById('pasteBtn');
const submitExpense = document.getElementById('submitExpense');

cameraInput && cameraInput.addEventListener('change', (e) => {
  const f = e.target.files && e.target.files[0];
  if(!f) return;
  alert('Captured file: ' + f.name + ' (demo)');
});
fileInput && fileInput.addEventListener('change', (e) => {
  const f = e.target.files && e.target.files[0];
  if(!f) return;
  alert('Uploaded file: ' + f.name + ' (demo)');
});

pasteBtn && pasteBtn.addEventListener('click', async () => {
  
  try {
    const text = await navigator.clipboard.readText();
    if(text && text.length){
      // naive parse: look for amount-like text
      const m = text.match(/\d+[\.,]?\d*/);
      if(m) document.getElementById('expAmount').value = m[0];
      document.getElementById('expVendor').value = (text.split('\n')[0] || '').slice(0,60);
      alert('Pasted receipt text (demo). Edit fields and press Submit.');
    } else {
      alert('Clipboard empty or no text available.');
    }
  } catch(err){
    alert('Unable to read clipboard: ' + (err.message || err));
  }
});

submitExpense && submitExpense.addEventListener('click', () => {
  const amount = document.getElementById('expAmount').value;
  const date = document.getElementById('expDate').value;
  const vendor = document.getElementById('expVendor').value;
  const action = document.getElementById('expResponse').value;
  if(!amount || !date || !vendor || !action){
    alert('Please fill amount, date, vendor and choose an action.');
    return;
  }
  // demo: show a summary
  alert(`Expense ${action}: \nAmount: ${amount}\nDate: ${date}\nVendor: ${vendor}`);
});

// Info card click behavior
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-key');
    switch(key){
      case 'employee':
        alert('Open Employee Details (demo)'); break;
      case 'manager':
        alert('Open Manager Team view (demo)'); break;
      case 'history':
        alert('Open Track History (demo)'); break;
      case 'details':
        alert('Open Expense Details (demo)'); break;
      default:
        alert('Action: ' + key);
    }
  });
});
