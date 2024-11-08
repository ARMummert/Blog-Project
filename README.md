The Blog Project is a single page application that includes a fully functional
blog using Sanity CMS. The blog includes a home section with a statement and images.
The blog also includes an About Section and a Contact Form. The SPA is built using React, NextJS, and 
Typescript.

![Delicious Exposed Image](delicious-exposed/public/images/deliciousexposed.png)

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Tech Stack](#tech-stack)
4. [Usage](#usage)
5. [Citations](#citations)

## Features
- **Sanity CMS integration**: to manage posts, images, authors, and categories, etc
- **Responsive Design**: optimized for mobile and desktop
- **Home Section**: containing the user's statement and images
- **Blog Section**: with a list of posts
- **Dropdown Menu**: to see specific posts
- **About Section**: that includes details of the author and their images.
- **Contact Form**: that allows users to send messages to the author using EmailJS

## Tech Stack
- **Frontend**: Next.js, React, TypeScript
- **CMS**: Sanity CMS

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/food-blog.git
2. Install the dependencies:
   ```sh
   npm install
3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```sh
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=your_dataset
   SANITY_TOKEN=your_token
   EMAILJS_USER_ID=your_emailjs_user_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   ```
4. Run the development server:
   ```sh
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
6. To access the Sanity CMS, run the following command:
   ```sh
   npx sanity start
   ```
7. Open [http://localhost:3333](http://localhost:3333) with your browser to see the CMS.
8. To deploy the project, run the following command:
   ```sh
   npm run build
   npm run start
   ```
9. Open [http://localhost:3000](http://localhost:3000) with your browser to see the deployed project.
10. To deploy the Sanity CMS, run the following command:
    ```sh
    sanity deploy
    ```
11. Open [https://your_project_id.api.sanity.io/v1/data/query/production?query=*%5B%5D%20%7B%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22slug%22%3A%20slug%2C%0A%20%20%22mainImage%22%3A%20mainImage%2C%0A%20%20%22publishedAt%22%3A%20publishedAt%0A%7D](https://your_project_id.api.sanity.io/v1/data/query/production?query=*%5B%5D%20%7B%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22slug%22%3A%20slug%2C%0A%20%20%22mainImage%22%3A%20mainImage%2C%0A%20%20%22publishedAt%22%3A%20publishedAt%0A%7D) with your browser to see the deployed CMS.

## Usage
1. To add a new post, go to the Sanity CMS and click on the "Create New" button in the posts section.
2. Fill in the required fields and click on the "Save" button.
3. To add a new author, go to the Sanity CMS and click on the "Create New" button in the authors section.
4. Fill in the required fields and click on the "Save" button.
5. To add a new category, go to the Sanity CMS and click on the "Create New" button in the categories section.
6. Fill in the required fields and click on the "Save" button.


## Citations 

Tumanyan, Kristine. Sliced Vegetables on Brown Wooden Chopping Board. Unsplash, https://unsplash.com/photos/sliced-vegetables-on-brown-wooden-chopping-board-YmgpoBhJAkI. Accessed 8 Nov. 2024.

Carstens-Peters, Glenn. Person Using MacBook Pro. Unsplash, https://unsplash.com/photos/person-using-macbook-pro-npxXWgQ33ZQ. Accessed 8 Nov. 2024.

Sanity Plugins: React Portable Text. Sanity, https://www.sanity.io/plugins/react-portable-text. Accessed 8 Nov. 2024.

Sanity Documentation. Sanity, https://www.sanity.io/docs. Accessed 8 Nov. 2024.

Next-Sanity. npm, https://www.npmjs.com/package/next-sanity. Accessed 8 Nov. 2024.


`npx sanity dev`


