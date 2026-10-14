
const API_URL = "https://api.tvmaze.com/search/shows?q=";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const movieGrid = document.getElementById("movieGrid");
const statusBox = document.getElementById("status");
const resultsTitle = document.getElementById("resultsTitle");

async function searchMovies(query) {
    if (!query.trim()) {
        statusBox.textContent = "Please enter a name to search.";
        return;
    }

    statusBox.textContent = "Searching...";
    movieGrid.replaceChildren();

    try {
        const response = await fetch(
            API_URL + encodeURIComponent(query.trim())
        );

        if (!response.ok) {
            throw new Error("Unable to fetch results.");
        }

        const data = await response.json();

        resultsTitle.textContent = `Results for "${query}"`;

        if (data.length === 0) {
            statusBox.textContent = "No shows found. Try another search.";
            return;
        }

        const fragment = document.createDocumentFragment();

        data.forEach(({ show }) => {
            const card = document.createElement("article");
            card.className = "movie-card";

            const posterWrap = document.createElement("div");
            posterWrap.className = "poster-wrap";

            if (show.image?.medium) {
                const image = document.createElement("img");
                image.className = "poster";
                image.src = show.image.medium;
                image.alt = `${show.name} poster`;
                image.loading = "lazy";
                posterWrap.append(image);
            } else {
                const placeholder = document.createElement("div");
                placeholder.className = "poster-placeholder";
                placeholder.textContent = "No image available";
                posterWrap.append(placeholder);
            }

            const info = document.createElement("div");
            info.className = "movie-info";

            const title = document.createElement("h3");
            title.textContent = show.name;

            const meta = document.createElement("div");
            meta.className = "movie-meta";

            const year = document.createElement("span");
            year.textContent = show.premiered
                ? show.premiered.slice(0, 4)
                : "Year N/A";

            const rating = document.createElement("span");
            rating.textContent = `⭐ ${show.rating?.average ?? "N/A"}`;

            meta.append(year, rating);
            info.append(title, meta);
            card.append(posterWrap, info);
            fragment.append(card);
        });

        movieGrid.append(fragment);
        statusBox.textContent = `${data.length} results found.`;

    } catch (error) {
        console.error(error);
        statusBox.textContent =
            "Could not connect to the API. Check your internet and try again.";
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchMovies(searchInput.value);
});

document.querySelectorAll(".suggestion").forEach((button) => {
    button.addEventListener("click", () => {
        searchInput.value = button.dataset.query;
        searchMovies(button.dataset.query);
    });
});
