# Authentication System Implementation Plan

## Goal Description
Implement a production-grade authentication system for Myspire using SQLite, supporting Sign Up, Sign In, and Session Management. The system will securely store credentials using password hashing and manage sessions via secure HTTP-only cookies.

## User Review Required
> [!IMPORTANT]
> **Database Choice**: We will use SQLite (via `better-sqlite3`) as a file-based database. This is excellent for simple deployments but requires persistent storage volume if deployed to cloud container services (like Docker/Kubernetes). For a single server (VPS) setup using PM2, this is perfect.

## Proposed Changes

### 1. Database Layer
#### [NEW] [src/lib/db.js](file:///home/ramadhan/web_myspire/myspire-web/src/lib/db.js)
- Initialize SQLite database using `better-sqlite3`.
- Create `users` table if not exists (Schema: `id`, `email`, `password_hash`, `name`, `created_at`).

### 2. Security & Utilities
#### [NEW] [src/lib/auth.js](file:///home/ramadhan/web_myspire/myspire-web/src/lib/auth.js)
- `hashPassword(password)`: Uses `bcrypt` to hash passwords.
- `verifyPassword(password, hash)`: Verifies credentials.
- `createSession(user)`: Generates a JWT using `jose`.
- `getSession()`: Retrieves user session from cookies.

### 3. API Routes (Server Actions or Route Handlers)
#### [NEW] [src/app/api/auth/register/route.js](file:///home/ramadhan/web_myspire/myspire-web/src/app/api/auth/register/route.js)
- POST endpoint to handle user registration.
- Validates input using `zod`.
- Checks for existing email.
- Creates user and sets session cookie.

#### [NEW] [src/app/api/auth/login/route.js](file:///home/ramadhan/web_myspire/myspire-web/src/app/api/auth/login/route.js)
- POST endpoint to handle login.
- Verifies email and password.
- Sets session cookie.

#### [NEW] [src/app/api/auth/logout/route.js](file:///home/ramadhan/web_myspire/myspire-web/src/app/api/auth/logout/route.js)
- POST endpoint to clear session cookie.

### 4. UI Integration
#### [MODIFY] [src/app/login/page.js](file:///home/ramadhan/web_myspire/myspire-web/src/app/login/page.js)
- Connect form to `api/auth/login` and `api/auth/register` endpoints.
- Handle loading states and error messages.
- Redirect to `/` upon success.

## Verification Plan

### Manual Verification
1.  **Sign Up**: Register a new account (`test@example.com`). Verify entry in SQLite database.
2.  **Sign In**: Log out and log back in with correct credentials. verify success.
3.  **Authentication Failure**: Try logging in with wrong password. Verify error message.
4.  **Session Persistence**: Refresh page and ensure user remains logged in.
