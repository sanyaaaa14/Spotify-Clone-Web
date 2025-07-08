// let currentSong = new Audio();
// let currentSongIndex = 0;
// let currentFolder;
// let play;
// let previous;
// let next;

// let songs;
// function formatTime(seconds) {
//   seconds = Math.floor(seconds); // Round down to the nearest whole second
//   let minutes = Math.floor(seconds / 60);
//   let remainingSeconds = seconds % 60;

//   // Add leading zero to seconds if needed
//   if (remainingSeconds < 10) {
//     remainingSeconds = "0" + remainingSeconds;
//   }

//   return `${minutes}:${remainingSeconds}`;
// }

// async function getSongs(folder) {
//   currentFolder=folder;
//   let a = await fetch(`http://127.0.0.1:5500/${currentFolder}/`);
//   let response = await a.text();

//   let div = document.createElement("div");
//   div.innerHTML = response;

//   let as = div.getElementsByTagName("a");
//   songs = [];

//   for (let index = 0; index < as.length; index++) {
//     const element = as[index];
//     if (element.href.endsWith(".mp3")) {
//       // Extract just the filename
//       let fileName = decodeURIComponent(element.href.split("/").pop());
//       songs.push({
//         fullPath: element.href,
//         name: fileName,
//       });
//     }
//   }

//   return songs;
// }
// // const playmusic = (track,pause=false) => {
// //   currentSong.src = "/Song-temp/" + track;
// //   if(!pause){
// //   currentSong.play();
// //   play.src = "pause.svg";
// //   }

// //   // ✅ Clean name logic
// //   let cleanName = track
// //     .replace(".mp3", "")
// //     .replace(/_/g, " ")
// //     .split(" - ")[0];

// //   document.querySelector(".songinfo").innerHTML = cleanName;
// //   document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
// // };
// const playmusic = (track, pause = false) => {
//   currentSong.src = `/${currentFolder}/` + track;

//   // Update current index
//   currentSongIndex = songs.findIndex(song => song.name === track);

//   if (!pause) {
//     currentSong.play();
//     play.src = "pause.svg";
//   }

//   let cleanName = track
//     .replace(".mp3", "")
//     .replace(/_/g, " ")
//     .split(" - ")[0];

//   document.querySelector(".songinfo").innerHTML = cleanName;
//   document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
// };

// // async function displayAlbums() {
// //   let a = await fetch(`http://127.0.0.1:5500/songs/`);
// //   let response = await a.text();

// //   let div = document.createElement("div");
// //   div.innerHTML = response;

// //   let anchors = div.getElementsByTagName("a");
// //   let cardContainer=document.querySelector(".cardContainer")

// //   Array.from(anchors).forEach(async e => {
// //     let href = e.href;

// //     // Filter only folders inside /songs/ and skip the first link (which might be parent folder)
// //     if (href.includes("/songs/") && href !== "http://127.0.0.1:5500/songs/") {
// //       let folder = decodeURIComponent(href.split("/").pop());
// //       console.log(folder);  // Example: Karan_Aujla
// //        let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`);
// //        let response = await a.json();
// //        console.log(response)
// //        cardContainer.innerHTML=cardContainer.innerHTML+`<div class="card ">
// //             <img src="play.svg" class="playButton" alt="playbutton">
// //             <img src="./songs/${folder}/cover.jpg" alt="song-card">
// //             <h2>${response.title}</h2>
// //             <p>${response.description}</p>
// //           </div>
// //         `
// //     }
// //   });

// // }
// function renderSongList() {
//   let songUL = document.querySelector(".songList ul");
//   songUL.innerHTML = "";

//   for (const song of songs) {
//     let cleanName = song.name
//       .replace(".mp3", "")
//       .replace(/_/g, " ")
//       .split(" - ")[0];
//     songUL.innerHTML += ` <li data-filename="${song.name}">
//           <img class="musicsvg" src="music.svg" alt="musicicon">
//           <div class="info">
//             <div>${cleanName}</div>
//             <div>Song Artist</div>
//           </div>
//           <div class="playnow">
//             <span>Play Now</span>
//             <img class="musicsvg invert" src="playsong.svg" alt="">
//           </div>
//         </li>`;
//   }

//   // Reattach listeners to each list item
//   Array.from(document.querySelector(".songList").getElementsByTagName("li"))
//     .forEach((e) => {
//       e.addEventListener("click", () => {
//         const fileName = e.getAttribute("data-filename");
//         playmusic(fileName);
//       });
//     });
// }

// async function displayAlbums() {
//   let res = await fetch(`http://127.0.0.1:5500/songs/`);
//   let html = await res.text();

//   let div = document.createElement("div");
//   div.innerHTML = html;

//   let anchors = div.getElementsByTagName("a");
//   let cardContainer = document.querySelector(".cardContainer");

//   Array.from(anchors).forEach(async e => {
//     let href = e.href;

//     if (href.includes("/songs/") && href !== "http://127.0.0.1:5500/songs/") {
//       let folder = decodeURIComponent(href.split("/").pop());

//       try {
//         let infoRes = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`);
//         if (!infoRes.ok) throw new Error(`Missing info.json in ${folder}`);
//         let info = await infoRes.json();

//         cardContainer.innerHTML += `
//   <div class="card" data-folder="${folder}">
//     <img src="play.svg" class="playButton" alt="playbutton">
//     <img src="./songs/${folder}/cover.jpg" alt="song-card">
//     <h2>${info.title}</h2>
//     <p>${info.description}</p>
//   </div>
// `;

//         const newCard = cardContainer.lastElementChild;
//         newCard.addEventListener("click", async () => {
//           songs = await getSongs(`songs/${folder}`);
//           currentSongIndex = 0;
//           playmusic(songs[0].name);
//           renderSongList(); // Step 4
//         });

//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//   });
// }

// async function main() {
// play = document.getElementById("play");
// next = document.getElementById("next");
// previous = document.getElementById("previous");

//   // Get list of all songs
//   songs = await getSongs("songs/Karan_Aujla"); // Or any valid subfolder

//   playmusic(songs[0].name, true);
//   //Display all albums on the page
//   displayAlbums()
//   // Show all the songs in the playlist
//   let songUL = document.querySelector(".songList ul");

//   for (const song of songs) {
//     let cleanName = song.name
//       .replace(".mp3", "")
//       .replace(/_/g, " ")
//       .split(" - ")[0];
//     songUL.innerHTML += ` <li data-filename="${song.name}">
//           <img class="musicsvg" src="music.svg" alt="musicicon">
//           <div class="info">
//             <div>${cleanName}</div>
//             <div>Song Artist</div>
//           </div>
//           <div class="playnow">
//             <span>Play Now</span>
//             <img class="musicsvg invert" src="playsong.svg" alt="">
//           </div>
//         </li>`;
//   }
//   //Attatch an event listener to each song
//   Array.from(
//     document.querySelector(".songList").getElementsByTagName("li")
//   ).forEach((e) => {
//     e.addEventListener("click", (element) => {
//       const fileName = e.getAttribute("data-filename");
//       console.log("Playing:", fileName);
//       playmusic(fileName);
//     });
//   });
//   //Attach an event listener to prev,play and next
//   play.addEventListener("click",()=>{
//     if(currentSong.paused){
//         currentSong.play()
//         play.src="pause.svg"
//     }
//     else{
//         currentSong.pause()
//         play.src="playsong.svg"
//     }
//   })

//   //Listen for timeupdate event
//   currentSong.addEventListener("timeupdate",()=>{
//     console.log(currentSong.currentTime,currentSong.duration);
//     document.querySelector(".songtime").innerHTML = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`;
//     document.querySelector(".circle").style.left=(currentSong.currentTime/currentSong.duration) *100 +"%";
//   })
//   //Add event listener to seekbar
//   document.querySelector(".seekbar").addEventListener("click",(e)=>{
//     let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
//     document.querySelector(".circle").style.left= percent+"%";
//     currentSong.currentTime=((currentSong.duration)*percent)/100;
//   })
// //   //Add event listener for hamburger
// //   document.querySelector(".hamburger").addEventListener("click",()=>{
// //     document.querySelector(".left-part").style.left='0';

// //   })
// const hamburger = document.getElementById("menu-icon");
// const sidebar = document.querySelector(".left-part");
// let isOpen = false;

// hamburger.addEventListener("click", () => {
//   if (!isOpen) {
//     sidebar.style.left = "0";
//     hamburger.src="close.svg";
//     isOpen = true;
//   } else {
//     sidebar.style.left = "-150%";
//     hamburger.src = "hamburger.svg";
//     isOpen = false;
//   }
// });
// //Add an event listerner to previous and next
// // previous.addEventListener("click",()=>{
// //   console.log("previous clicked")
// //   let index=songs.indexof(currentSong.src.split("/").slice(-1)[0])
// //   if(index>=0){
// //     playmusic(songs[index-1])
// //   }
// // })
// // next.addEventListener("click",()=>{
// //   console.log("next clicked")
// //   let index=songs.indexof(currentSong.src.split("/").slice(-1)[0])
// //   if(index < length){
// //     playmusic(songs[index+1])
// //   }
// // })
// // Add event listener to Previous button

// //
// next.addEventListener("click", () => {
//   console.log("Next clicked. Current index:", currentSongIndex);

//   if (currentSongIndex < songs.length - 1) {
//     currentSongIndex++;
//   } else {
//     currentSongIndex = 0; // Loop to first
//   }

//   playmusic(songs[currentSongIndex].name);
// });
// previous.addEventListener("click", () => {
//   console.log("Previous clicked. Current index:", currentSongIndex);

//   if (currentSongIndex > 0) {
//     currentSongIndex--;
//   } else {
//     currentSongIndex = songs.length - 1; // Loop to last
//   }

//   playmusic(songs[currentSongIndex].name);
// });
// currentSong.addEventListener("ended", () => {
//   if (currentSongIndex < songs.length - 1) {
//     currentSongIndex++;
//   } else {
//     currentSongIndex = 0; // Loop to start
//   }

//   playmusic(songs[currentSongIndex].name);
// });

// //Load the playlist whenever card is clicked
// Array.from(document.getElementsByClassName("card")).forEach(e=>{
//   e.addEventListener("click",async item=>{
//     songs = await getSongs(`songs/${currentFolder}`);
//   })
// })

// }
// main();

let currentSong = new Audio();
let currentSongIndex = 0;
let currentFolder = "";
let songs = [];

let play, next, previous;

async function getSongs(folder) {
  currentFolder = folder.startsWith("songs/") ? folder : `songs/${folder}`;
  let res = await fetch(`/${currentFolder}/`);
  let html = await res.text();

  let div = document.createElement("div");
  div.innerHTML = html;
  let links = div.getElementsByTagName("a");

  songs = [];
  for (let link of links) {
    if (link.href.endsWith(".mp3")) {
      let fileName = decodeURIComponent(link.href.split("/").pop());
      songs.push({ fullPath: link.href, name: fileName });
    }
  }
}

function updatePlaybarUI(track) {
  let cleanName = track.replace(".mp3", "").replace(/_/g, " ").split(" - ")[0];
  document.querySelector(".songinfo").textContent = cleanName;
}

function updatePlayPauseIcon() {
  if (currentSong.paused) {
    play.src = "playsong.svg";
  } else {
    play.src = "pause.svg";
  }
}

function formatTime(sec) {
  if (isNaN(sec)) return "00:00";
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function updateSeekbar() {
  let progress = (currentSong.currentTime / currentSong.duration) * 100;
  document.querySelector(".circle").style.left = `${progress}%`;
}

function playMusic(track, pause = false) {
  const fullPath = `${currentFolder}/${encodeURIComponent(track)}`;
  currentSong.src = fullPath;
  currentSongIndex = songs.findIndex((song) => song.name === track);
  updatePlaybarUI(track);

  if (!pause) {
    currentSong
      .play()
      .then(updatePlayPauseIcon)
      .catch((err) => console.error("Play failed:", err));
  } else {
    currentSong.pause();
    updatePlayPauseIcon();
  }
}

function renderSongList() {
  let songUL = document.querySelector(".songList ul");
  songUL.innerHTML = "";

  for (let song of songs) {
    let cleanName = song.name
      .replace(".mp3", "")
      .replace(/_/g, " ")
      .split(" - ")[0];
    songUL.innerHTML += `
      <li data-filename="${song.name}">
        <img class="musicsvg" src="music.svg" alt="musicicon">
        <div class="info">
          <div>${cleanName}</div>
          <div>Song Artist</div>
        </div>
        <div class="playnow">
          <span>Play Now</span>
          <img class="musicsvg invert" src="playsong.svg" alt="">
        </div>
      </li>`;
  }

  document.querySelectorAll(".songList li").forEach((li) => {
    li.addEventListener("click", () => {
      let file = li.getAttribute("data-filename");
      playMusic(file);
    });
  });
}

async function displayAlbums() {
  let res = await fetch(`/songs/`);
  let html = await res.text();

  let div = document.createElement("div");
  div.innerHTML = html;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer");

  Array.from(anchors).forEach(async (e) => {
    let href = e.href;
    if (href.includes("/songs/") && !href.endsWith("/songs/")) {
      let folder = decodeURIComponent(href.split("/").pop());

      let card = document.createElement("div");
      card.classList.add("card");

      const info = await fetch(`songs/${folder}/info.json`)
        .then((res) => {
          if (!res.ok) throw new Error();
          return res.json();
        })
        .catch(() => null);

      if (!info) return; // 🔥 skip rendering if no valid info.json

      const title = info?.title || folder.replace(/_/g, " ");
      const description = info?.description || "Playlist";

      card.innerHTML = `
        <img src="songs/${folder}/cover.jpg"  alt="cover">
        <h2>${title}</h2>
        <p>${description}</p>
      `;

      card.addEventListener("click", async () => {
        await getSongs(folder);
        renderSongList();
        if (songs.length > 0) {
          playMusic(songs[0].name);
        }
      });

      cardContainer.appendChild(card);
    }
  });
}

async function main() {
  play = document.getElementById("play");
  next = document.getElementById("next");
  previous = document.getElementById("previous");

  await displayAlbums();

  await getSongs("songs/Karan_Aujla");
  renderSongList();
  if (songs.length > 0) {
    playMusic(songs[0].name, true);
  }

  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
    } else {
      currentSong.pause();
    }
    updatePlayPauseIcon();
  });

  next.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playMusic(songs[currentSongIndex].name);
  });

  previous.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playMusic(songs[currentSongIndex].name);
  });

  currentSong.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playMusic(songs[currentSongIndex].name);
  });

  currentSong.addEventListener("timeupdate", () => {
    const current = formatTime(currentSong.currentTime);
    const total = formatTime(currentSong.duration);
    document.querySelector(".songtime").textContent = `${current} / ${total}`;
    updateSeekbar();
  });

  
  const hamburger = document.getElementById("menu-icon");
  const sidebar = document.querySelector(".left-part");
  let isOpen = false;

  hamburger.addEventListener("click", () => {
    if (!isOpen) {
      sidebar.style.left = "0";
      hamburger.src = "close.svg";
      isOpen = true;
    } else {
      sidebar.style.left = "-150%";
      hamburger.src = "hamburger.svg";
      isOpen = false;
    }
  });



}

main();
