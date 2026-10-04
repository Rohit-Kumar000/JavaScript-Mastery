const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");

const message = document.getElementById("message");

const avatar = document.getElementById("avatar");
const nameElement = document.getElementById("name");
const usernameElement = document.getElementById("username");
const bio = document.getElementById("bio");

const locationElement = document.getElementById("location");
const company = document.getElementById("company");
const website = document.getElementById("website");
const joined = document.getElementById("joined");

const repositories = document.getElementById("repositories");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const gists = document.getElementById("gists");

const profileLink = document.getElementById("profileLink");


// GitHub API
const API_URL = "https://api.github.com/users/";


// Get GitHub User
async function getGitHubUser(user) {

    if (user === "") {
        message.textContent = "Please enter a GitHub username.";
        return;
    }

    try {

        message.textContent = "Searching GitHub...";

        const response = await fetch(
            API_URL + encodeURIComponent(user)
        );

        console.log("Response:", response);

        if (!response.ok) {

            if (response.status === 404) {
                throw new Error("GitHub user not found.");
            }

            if (response.status === 403) {
                throw new Error("GitHub API rate limit exceeded.");
            }

            throw new Error("Something went wrong.");
        }


        const data = await response.json();

        console.log("GitHub Data:", data);


        // Profile
        avatar.src = data.avatar_url;

        nameElement.textContent =
            data.name || data.login;

        usernameElement.textContent =
            `@${data.login}`;

        usernameElement.href =
            data.html_url;

        bio.textContent =
            data.bio || "No bio available.";


        // Location
        locationElement.textContent =
            data.location || "Not available";


        // Company
        company.textContent =
            data.company || "Not available";


        // Website
        website.textContent =
            data.blog || "Not available";


        // Joined Date
        const joinedDate =
            new Date(data.created_at);

        joined.textContent =
            joinedDate.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });


        // Statistics
        repositories.textContent =
            data.public_repos;

        followers.textContent =
            data.followers;

        following.textContent =
            data.following;

        gists.textContent =
            data.public_gists;


        // GitHub Profile
        profileLink.href =
            data.html_url;


        message.textContent =
            `Profile found: ${data.login}`;

    }
    catch (error) {

        console.error("Error:", error);

        message.textContent =
            error.message;
    }
}


// Search Button
searchBtn.addEventListener("click", function () {

    const user =
        usernameInput.value.trim();

    getGitHubUser(user);

});


// Enter Key
usernameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const user =
            usernameInput.value.trim();

        getGitHubUser(user);
    }

});