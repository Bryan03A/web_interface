# People Manager

This project is a simple web application to manage a list of people. It allows adding and deleting people, and displays real-time information from external APIs (Heroku and a UTC time service). Additionally, it features a right-side sliding panel with an embedded iframe displaying a Digital Ocean page, which can be toggled with a handle-like button that moves along with the panel.

---

## Technologies Used

- **HTML5** and **CSS3** for structure and responsive styling.
- **JavaScript** for logic and REST API calls.
- External APIs for:
  - People management (custom REST API)
  - Message from Heroku API
  - Real-time UTC clock
- Embedded iframe to load an external Digital Ocean page.
  
---

## Main Features

- **People List:** load, add, and delete people via REST API.
- **Real-time Clock:** displays current UTC time updated every second.
- **Heroku API Message:** fetches and shows a custom message.
- **Right Sliding Panel with Iframe:** slide-in/out panel from the right side with the embedded Digital Ocean page.
- **Handle-like Toggle Button:** always visible on the right, moves with the panel to open/close the iframe.
- **Responsive Design:** centered, clean UI for good user experience.

---

## Installation and Usage

1. Clone or download this repository.
2. Open the `index.html` file in a modern browser (Chrome, Firefox, Edge).
3. The app will automatically load the people list and external messages.
4. Use the input field to add new names and the "Add Person" button.
5. The vertical "Digital Ocean" handle on the right toggles the sliding panel with the embedded page.

---

## File Structure

```
/project-root
│
├── index.html          # Main HTML page
├── style.css           # CSS styles
└── script.js           # JavaScript logic
```

---

## APIs Used

- **People API:** `https://api-rest-vercel-dusky.vercel.app/people`
- **Heroku API:** `https://calm-brook-87250-f1e762b003ff.herokuapp.com/api/hello`
- **Time API:** `https://api-time-cwyk.onrender.com/api/time`
- **Digital Ocean iframe:** `https://first-deploy-laggk.ondigitalocean.app/`

---

## Customization

- Change URLs in `script.js` to point to your own endpoints.
- Modify styles in `style.css` to adjust the visual design.
- Adjust iframe and button sizes or behavior via CSS.

---
