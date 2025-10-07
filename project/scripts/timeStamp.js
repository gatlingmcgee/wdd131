/* ---------------------------Timestamp----------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    document.getElementById('submissionTime').value = formattedDate;
    console.log(formattedDate);
});