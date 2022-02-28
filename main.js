const navActiveBtn = document.querySelector(".page_menuIcon");
const navBar = document.querySelector(".main_nav");
const tbody = document.querySelector("tbody");
// navBar active
navActiveBtn.addEventListener("click", () => {
    if (navBar.className === "main_nav") {
        navBar.classList.add("active");
    } else {
        navBar.classList.remove("active");
    }
});

// userData
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(function (json) {
        json.forEach((data) => {
            let { name, email, phone, company, website } = data;
            let newTr = document.createElement("tr");
            let nameTd = document.createElement("td");
            let emailTd = document.createElement("td");
            let phoneTd = document.createElement("td");
            let companyId = document.createElement("td");
            let websiteTd = document.createElement("td");

            nameTd.innerText = name;
            emailTd.innerText = email;
            phoneTd.innerText = phone;
            companyId.innerText = company.name;
            websiteTd.innerText = website;

            newTr.appendChild(nameTd);
            newTr.appendChild(emailTd);
            newTr.appendChild(phoneTd);
            newTr.appendChild(companyId);
            newTr.appendChild(websiteTd);

            tbody.appendChild(newTr);
        });
    });

// chart
new Chart(document.getElementById("line-chart"), {
    type: "line",
    data: {
        labels: ["May 1", "May 3", "May 5", "May 7", "May9", "May11", "May13"],
        datasets: [
            {
                data: [100, 300, 280, 170, 170, 290, 380, 200],
                label: "value",
                borderColor: "#3e95cd",
                backgroundColor: "#cfe2f7",
                fill: true,
            },
        ],
    },
});

new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "value (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [200, 300, 330, 120, 390, 200],
            },
        ],
    },
    options: {
        legend: { display: false },

        title: {
            display: true,
        },
    },
});
