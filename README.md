# Acestream Links Converter

A web application that converts Acestream links into M3U playlist format for easy importing into media players.

## Description

This application provides a simple and efficient way to convert Acestream links into M3U playlist files. Users can input a URL containing Acestream links, and the application will generate a compatible M3U playlist file that can be used with various media players.

## Technologies Used

- **Next.js** - React framework for the frontend application
- **React** - JavaScript library for building the user interface
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library for the UI elements
- **TypeScript** (implied by the Next.js configuration)

## Features

- URL input for pages containing Acestream links
- Automatic conversion to M3U format
- Downloadable playlist file
- Responsive design for both desktop and mobile devices
- Modern gradient UI with a clean interface

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd acestream-links-converter
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Start the production server:
```bash
npm start
```

## Usage

1. Navigate to the application in your web browser
2. Enter the URL of the page containing Acestream links in the input field
3. Click the "Download M3U" button
4. Import the downloaded .m3u file into your preferred media player

## Project Structure

The application follows the standard Next.js 13+ file structure with app directory:

```
├── app/
│   ├── page.tsx (main page component)
│   └── layout.tsx
├── public/
│   └── favicon.ico
├── components/
│   └── ui/ (shadcn/ui components)
└── styles/
    └── globals.css (Tailwind CSS styles)
```

## Configuration

The application is configured to run with a base path of `/m3u-scrapper-web/` as shown in the deployment configuration.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created by Mr. Clusterman


