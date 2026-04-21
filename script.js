// ফর্ম ওপেন করার জন্য
function openForm() {
    document.getElementById("registrationForm").style.display = "block";
}

// ফর্ম বন্ধ করার জন্য
function closeForm() {
    document.getElementById("registrationForm").style.display = "none";
}

// ইউজার যদি ফর্মের বাইরে ক্লিক করে তবে সেটি বন্ধ হবে
window.onclick = function(event) {
    var modal = document.getElementById("registrationForm");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function copyEmail() {
    var email = "mdhanifhasan80@gmail.com"; // এখানে আপনার আসল ইমেইল দিন
    navigator.clipboard.writeText(email).then(function() {
        alert("ইমেইল এড্রেসটি কপি হয়েছে: " + email);
    }, function(err) {
        console.error('কপি করা সম্ভব হয়নি: ', err);
    });
}