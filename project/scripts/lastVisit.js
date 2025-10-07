/* ---------------------------Last Visit Date----------------------------- */

const lastVisitDate = localStorage.getItem("lastVisitDate");

if (lastVisitDate) {
    const timeDiff = Date.now() - new Date(lastVisitDate);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    const welcomeMessage = `You last visited ${daysDiff} days ago.`;
    document.querySelector(".message").textContent = welcomeMessage;
}

localStorage.setItem("lastVisitDate", new Date().toISOString());
