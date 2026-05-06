.PHONY: help install dev-backend dev-frontend dev lint test clean

help:
	@echo "Available commands:"
	@echo "  make install        - Install dependencies"
	@echo "  make dev-backend    - Run FastAPI backend"
	@echo "  make dev-frontend   - Run Vite frontend"
	@echo "  make dev            - Run both backend and frontend (requires tmux)"
	@echo "  make lint           - Run linters"
	@echo "  make test           - Run tests"

install:
	cd backend && pip install -r requirements-dev.txt
	cd frontend && npm install

dev-backend:
	cd backend && uvicorn app.main:app --reload --port 8000

dev-frontend:
	cd frontend && npm run dev

lint:
	cd backend && black --check app && ruff check app
	cd frontend && npm run lint

test:
	cd backend && pytest tests/ -v

clean:
	find . -type d -name __pycache__ -exec rm -r {} +
	find . -type f -name "*.pyc" -delete
	cd frontend && rm -rf node_modules dist
	cd backend && rm -rf .pytest_cache
