# Acestream Links Converter

A web application that automatically scrapes and converts Acestream links into M3U playlist format, streamlining the process of creating compatible playlists for media players.

## Description

This application serves as an automated web scraping and conversion tool that transforms Acestream links into M3U playlist files. The system intelligently extracts Acestream links from any provided webpage, processes them, and generates a properly formatted M3U playlist that's ready for import into various media players.

## Key Features

- **Automated Web Scraping**: Intelligently extracts Acestream links from any provided URL
- **Smart Link Detection**: Identifies and validates Acestream links within webpage content
- **Format Conversion**: Transforms scraped links into standard M3U playlist format
- **Batch Processing**: Handles multiple Acestream links simultaneously
- **Error Handling**: Validates links and ensures proper formatting
- **Downloadable Output**: Generates ready-to-use M3U playlist files
- **Responsive Design**: Functions seamlessly across desktop and mobile devices

## Technologies Used

- **Next.js** - React framework for the frontend application
- **React** - JavaScript library for building the user interface
- **Node.js** - Backend runtime for web scraping operations
- **Web Scraping Utilities** - Tools for extracting Acestream links from webpages
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library for the UI elements
- **TypeScript** - Type-safe programming language

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

3. Configure scraping parameters (if needed):
```bash
# Edit scraping configuration in config/scraper.ts
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Start the production server:
```bash
npm start
```

## Usage

1. Navigate to the application in your web browser
2. Enter the URL of the page containing Acestream links in the input field
3. The application will automatically scan and extract valid Acestream links
4. Click the "Download M3U" button to receive your converted playlist
5. Import the downloaded .m3u file into your preferred media player

## Error Handling

The application implements robust error handling for various scenarios:

- Invalid URLs
- Inaccessible webpages
- Malformed Acestream links
- Rate limiting responses
- Network timeouts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing to the scraping functionality, please ensure your changes follow responsible scraping practices.

## Author

Created by Mr. Clusterman
