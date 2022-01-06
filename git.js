// Git commands
  // Git-scm.com


  // starting a project, initializing git and cloning a repo to your local machine
    git init
    git init projectDirectory
    git clone repoURL


  // Undo commits
    git reset  - - soft HEADER 
    // (go back one commit but don’t undo my changes to my files).. or
    
    git reset - - hard
    // (Go back one commit and undo my changes to my files)


  // Remove files from git history
    git rm -cached filename (remove git knowing about a file, the file won’t be tracked anymore)


  // Merging 
  // Git merge branch


  // SEE STATUS / CHANGES / DIFFERENCES / what branch you’re on
    Git status
    Git diff
    Git log 
    Git branch 


  .gitignore
  // - hides files from being tracked / changed 


  git add .
  // Adds only things changed 

  
  git add - - a
  // Adds all changes globally for entire repository


  git commit -am ‘commit message’
  // Shortcut for add all and then commit message


  git push origin master 
  // (push changes to master branch)


  git checkout -b branchname 
  // (switch to another branch)
