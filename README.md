# LetMeAsk

A real-time Q&A application that allows users to create rooms, ask questions, and record audio for enhanced interaction. Built with modern web technologies and a robust backend architecture.

## 🚀 Technologies Used

### Frontend (Web)
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons
- **Day.js** - Date manipulation library
- **Biome** - Fast formatter and linter

### Backend (Server)
- **Node.js** - JavaScript runtime
- **Fastify** - Fast and low overhead web framework
- **TypeScript** - Type-safe server development
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database toolkit
- **PgVector** - Vector similarity search
- **Google GenAI** - AI/ML capabilities
- **Zod** - Schema validation
- **Biome** - Code formatting and linting

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **Git**

## 🛠️ Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd letmeask
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

### 3. Database Setup

Start the PostgreSQL database using Docker:

```bash
docker-compose up -d
```

This will start a PostgreSQL instance with pgvector extension on port `5433`.

### 4. Environment Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5433/letmeask
GOOGLE_API_KEY=your_google_api_key_here
```

### 5. Database Migration

Run the database migrations:

```bash
npm run db:generate
npm run db:migrate
```

### 6. Frontend Setup

Navigate to the web directory and install dependencies:

```bash
cd ../web
npm install
```

## 🚀 Running the Application

### Start the Backend Server

In the `server` directory:

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will be available at `http://localhost:3333`

### Start the Frontend Application

In the `web` directory:

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The frontend will be available at `http://localhost:5173`

## 📁 Project Structure

```
letmeask/
├── web/                    # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── http/          # API client configuration
│   │   └── lib/           # Utility functions
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Backend application
│   ├── src/
│   │   ├── http/          # API routes
│   │   ├── db/            # Database configuration
│   │   └── services/      # Business logic
│   ├── docker/            # Docker configuration
│   └── package.json
└── README.md
```

## 🔧 Available Scripts

### Backend Scripts
- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with initial data

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Features

- **Room Creation**: Create Q&A rooms for different topics
- **Real-time Questions**: Ask and manage questions in real-time
- **Audio Recording**: Record and upload audio for enhanced interaction
- **AI Integration**: Google GenAI integration for intelligent features
- **Vector Search**: Advanced search capabilities with pgvector
- **Responsive Design**: Modern, responsive UI with Tailwind CSS
- **Type Safety**: Full TypeScript support for both frontend and backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository. 