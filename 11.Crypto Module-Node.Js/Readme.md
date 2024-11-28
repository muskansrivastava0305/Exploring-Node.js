# Crypto Module - NodeJS

## 1: crypto.randomBytes(size)

**Purpose:** Generates cryptographically strong random data.
*Usage:* Useful for creating token or unique IDs.

## 2. Crypto.createHash(algorithm)
**Purpose:** Create a hash for a given input using algorithm like sha256.

*Usage:* Ensure data integrity (e.g. verifying file changes)

### crypto.randomBytes(size)

**Real-Life Examples:**
1. Token Generation for Password Reset

- When users request a password reset, generate a secure random token.

`Example:` - A user clicks "Forgot Password" --> A random token is sent via email --> The token is verified during the rest process.

2. API Keys and Secret Generation .
- Generate secure API keys for third-party integration.

`Example:` - When creating a developer account on pkatform like Twitter or GitHub, a unique API key is generated. 

### crypto.createHash(algorithm)

**Real-Life Examples:**

1. Password Hashing  (Login Systems).
- Hash user passwords before storing them in a database to enhance security.

`Examples:` - A user's password is hashed with sha256 and stored During login, the entered password is hashed and compared. 


`Plain Text ----> Hash Function ----> Hashed Text`