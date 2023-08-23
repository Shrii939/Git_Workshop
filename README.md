
# Table of Contents

- [Introduction to Git](#introduction)
- [Installing Git](#installing-git)  
- [Configuring Git](#configuring-git)
- [Cloning a Repository](#cloning-a-repository)
- [Forking a Repository](#forking-a-repository)
- [Navigating a Project](#navigating-the-project)
- [Pushing Code to GitHub](#pushing-code-to-github) 
- [Creating Branches](#creating-github-branches)
- [Git Commands Summary](#git-command-summary)
- [README.md File](#what-is-a-readmemd-file)
- [Official Docs ](#official-docs)
- [ VS extention](#vs-code--extensions)
- [Student Developer pack](#github-student-developer-pack)
- [Open Source](#learn-about-open-source)
- [GitHub Advance](#Advance-GitHub)

## Introduction: What is GIT?

Git is a free and open-source distributed version control system (VCS), which is designed to handle everything from small to very large projects with speed and efficiency.

[![Video Title](https://www.youtube.com/watch?v=pBy1zgt0XPc)


### What is a VCS?

A version control system is a system that records changes to a file or set of files over time so that you can recall specific versions later. 

## GitHub

GitHub is a web platform for collaborative software development using version control, enabling developers to manage and share code, track changes, and work together on projects.

## Why Git?

Git is like a time machine for your code. It helps you keep track of changes you make, lets multiple people work on the same project without messing up each other's work, and makes it easy to go back in time if you make a mistake.

## What is a repository?

A repository (repo for short) is a place where your project files and their history live. It's like a folder for your project that Git can track and help you manage. Repositories start out empty - you add your initial project files and begin tracking and committing changes. 

## Creating a repository

Open GitHub.com and click the + icon in the top right corner and select "New repository". Give your repository a name, optionally add a description, choose if you want it public or private, and select whether to initialize the repository with a README file.


## Installing Git

To use Git on your local machine, you need to first install it.

### On Linux

On Linux, you can install Git through your distribution's package manager:

```bash
# Debian/Ubuntu
sudo apt install git

# Fedora 
sudo dnf install git

# Arch Linux
sudo pacman -S git
```


### On MacOS
On macOS, you can install Git through Homebrew:
```
brew install git
```
### On Windows
On Windows, you can download the installer from [git-scm.com](https://git-scm.com/download/win)

Configuring Git
Once Git is installed, you need to configure your name and email to associate with commits:
```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Git Desktop
[ Git Desktop ](https://docs.github.com/en/desktop)

## Cloning a repository

Cloning a repository copies the entire history of the project. It downloads a project and its entire code history. This is useful if you want to contribute to an existing project or want to use a project as a starting point for your own idea. 

## Cloning a Repository

Cloning a repository copies the entire project history locally. This allows you to contribute back to the project or use it as a starting point for your own idea.

To clone a repository from GitHub:

1. Navigate to the repository you want to clone on GitHub.

2. Click on the green **Code** button.

3. Copy the HTTPS or SSH clone URL.

4. Open your terminal and navigate to the directory where you want to clone the repository. 

5. Run the `git clone` command with the copied URL:

```bash
git clone https://github.com/user/repo.git
```


### Forking a repository 

Forking a repository allows you to freely experiment with changes without affecting the original project. Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

Forking a repository also lets you contribute back to the original without having to ask for write access.


## Navigating the Project

Once you have cloned a Git repository, you can navigate through the project directory using Bash commands like `cd` and `ls`.

For example:

```bash
# Change to the project directory 
cd my-project

# List files in current directory
ls 

# Change to src subdirectory
cd src

# List files in src dir
ls

# Go back up to project root
cd ..

# List all files recursively 
ls -R

```

The main commands for navigation are:

cd - Change directory
ls - List files and directories
pwd - Print working directory
cd .. - Go up one directory
.  - Current directory 
cd folder - Go into folder from current directory

## DO THE MODIFICATIONS

## Here is the git command to push code to GitHub:
## Pushing Code to GitHub

To start, you'll need to commit your changes locally first before pushing to GitHub. 

Stage your changes:

```bash
git add .
```

This adds all modified files to the staging area to be committed.

Commit the changes:
```
git commit -m "Add initial features"
```

This commits the staged changes with the given commit message.

Now you can push your local commits to GitHub:
```
git push origin main
```

This will push the local main branch to the main branch on the remote GitHub repository.

## Creating GitHub Branches

Branches allow you to develop features isolated from each other. The `main` branch is the default branch and contains production-ready code.

To create a new branch:

```bash
git checkout -b new-branch
``` 
This creates a new branch called "new-branch" and switches to it.

Make commits to the new branch locally

Then push the branch to GitHub:
```
git push origin new-branch
```
Here are some explanations of common Git commands that could be useful:
## Git Command Summary

### git clone
- Clones a repository into a new directory. 
- Allows you to get a local copy of a remote repository from services like GitHub.
- Usage: `git clone https://github.com/user/repo.git`

### git add
- Stages changed files to be committed. 
- You need to add files to the staging area before committing.
- Usage: `git add file.txt`

### git commit
- Commits staged changes to the local repository with a message. 
- Commits should be made in logical units.
- Usage: `git commit -m "Implement new feature"`

### git push
- Pushes local commits to the remote repository like GitHub. 
- Updates the remote with your local changes.
- Usage: `git push origin main` 

### git pull
- Pulls latest commits from the remote repository and merges into your local branch.
- Keeps your local copy in sync.  
- Usage: `git pull origin main`

### git branch
- Lists all local branches. Can also create a new branch.
- Usage: `git branch new-feature`

### git checkout
- Switches to a different branch. Detaches HEAD to that branch.
- Usage: `git checkout new-feature`

## What is a README.md File 
A README.md file is a text file that provides information about a software project. It is written in Markdown format and usually included in the root directory of a project.

Some common sections in a README.md file:

Project title and description - A brief overview of what the project is and does.

Installation instructions - Steps to install the required dependencies and get the project running locally.

Usage - Examples of how to use the software and its features.

Contributing - Guidelines on how others can contribute to the project.

License - Open source license for the project.

Credits/attributions - Recognize contributors, libraries used, tutorials followed etc.

Contact info - Ways to get in touch with the maintainer.

Table of contents - Allows quickly jumping to different sections.

## Official Docs
[ Official Docs ](https://docs.github.com/en/get-started/quickstart)
[ GitHub Education ](https://docs.github.com/en/education)
[ Video ](https://youtu.be/pBy1zgt0XPc) 


## VS CODE -Extensions
    Git Lens
    GitHub Copilot

## GitHub Student Developer Pack

[Student Developer Pack](https://education.github.com/pack)

The GitHub Student Developer Pack is a collection of tools and services that GitHub offers to students for free. It's designed to help students learn and build software projects more effectively by providing access to various resources used in software development. The pack includes a wide range of tools, cloud services, development environments, and learning resources that are essential for students pursuing computer science, programming, and related fields.

Here are some of the benefits typically included in the GitHub Student Developer Pack:

- **GitHub Pro:** Provides unlimited private repositories on GitHub, allowing students to work on personal projects privately.

- **Free Software and Tools:** The pack includes a variety of software and development tools, such as code editors, version control software, and more.

- **Cloud Services:** Offers credits for cloud services like AWS, Azure, and DigitalOcean, allowing students to deploy and host their projects online.

- **Learning Resources:** Access to online courses, tutorials, and learning platforms to help students enhance their programming and development skills.

- **Domain Name:** A free domain name for a year, which can be used to host personal websites or projects. 

- **Developer Licenses:** Some packs include access to developer licenses for specific tools and software.

- **API Access:** Access to certain APIs for building applications and projects.

To be eligible for the GitHub Student Developer Pack, students need to be at least 13 years old and enrolled in a degree-granting program, such as a university or college. The availability of specific tools and services can vary over time, and GitHub often partners with various companies and organizations to provide these resources.

To apply for the pack, students typically need to verify their student status through GitHub's education program. This program aims to support student developers and empower them with the tools they need to excel in their studies and projects.

## Learn about open source 

# Why Contributing to Open Source is Important

Here are some key reasons why contributing to open source projects is important:

- **Improve Coding Skills:** Working on real-world open source projects helps developers improve their coding abilities and learn new skills from other collaborators. It provides hands-on experience.

- **Gain Visibility:** Open source contributions allow developers to showcase their work publicly and build a reputation based on their work. It helps get noticed by potential employers. 

- **Give Back:** Contributing to open source lets developers give back to the open source community which has created many tools and resources they use. It helps support open source projects.

- **Collaborate:** Developers get to collaborate with other talented peers in the open source community and learn from them. It fosters teamwork and connection.

- **Solve Interesting Problems:** Open source projects offer interesting, challenging problems to solve across domains. Developers get to work on what they enjoy.

- **Improve Software for Everyone:** By contributing to open source tools and projects that many people use, developers can help improve software and technology for everyone.

- **Learn Real-World Collaboration:** Working with distributed teams on open source repositories teaches collaboration, communication, and version control skills. 

- **Gain Early Experience:** Students and new developers can gain experience by contributing to open source, as it provides opportunities to work on production-level code early on.

So in summary, contributing to open source allows developers to hone their skills, build their profile, give back to the community, and be part of improving software that benefits everyone. It's a great way to grow as a developer.


## Advance-GitHub
# Git Command Summary

Here is a summary of common Git commands:

- `git branch` - List, create, or delete branches
- `git checkout` - Switch between branches or restore working tree files
- `git merge` - Combine changes from different branches
- `git diff` - Show changes between commits, branches, or files
- `git log` - Show commit history 
- `git remote add` - Connect local repository to a remote repo
- `git push` - Push commits to remote repository
- `git pull` - Fetch and merge commits from remote repo
- `git fetch` - Fetch commits from remote repo
- `git clone` - Clone a remote repo into a new local directory
- `git init` - Initialize a new local Git repo
- `git config` - Set configuration values like username and email
- `git status` - Show changed files and repo status
- `git add` - Stage files for commit
- `git commit` - Commit staged files to local repo
- `git rm` - Remove files from working tree and stage removal
- `git mv` - Move or rename files and stage changes
- `git restore` - Restore files in working tree to last commit
- `git reset` - Reset current HEAD to specified state
- `git stash` - Stash changes for later
- `git tag` - Manage Git tags to mark versions
- `git show` - Show information about a Git object

And some other common commands:

- `git remote -v` - List remote repositories
- `git config --global` - Set global configuration
- `git commit --amend` - Edit most recent commit
- `git log --oneline` - Condensed commit history
- `git log --graph` - Visualize branch history
- `git blame` - Show who changed each line last
- `git revert` - Undo changes from earlier commit