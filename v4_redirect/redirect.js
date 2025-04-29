window.navigation.addEventListener("navigate", (event) => {
    const url = new URL(event.destination.url);
    if (url.pathname.startsWith("/shorts/")) {
        location.href = "https://www.youtube.com/";
    }
})