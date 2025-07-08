# 🎵 Spotify Clone – Web Music Player

A fully responsive Spotify-inspired music player web app built using **HTML, CSS, and JavaScript**. Browse playlists by mood or artist, play songs with a dynamic playbar, and experience seamless transitions—all using local storage.


---

## 📌 Features

- 🎶 **Dynamic Playlist Loading** from local folders
- 🎧 **MP3 Playback** with responsive play/pause, next/previous controls
- 📂 **Folder-based Playlist Architecture**
- 🖼️ **Cover Image & Metadata** via `cover.jpg` and `info.json`
- ⏱️ **Live Seekbar with Timing** display
- 🔁 **Auto Next Track** functionality
- 📱 **Mobile & Desktop Responsive Design**
- 🔍 **Search-Style UI Inspired by Spotify**

---

## 🗂️ Folder Structure

```bash
.
├── index.html
├── script.js
├── style.css
├── utility.css
├── songs/
│   ├── Angry_(mood)/
│   │   ├── song1.mp3
│   │   ├── song2.mp3
│   │   ├── cover.jpg
│   │   └── info.json
│   ├── Karan_Aujla/
│   ├── Love_(mood)/
│   └── ...more folders
├── play.svg
├── pause.svg
├── playsong.svg
├── prevsong.svg
├── nextsong.svg
├── music.svg
├── spotify-logo.png
├── favicon.ico
└── hamburger.svg
```
## 📄 info.json Format

Each playlist folder must contain an `info.json` file with metadata:

```json
{
  "title": "Chill Vibes",
  "description": "Relax and unwind with smooth tracks."
}
```

Also include a `cover.jpg` image in the same folder for the playlist card.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/sanyaaaa14/Spotify-Clone-Web.git
cd Spotify-Clone-Web
```

---

### 2. Add Playlists

Inside the `/songs` folder, create subfolders for each playlist. Each should include:

✅ `.mp3` song files  
✅ `cover.jpg`  
✅ `info.json`

#### Example structure:

```
songs/
└── Chill_(mood)/
    ├── song1.mp3
    ├── song2.mp3
    ├── cover.jpg
    └── info.json
```

---

### 3. Run Locally

Due to browser restrictions with `fetch()` on file URLs, run a local server:

```bash
# Python 3
python -m http.server
```

Or use the **Live Server** extension in **VS Code**.

Then open:

```
http://localhost:8000
```

---

## 🧠 Tech Stack

- HTML5  
- CSS3 (Flexbox, Utility Classes)  
- JavaScript   
- Local Storage / File-based Playlist Structure

---

## 💡 Future Features

- Volume control  
- Shuffle / Repeat modes  
- Playlist search functionality  
- Backend integration for login & favorites  
- Light/Dark theme toggle  

---

## 📸 Screenshots

![spotify-1](https://github.com/user-attachments/assets/ae4ae9ac-f449-4657-a41c-7e6a14136881)
![spotify-2](https://github.com/user-attachments/assets/bdaf6089-62a5-4a0f-9265-56b5302fc7cd)
![spotify-3](https://github.com/user-attachments/assets/f401ae5d-9614-4266-8624-a4b612694b0a)




---

## 🙋‍♂️ Author

**Sanya Bhatia**

- [GitHub](https://github.com/sanyaaaa14)  
- [LinkedIn](https://www.linkedin.com/in/sanyabhatia/) <!-- (Update if needed) -->

---

## 📝 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute.
