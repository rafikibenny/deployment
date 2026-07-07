const copyButton = document.querySelector("#copyProfile");
const statusMessage = document.querySelector("#statusMessage");

const showStatus = (message) => {
  statusMessage.textContent = message;
  window.clearTimeout(showStatus.timeoutId);
  showStatus.timeoutId = window.setTimeout(() => {
    statusMessage.textContent = "";
  }, 3200);
};

copyButton.addEventListener("click", async () => {
  const profileUrl = window.location.href;

  try {
    await navigator.clipboard.writeText(profileUrl);
    showStatus("Profile link copied.");
  } catch (error) {
    showStatus(profileUrl);
  }
});
