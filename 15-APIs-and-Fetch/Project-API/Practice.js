/* 1. Random User Project

let data = document.querySelector("#userContainer")

let update = async function name() {
    const response = await fetch("https://randomuser.me/api/")
    const data1 = await response.json();

    const user = data1.results[0];
    

    data.innerHTML = `
    <h2>${user.name.first}</h2>
    <p>${user.name.last}</p>
    <p>${user.email}</p>
`;   

}

update();
*/

/* 2. Weather App


    let input = document.querySelector("#cityInput")
    let button = document.querySelector("#searchBtn")
    let weathershow = document.querySelector("#weatherContainer")

    button.addEventListener("click", async function name() {
            const city = input.value;
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.21&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto");
            const data = await response.json();

            const temperature = data.current.temperature_2m;
            const wind = data.current.wind_speed_10m
            const humidity = data.current.relative_humidity_2m

            weathershow.innerHTML = `<h4>City: ${city}</h4><h4>Temperature: ${temperature}</h4><h4>Condition: ${wind}</h4><h4>Humidity: ${humidity}</h4>`;

    });
*/

/* 3. GitHub User Search


let input = document.querySelector("#cityInput")
let button = document.querySelector("#searchBtn")
let userSearch = document.getElementById("githubUser")

button.addEventListener("click", async function name() {
        const user = input.value;
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();

        const name = data.name;
        const userName = data.login;
        const followers = data.followers;
        const following = data.following;
        const publicRepositories = data.public_repos;

        userSearch.innerHTML = `
        <h3>Name: ${name}</h3>
        <h3>User Name: ${userName}</h3>
        <h3>Followers: ${followers}</h3>
        <h3>Following: ${following}</h3>
        <h3>Public Repository: ${publicRepositories}</h3>
`;
})
*/

/* 4. API Search Project


let input = document.querySelector("#searchInput")
let button = document.querySelector("#searchBtn")
let result = document.getElementById("results")

button.addEventListener("click", async function name() {
    
        let user = input.value;
        result.innerHTML = "";
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${user}`)
        const data = await response.json();

        data.forEach((item) => { 
            result.innerHTML += `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>`;
        });

        
});
*/

/* 5. POST Form Project


let nameInput  = document.querySelector("#name")
let email = document.querySelector("#email")
let number = document.querySelector("#number")
let button = document.querySelector("#submitBtn")
let result = document.querySelector("#result")

button.addEventListener("click", async function name() {

        const userData = {
            name: nameInput.value,
            email: email.value,
            number: number.value
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },  

            body: JSON.stringify(userData)
        });

        const data = await response.json();

        result.innerHTML = `
            <h3>Name: ${data.name}</h3>
            <p>Email: ${data.email}</p>
            <p>Number: ${data.number}</p>
`;
});
*/

/* 6. User List Project


let userList = document.querySelector("#userList")
async function getUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        users.forEach((user) => {
            
            userList.innerHTML += `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
        `;
        });
}

getUsers();
*/

/* 7. Pagination Project


const users = [
    "Rohit Kumar",
    "Aman Singh",
    "Rahul Sharma",
    "Priya Verma",
    "Neha Gupta",
    "Arjun Singh",
    "Riya Sharma",
    "Vikas Kumar",
    "Anjali Verma",
    "Karan Singh",
    "Pooja Sharma",
    "Amit Kumar",
    "Sneha Gupta",
    "Ravi Singh",
    "Simran Kaur"
];

const userList = document.querySelector("#userList");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentPage = 1;
const usersPerPage = 5;

function displayUsers() {

    const start = (currentPage - 1) * usersPerPage;
    const end = start + usersPerPage;

    const currentUsers = users.slice(start, end);

    userList.innerHTML = "";

    currentUsers.forEach((user) => {
        userList.innerHTML += `
            <p>${user}</p>
        `;
    });
}

nextBtn.addEventListener("click", () => {

    const totalPages = Math.ceil(users.length / usersPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        displayUsers();
    }

});

prevBtn.addEventListener("click", () => {

    if (currentPage > 1) {
        currentPage--;
        displayUsers();
    }

});

displayUsers();
*/

/* 8. Loading State


const userList = document.querySelector("#userList")

async function name() {
    userList.innerHTML = `<p>Loading...</p>`;

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();

    userList.innerHTML = "";

    data.forEach((user) => {
        userList.innerHTML += `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.email}/p>
            </div>
        `;
    });
}

name();
*/

/* 9. Error State

const userList = document.querySelector("#userList")

async function name() {
    try{
        userList.innerHTML = "<p>Loading...</p>"
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        userList.innerHTML = "";

        data.forEach((user) => {
        userList.innerHTML += `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.email}/p>
            </div>
        `;
        });

    } catch (error) {
        userList.innerHTML = `
            <p>Failed to load users. Please try again</p>
        `;
        console.log(error);
    }
}
name();
*/

/* 10. Movie Search App


let movieInput = document.querySelector("#movieInput");
let searchBtn = document.querySelector("#searchBtn");
let loading = document.querySelector("#loading");
let movieContainer = document.querySelector("#movieContainer");

searchBtn.addEventListener("click", async function () {

    const movieName = movieInput.value.trim();

    // Empty input
    if (movieName === "") {
        movieContainer.innerHTML = "<p>Please enter a movie name.</p>";
        return;
    }

    // Loading
    loading.innerHTML = "<p>Loading...</p>";
    movieContainer.innerHTML = "";

    try {

        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${movieName}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        loading.innerHTML = "";

        if (data.length === 0) {
            movieContainer.innerHTML = `
                <p>No movies/shows found.</p>
            `;
            return;
        }

        data.forEach((item) => {

            const show = item.show;

            movieContainer.innerHTML += `
                <div class="card">

                    <img 
                        src="${show.image?.medium || ""}" 
                        alt="${show.name}"
                    >

                    <h2>${show.name}</h2>

                    <p>
                        Rating: ${show.rating?.average || "N/A"}
                    </p>

                    <p>
                        Language: ${show.language || "N/A"}
                    </p>

                </div>
            `;
        });

    } catch (error) {

        loading.innerHTML = "";

        movieContainer.innerHTML = `
            <p>Failed to load movies. Please try again.</p>
        `;

        console.log(error);
    }

});
*/