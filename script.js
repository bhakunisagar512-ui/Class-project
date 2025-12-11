function searchCity() {
    const input = document.getElementById("searchInput").value.trim();

    if (input === "") {
        alert("Please enter a city name.");
        return;
    }

    // Change only the first card's city name
    document.getElementById("city1").innerText = input;
}
