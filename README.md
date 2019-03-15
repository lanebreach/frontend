# LaneBreach Front-end

This repository contains the front-end application for viewing the data for the
lane-breach application.

## Prerequisite

### Packages/Tools
[Node](https://nodejs.org/en/download/package-manager/)
[Install yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
[Install docker](https://www.docker.com/get-started) if not already installed.


### Setup Project
```bash
git clone https://github.com/lanebreach/frontend.git
cd frontend/
touch .env
yarn
```

## Project Operations
```bash
# Running locally
yarn dc:refresh


# Build for production
yarn prod:build
```
The app is now running on `localhost:5000`
