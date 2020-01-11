# LaneBreach Front-end

# NOTE: Work on this project has been paused in favor of using a templated solution. We'll revisit this decision at some point in 2020.

This repository contains the front-end application for viewing the data for the
lane-breach application.

## Build Status (master)
[![CircleCI](https://circleci.com/gh/lanebreach/frontend.svg?style=svg)](https://circleci.com/gh/lanebreach/frontend)

## Prerequisite

### Packages/Tools
- [Node](https://nodejs.org/en/download/package-manager/)
- [Install Docker](https://www.docker.com/get-started) if not already installed. (Enable Kubernetes in the settings)

### Environment (Optional)
While not at all required, this projecct is optimized for Microsofts Free VSCode IDE and Google's CloudCode plugin for VSCode.

You can download VSCode here:
- [VSCode](https://code.visualstudio.com/)

You will then want to install the CloudCode plugin, which can be done by navigating to the extensions (squares) icon in the lefthand toolbar and searching for it.

You can find more info on all the features here:
- [CloudCode Plugin](https://cloud.google.com/code/)

### Setup Project
Clone the project, cd into it, install dependencies, pick a port and run it. You're now live and ready to code.
```bash
git clone https://github.com/lanebreach/frontend.git
cd frontend/src
npm install
PORT=3000 npm run-script dev
```

## Project Operations
### Running Locally
```bash
PORT=3000 npm run-script dev
```

The app is now running on [localhost:3001](http://localhost:3001). 

N.B.: The web-app port for local development is always `PORT` + 1.

### Mimicking Production Locally
To ensure that things will work in production. You can use the included Kubernetes manifests and skaffold file to build the Docker images, and deploy to your one-node K8S cluster running on Docker for Desktop on your machine.

If you have VSCode and the CloudCode plugin installed, simply bring up the Command Pallet (Shift-Command-P [MacOS]) and type `Deploy`. Hit `enter` and it will give you options about what cluster to deploy to (if you happen to have more than one configured). Hit `enter` again and watch the magic begin.

If you stumble into an issue that only seems to be occuring here, you can have CloudCode automatically build and deploy on file change using the `Continuous Deploy` rather than `Deploy` option.

### Build for Production
Production builds are handled by CircleCI on merge of your feature branch into `master`. You can find the build scripts in .circle/config.yml file.

More information about the build / deployment can be found in docs/architecture/BuildDeploy.md


## Developer Workflow
1. Check out the project
2. Make a new feature branch `git checkout -b feature/my_feature_name`
3. Make changes
4. Run tests
5. Commit with a descriptive message of your changes, ideally with a prefix to the issue number in GitHub you are addressing. E.g.:
```
#[19]: Refactored code base to mirror build concerns in directory structure. Added build and deploy configuration using CircleCI
```
6. Head to GitHub and make a Pull Request
7. If CircleCI builds and people approve, you can merge to master.
8. Someone will eventually release the deployment hold, and your changes will roll out live to the main site!
