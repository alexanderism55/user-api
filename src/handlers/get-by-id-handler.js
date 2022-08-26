import { INPUT_ID, DISPLAY_ID } from "../../data/constants.js";
export const getByIdHandler = () => {
  debugger;
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      const userById = [];
      const id = document.getElementById(INPUT_ID).value;
      const user = response.find((user) => user.id == id);
      userById.push(user);
      return userById;
    })
    .then((user) => {
      console.log(user);
      // get parent getElement
      const parentEl = document.getElementById(DISPLAY_ID);
      const id = document.getElementById(INPUT_ID).value;
      if (parentEl.children > [0]) {
        parentEl.innerHTML = "";
      }
      if (id < 1 || id > 10) {
        const errorDiv = document.createElement("div");
        errorDiv.id = "error-id";
        errorDiv.className = "error-class";
        parentEl.appendChild(errorDiv);
        const error = document.createElement("h2");
        error.innerText = "Ur looking in the wrong place buddy";
        errorDiv.appendChild(error);
      }
      if (id === "") {
        const errorDiv = document.createElement("div");
        errorDiv.id = "error-id";
        errorDiv.className = "error-class";
        parentEl.appendChild(errorDiv);
        const error = document.createElement("h2");
        error.innerText = "Enter a number";
        errorDiv.appendChild(error);
      }
      //creating a container for each of the users
      const container = document.createElement("div");
      container.className = "user-container";
      container.id = "user-container-id";
      parentEl.appendChild(container);

      //creating a header with their name for each of the users
      const header = document.createElement("h2");
      header.className = "user-header";
      header.id = "user-header-id";
      header.innerHTML = "Name : " + `${user[0].name}`;
      container.appendChild(header);

      //creating a ul to embed all the details of the user
      const allDetails = document.createElement("ul");
      allDetails.className = "user-allDetails";
      allDetails.id = "user-allDetails-id";
      container.appendChild(allDetails);

      // embedding user-name
      const userName = document.createElement("li");
      userName.innerHTML = "User Name : " + `${user[0].username}`;
      allDetails.appendChild(userName);

      // embedding user-id
      const userId = document.createElement("li");
      userId.innerHTML = "Id-NUmber : " + `${user[0].id}`;
      allDetails.appendChild(userId);

      // embedding the user city
      const userCity = document.createElement("li");
      userCity.innerHTML = "City : " + `${user[0].address.city}`;
      allDetails.appendChild(userCity);

      // embedding user phone number
      const userPhone = document.createElement("li");
      userPhone.innerHTML = "Phone Number : " + `${user[0].phone}`;
      allDetails.appendChild(userPhone);

      // embedding user email
      const userEmail = document.createElement("li");
      userEmail.innerHTML = "Email : " + `${user[0].email}`;
      allDetails.appendChild(userEmail);

      // embedding user company
      const userCompany = document.createElement("li");
      userCompany.innerHTML = "Company : " + `${user[0].company.name}`;
      allDetails.appendChild(userCompany);

      // embedding user website
      const userWebsite = document.createElement("li");
      userWebsite.innerHTML = "Website : " + `${user[0].website}`;
      allDetails.appendChild(userWebsite);
    });
};
