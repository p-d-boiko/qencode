# Qencode test task

Check the result at [boiko.online](https://boiko.online)

Three views implemented:

1. [login](https://boiko.online/login)
2. [reset password](https://boiko.online/reset-password)
3. [set new password](https://boiko.online/set-new-password/some-long-token)

## Getting started with development

> Prerequisites: nodejs ≥ 18

1. Clone the repository
2. Create `.env.development` file in the projects' root:

```
# server configuration
HOST=localhost # or domain of your choice
PORT=3000 # or other port number available on your dev machine

VITE_API_HOST=https://auth-qa.qencode.com/v1/
# paste you own URL:
VITE_RESET_PASSWORD_REDIRECT_URI=http://localhost/password-set
```
3. Run `npm install`
4. Run `npm run dev` to start development server
