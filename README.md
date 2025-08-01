# 🚀 CryptoWorld

**CryptoWorld** is a React-based cryptocurrency dashboard that provides real-time data on cryptocurrencies, global market statistics, and the latest crypto news. It integrates multiple APIs to display live data in a user-friendly and responsive interface.

---

## ✨ Features

- 📊 **Global Crypto Stats**: View global statistics including total cryptocurrencies, exchanges, market cap, and more.
- 💰 **Top Cryptocurrencies**: Displays the top 10 cryptocurrencies with their market data.
- 📈 **Crypto Details**: Detailed stats, historical price charts, and real-time updates for each coin.
- 📰 **Latest News**: Stay informed with current news articles from the crypto world.
- 📱 **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Ant Design  
- **State Management**: Redux Toolkit  
- **API Integration**: RapidAPI (CoinRanking API, CryptoNews API)  
- **Charting**: Chart.js  

---

## 📦 Installation

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cryptoWorld.git
   cd cryptoWorld
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
Open your browser and go to:
http://localhost:3000

🔑 API Configuration
This project uses the following APIs via RapidAPI:

CoinRanking API

CryptoNews API

🔧 Setup Instructions
Create an account on RapidAPI

Subscribe to the above APIs

Replace the placeholder API keys in the following files:

src/services/cryptoApi.js

src/services/cryptoNewsApi.js

Example:

js
Copy
Edit
headers: {
  'x-rapidapi-host': 'example-api-host',
  'x-rapidapi-key': 'your-api-key-here'
}
📁 Project Structure
pgsql
Copy
Edit
cryptoWorld/
├── src/
│   ├── components/       # React components
│   ├── services/         # API services
│   ├── [App.jsx]         # Main application file
│   ├── App.css           # Global styles
│   └── index.js          # Entry point
├── public/               # Static assets
├── [package.json](http   # Project dependencies
└── [README.md]           # Project documentation
📜 Available Scripts
In the project directory, you can run:

npm start – Start the development server

npm run build – Build the project for production

npm test – Run tests (if implemented)

🪪 License
This project is licensed under the MIT License.
See the LICENSE file for more details.

🙏 Acknowledgments
RapidAPI for providing free APIs

Ant Design for pre-built UI components

Chart.js for elegant data visualizations

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

🔗 Connect
Made with ❤️ for crypto enthusiasts.
Happy coding! 🚀
