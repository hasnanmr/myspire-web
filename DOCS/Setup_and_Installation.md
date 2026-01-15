# Getting Started with Greenspire

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Installation
1.  **Clone the repository** (if not already local).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  **Running in Production (Recommended)**:
    Install PM2 globally if you haven't:
    ```bash
    npm install -g pm2
    ```
    Start the server:
    ```bash
    npm run build
    pm2 start npm --name "myspire-web" -- start
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
