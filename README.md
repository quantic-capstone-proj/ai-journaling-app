# AI Journaling App

A fullstack application for AI-powered journaling with FastAPI backend and React frontend.

## Project Structure

```
├── backend/          # FastAPI Python backend
├── frontend/         # React + TypeScript + Vite frontend
├── docker-compose.yml
├── Makefile
└── README.md
```

## Quick Start

### Install Dependencies

```bash
make install
```

### Development

Run backend:
```bash
make dev-backend
```

Run frontend (in another terminal):
```bash
make dev-frontend
```

Or run both with docker-compose:
```bash
docker-compose up
```

### Backend

Located in `/backend`:
- FastAPI with SQLAlchemy ORM
- Pydantic schemas for validation
- Repository pattern for data access

**API**: http://localhost:8000
**Docs**: http://localhost:8000/docs

### Frontend

Located in `/frontend`:
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS ready

**App**: http://localhost:5173

## Scripts

- `make install` - Install all dependencies
- `make dev-backend` - Run backend development server
- `make dev-frontend` - Run frontend development server
- `make test` - Run backend tests
- `make lint` - Run linters
- `make clean` - Clean build artifacts

## Environment Variables

See `.env.example` for required environment variables.

Copy to `.env` and update as needed:
```bash
cp .env.example .env
```
