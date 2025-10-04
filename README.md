
Expense Management App

A full-stack Expense Management application that automates expense submission and multi-level approvals with flexible conditional rules and OCR-based receipt parsing.

This repository contains a backend (Node.js / Express API), a frontend (React), database schema and seed SQL, and documentation.

## Problem Statement

Companies often struggle with manual expense reimbursement processes that are time-consuming, error-prone, and lack transparency. There is no simple way to:

- Define approval flows based on thresholds.
- Manage multi-level approvals.
- Support flexible conditional approval rules.

This project implements a solution that supports:

- Authentication and user management (Admin, Manager, Employee).
- Expense submission with multi-currency support.
- Multi-step approval workflows with configurable approvers and conditional rules (percentage-based, specific approver, hybrid).
- OCR-powered receipt parsing to auto-populate expense details.

## Core Features

- Authentication & User Management
	- On first signup/login a Company and Admin user are auto-created (company currency defaults to selected country's currency).
	- Admins can create employees and managers, assign roles, and define manager relationships.

- Expense Submission (Employee)
	- Submit expenses with amount (allowing other currencies), category, description, date, and attachments.
	- View personal expense history and statuses (Approved, Rejected, Pending).

- Approval Workflow (Manager/Admin)
	- Multi-step approvals with configurable sequence (Manager → Finance → Director, etc.).
	- Managers can view pending approvals, approve/reject with comments.

- Conditional Approval Flow
	- Percentage rule (e.g., 60% of approvers approve → approved).
	- Specific approver rule (e.g., CFO approval auto-approves).
	- Hybrid rule (percentage OR specific approver).

- OCR for receipts
	- Upload/scan receipts and auto-extract amount, date, merchant, description, and line items.

## Architecture & Tech Stack

- Backend: Node.js, Express
- Database: Relational DB (schema provided in `database/schema.sql`) — PostgreSQL is recommended for production; the SQL schema is generic and can be adapted for MySQL.
- Frontend: React (Create React App or similar)
- OCR: OCR parsing service integrated in the backend (see `backend/src/services/ocrParser.js`).
- Currency & Country APIs used:
	- Countries & currencies: https://restcountries.com/v3.1/all?fields=name,currencies
	- Exchange rates: https://api.exchangerate-api.com/v4/latest/{BASE_CURRENCY}

## Repository Layout

Top-level files and folders:

- `backend/` — Express API server
	- `src/` — application source
	- `.env` — environment variables (example below)
- `frontend/` — React application
- `database/` — `schema.sql` and `seed.sql` for initializing the database
- `docs/` — API docs and requirements

## Quick start (Windows PowerShell)

NOTE: package scripts and exact env variable names may vary slightly depending on local edits. If `package.json` scripts differ, adapt the `npm` commands accordingly.

1. Clone the repository

```powershell
git clone <your-repo-url>
cd expense_management_app
```

2. Backend setup

```powershell
cd backend
npm install
# Create a .env file based on the example below
```

Create a `.env` file in `backend/` (example):

```text
# Server
PORT=5000

# Database (example for Postgres)
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=expense_management_db

# Auth
JWT_SECRET=your_jwt_secret

# External APIs
COUNTRY_API_URL=https://restcountries.com/v3.1/all?fields=name,currencies
EXCHANGE_RATE_API_URL=https://api.exchangerate-api.com/v4/latest

# Other
NODE_ENV=development
```

3. Initialize database

The repository includes `database/schema.sql` and `database/seed.sql`. Using PostgreSQL (recommended):

```powershell
# Create the database (run in psql or your DB admin tool)
# psql -h localhost -U postgres -c "CREATE DATABASE expense_management_db;"

# Apply schema and seed
# From the repository root
psql -h $env:DB_HOST -U $env:DB_USER -d $env:DB_NAME -f database\schema.sql
psql -h $env:DB_HOST -U $env:DB_USER -d $env:DB_NAME -f database\seed.sql
```

If you use MySQL adapt the commands accordingly (e.g., using `mysql -u user -p dbname < schema.sql`).

4. Start the backend

Typical npm scripts:

```powershell
# If a dev script with nodemon exists
npm run dev

# Or start directly
npm start
```

5. Frontend setup

Open a new terminal (PowerShell):

```powershell
cd frontend
npm install
npm start
```

The frontend will typically run at http://localhost:3000 and the backend at http://localhost:5000 (adjust per `PORT`).

## API Documentation

Detailed API docs are in `docs/api-docs.md`. Use that as the primary reference for endpoints, request/response shapes, and authentication flows.

## Important Notes & Assumptions

- I could not read concrete `package.json` contents from the workspace metadata, so the README uses common `npm` script names (`start`, `dev`). If your `package.json` defines different scripts, run those instead.
- Database engine: the project includes raw SQL schema files. PostgreSQL is recommended; schema may work with other SQL databases with small adjustments.
- Environment variables: the list above is a recommended starting point — adjust names to match your configuration in `src/config/*` if different.

## Development tips

- On first login/signup the app auto-creates a Company and an Admin user. Use the seeded users in `database/seed.sql` (if present) for quick testing.
- Currency conversion uses the exchange rate API (see `backend/src/services/currencyConverter.js`). Consider caching rates to reduce external API calls.
- OCR parsing is implemented in `backend/src/services/ocrParser.js`. You can swap or improve the OCR engine as needed.

## Mockup

App mockup (excalidraw): https://link.excalidraw.com/l/65VNwvy7c4X/4WSLZDTrhkA

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes
4. Open a pull request

Please include tests for new behavior where possible.

## License

This project does not include a license file in the repository. If you plan to publish this project publicly, consider adding an open-source license such as MIT. Example `LICENSE` file can be added at the repo root.

## Contact

If you need help setting up the repo locally, share any error output and I can help troubleshoot the specific problem.

---

If you'd like, I can:
- Add a `README` badge set (build, license, node version).
- Create example `.env.example` files for backend and frontend.
- Generate simple start scripts in `package.json` files if you want me to add them (I'll inspect the actual `package.json` files first).

"Requirements coverage": This README updates the placeholder and documents the problem statement, core features, setup, and assumptions. (See the repo's `docs/` for API details.)
