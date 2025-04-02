# CMS Healthcare Portal

A React application built using the CMS Design System for healthcare complaint submission.

## Features

- Instruction Page
- Complainant Details Form
- Complaint Type Selection
- Responsive Design
- CMS Design System Integration

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:

```bash
npm run build
```

## Technologies Used

- React.js
- CMS Design System (@cmsgov/design-system)
- React Router
- CSS Modules

## Project Structure

```
cms-healthcare/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── favicon.ico
│   ├── logo192.png
│   └── logo512.png
├── src/
│   ├── pages/
│   │   ├── InstructionPage.js
│   │   ├── ComplainantDetails.js
│   │   └── ComplaintSelectType.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 