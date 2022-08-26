import { VIEW_ALL, DISPLAY_ID, INPUT_ID } from "../../data/constants.js";

export const getAllHandler = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((users) => {
      console.log(users);
      // get parent getElement
      const parentEl = document.getElementById(DISPLAY_ID);

      if (parentEl.children > [0]) {
        parentEl.innerHTML = "";
      }
      users.forEach((user) => {
        //creating a container for each of the users
        const container = document.createElement("div");
        container.className = "user-container";
        container.id = "user-container-id";
        parentEl.appendChild(container);

        //creating a header with their name for each of the users
        const header = document.createElement("h2");
        header.className = "user-header";
        header.id = "user-header-id";
        header.innerHTML = "Name : " + `${user.name}`;
        container.appendChild(header);

        //creating a ul to embed all the details of the user
        const allDetails = document.createElement("ul");
        allDetails.className = "user-allDetails";
        allDetails.id = "user-allDetails-id";
        container.appendChild(allDetails);

        // embedding user-name
        const userName = document.createElement("li");
        userName.innerHTML = "User Name : " + `${user.username}`;
        allDetails.appendChild(userName);

        // embedding user-id
        const userId = document.createElement("li");
        userId.innerHTML = "Id-NUmber : " + `${user.id}`;
        allDetails.appendChild(userId);

        // embedding the user city
        const userCity = document.createElement("li");
        userCity.innerHTML = "City : " + `${user.address.city}`;
        allDetails.appendChild(userCity);

        // embedding user phone number
        const userPhone = document.createElement("li");
        userPhone.innerHTML = "Phone Number : " + `${user.phone}`;
        allDetails.appendChild(userPhone);

        // embedding user email
        const userEmail = document.createElement("li");
        userEmail.innerHTML = "Email : " + `${user.email}`;
        allDetails.appendChild(userEmail);

        // embedding user company
        const userCompany = document.createElement("li");
        userCompany.innerHTML = "Company : " + `${user.company.name}`;
        allDetails.appendChild(userCompany);

        // embedding user website
        const userWebsite = document.createElement("li");
        userWebsite.innerHTML = "Website : " + `${user.website}`;
        allDetails.appendChild(userWebsite);

        console.log(Number(INPUT_ID.value));
      });
    });
};
