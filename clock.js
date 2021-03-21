// Clock.
// Username Persistance.
// To Do List.
// Random Background Image.
// Weather with Geolocation.

const clock = document.querySelector(".clock");

function getTime() {

    setInterval(() => {
        const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds()

        clock.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`
    }, 1000)
}

getTime();