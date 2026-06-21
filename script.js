// let btn = document.querySelector("#button");

// // Apply saved theme on page load
// let savedTheme = localStorage.getItem("theme");

// if (savedTheme) {
//     document.body.classList.add(savedTheme);
// } else {
//     document.body.classList.add("light");
// }

// // Toggle theme
// btn.addEventListener("click", function () {
//     if (document.body.classList.contains("light")) {
//         document.body.classList.replace("light", "dark");
//         localStorage.setItem("theme", "dark");
//     } else {
//         document.body.classList.replace("dark", "light");
//         localStorage.setItem("theme", "light");
//     }
// });




// Users Data
// const users = [
// {
//     name:"Amisha Rathore",
//     pic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
//     bio:"silent chaos in a loud world 🌑🖤"
// },
// {
//     name:"Kiara Mehta",
//     pic:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
//     bio:"main character energy 🎬"
// },
// {
//     name:"Isha Oberoi",
//     pic:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
//     bio:"walking through dreams ☁️"
// },
// {
//     name:"Aarav Singh",
//     pic:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
//     bio:"coffee and coding ☕💻"
// },
// {
//     name:"Kabir Verma",
//     pic:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
//     bio:"developer by day, gamer by night 🎮"
// },
// {
//     name:"Riya Sharma",
//     pic:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
//     bio:"capturing memories 📸"
// }
// ];

// const cardsContainer = document.querySelector("#cards");
// const searchInput = document.querySelector("#search");

// // Show Users Function
// function showUsers(arr){

//     cardsContainer.innerHTML = "";

//     arr.forEach(user=>{

//         const card = document.createElement("div");
//         card.classList.add("card");

//         card.innerHTML = `
//             <img src="${user.pic}" class="bg-img">

//             <div class="blurred-layer"></div>

//             <div class="content">
//                 <h3>${user.name}</h3>
//                 <p>${user.bio}</p>
//             </div>
//         `;

//         cardsContainer.appendChild(card);

//     });
// }

// // Initial Cards
// showUsers(users);

// // Search Functionality
// searchInput.addEventListener("input",()=>{

//     let value = searchInput.value.toLowerCase();

//     let filteredUsers = users.filter(user =>
//         user.name.toLowerCase().includes(value)
//     );

//     showUsers(filteredUsers);

// });


// function clicklimit()
// {
//     let click=0;
//     return function()
//     {
//         if(click<5)
//         {
//             click++;
//             console.log(`clicked ${click} times`);
//         }
//         else{
//             console.error("Limit exceeded");
//         }

//     }
// }
//    let fnc=clicklimit();
//  fnc();
//  fnc();


///Toaster/// which popups for a duration 



// function createtoaster(config)
// {
//     const container =
//         document.querySelector(".toast-container") ||
//         (() => {

//             const div = document.createElement("div");
//             div.classList.add("toast-container");

//             document.body.appendChild(div);

//             return div;

//         })();

//     return function(notification)
//     {
//         let toast = document.createElement("div");
//         toast.classList.add("toast");

//         let icon = document.createElement("div");
//         icon.classList.add("icon");

//         icon.innerHTML =
//         `<i class="fa-solid fa-check"></i>`;

//         let text = document.createElement("span");
//         text.textContent = notification;

//         toast.appendChild(icon);
//         toast.appendChild(text);

//         container.appendChild(toast);

//         setTimeout(() => {

//             toast.remove();

//         }, config.duration * 1000);
//     };
// }

// let toaster = createtoaster({
//     duration:3
// });

// // function showToast()
// // {
// //     toaster("Notification Created Successfully!");
// // }

// // /* Demo */

// // toaster("Welcome!");
// // setTimeout(() => toaster("Data Saved"), 1000);
// // setTimeout(() => toaster("Profile Updated"), 2000);

// // let obj=
// // {
// //     name:"Devendra",
// //     age:20,
// //     sayname:function()
// //     {
// //         console.log(this);
// //          console.log(this.age);
// //     }
// // }
// // obj.sayname();
// //  let name = document.querySelector("#name");
// // let role = document.querySelector("#role");
// // let bio = document.querySelector("#bio");
// // let image = document.querySelector("#photo");

// // let form = document.querySelector("form");
// // let cardsContainer = document.querySelector(".cards");

// // const usermanager = {

// //     user: [],

// //     init: function()
// //     {
// //         form.addEventListener(
// //             "submit",
// //             this.submitForm.bind(this)
// //         );
// //     },

// //     submitForm: function(e)
// //     {
// //         e.preventDefault();

// //         this.adduser();
// //         this.renderui();

// //         form.reset();
// //     },

// //     adduser: function()
// //     {
// //         this.user.push({
// //             name: name.value,
// //             role: role.value,
// //             image: image.value,
// //             bio: bio.value
// //         });
// //     },

// //     removeuser: function()
// //     {

// //     },

// //     renderui: function()
// //     {
// //         let html = "";

// //         this.user.forEach((user,index)=>
// //         {
// //             html += `
// //             <div class="card">
// //                 <img src="${user.image}" alt="">
// //                 <h2>${user.name}</h2>
// //                 <p class="role">${user.role}</p>
// //                 <p class="bio">${user.bio}</p>
// //             </div>
// //             `;
// //         });

// //         cardsContainer.innerHTML = html;
// //     }
// // };

// // usermanager.init();

// // Call of Duty: Modern Warfare API Example
// // const response = await fetch('https://documenter.getpostman.com/view/7896975/SW7aXSo5?version=latest', {
// //     method: 'GET',
// //     headers: {
// //         'Content-Type': 'application/json'
// //     }
// // });

// // const data = await response.json();
// // console.log(data);


// // class Createyoutube
// // {
// //     constructor()
// //     {
// //      this.subscriber=[];
// //     }
// //     subscribe(user)
// //     {
// //         this.subscriber.push(user);
// //         console.log(`${user.name},you have subscribed successfully!!`);

// //     }
// //     unsubscribe(user)
// //     {
// //         this.subscriber.filter((sub)=>sub!=user)
// //     }
// //     notify()
// // {
// //     this.subscriber.forEach(sub=>sub.update("message"));
// // }
// // }

// // class user
// // {
// //     constructor(name)
// //     {
// //         this.name=name;
// //      }
// //      update(data)
// //      {
// //         console.log(data);
// //      }
// // }

// // let shreyians=new Createyoutube();
// // let user1=new user("harsh");
// // let user2=new user("Devendra");

// // shreyians.subscribe(user1);



// /// debouncing///
// let input=document.querySelector("input");

// function debounce(fnc,delay)
// {

//     let timer;
//     return function(...args)
//     {
//         clearTimeout(timer);
//         timer=setTimeout(function()
//     {
//         fnc(...args);
//     },delay);
//     };

// }


// input.addEventListener("input",
//     debounce(function()
// {
//     console.log("ran");
// },1000)
// );



// function throttle(fn, limit) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       fn.apply(this, args);
//     }
//   };
// }

// window.addEventListener("scroll", throttle(function () {
//   console.log("Scroll position:", window.scrollY);
// }, 200));
// #164037

//#151515