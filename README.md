# Image Explorer

A web-based image search application that allows users to discover high-quality photographs from the Pexels library. Users can search for images using keywords, browse results instantly, and access original-resolution downloads through a clean and responsive interface.

## Live Demo

**Application:** https://image-search-five-chi.vercel.app/search

## Features

* Search images using keywords
* Fetches real-time image results from Pexels API
* Displays photographer information
* Direct access to original-resolution images
* Responsive image gallery layout
* Clean and minimal user interface
* Server-side rendering with EJS templates

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* EJS

### Backend

* Node.js
* Express.js

### API

* Pexels API

### Deployment

* Vercel

---

### Image Search Interface

![Image Explorer](public/image-search.png)

---

## How It Works

1. Users enter a search term.
2. The application sends a request to the Pexels API.
3. Matching images are retrieved from the Pexels image library.
4. Results are displayed in a responsive gallery.
5. Users can view photographer details and download the original image.

---

## API Endpoint Used

### Search Images

```http
GET https://api.pexels.com/v1/search?query={SEARCH_TERM}&per_page=100
```

The request includes the Pexels API key through the Authorization header and returns image metadata, photographer details, and image URLs.

---

## Project Structure

```text
imageSearch/
├── README.md
├── api
│   └── app.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── image-search.png
│   ├── logo.png
│   └── style.css
├── vercel.json
└── views
    └── index.ejs
```

---

## Routes

| Method | Route   | Description   |
| ------ | ------- | ------------- |
| GET    | /       | Home page     |
| POST   | /search | Search images |

---

## Application Workflow

### Image Search Workflow

1. User enters a keyword.
2. Form submits a POST request to `/search`.
3. Express receives the request and extracts the search term.
4. Axios sends a request to the Pexels API.
5. Image results are returned from the API.
6. EJS renders the gallery with image previews.
7. Users can open the original image in a new tab.

---

## Installation

```bash
git clone <repository-url>

cd imageSearch

npm install

npm start
```

Open:

```text
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
APIKEY=your_pexels_api_key
```

---

## Author

### Atmika Nayak

GitHub: https://github.com/AtmikaNayak
