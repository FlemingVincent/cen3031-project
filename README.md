# CEN3031 Team Project

This is our team's project for CEN3031 - Introduction to Software Engineering.

# Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/FlemingVincent/cen3031-project.git
   ```
2. Navigate inside the repo.
   ```sh
   cd cen3031-project/
   ```
3. Install packages
   ```sh
   yarn install
   ```
4. Create a file named `.env`

5. Add the `BASE_URL` variable
   Mac users:
   ```
   BASE_URL=localhost
   ```
   Windows users:
   1. Open command prompt and run `ipconfig`
   2. Look at the `IPv4 Address`
      ```
      IPv4 Address. . . . . . . . . . : XX.XX.X.XX
      ```
   3. This is the address that will be your `BASE_URL`
      ```
      BASE_URL=XX.XX.X.XX
      ```
6. Run
   ```sh
   expo r -c
   ```

# To Make Changes

1. Create a branch (following proper naming conventions example: updating-readme)
   ```sh
   git checkout -b your-branch-name
   ```
2. After your changes have been made add them
   ```sh
   git add .
   ```
3. Commit changes
   ```sh
   git commit -m "your message here"
   ```
4. Push changes
   ```sh
   git push -u origin your-branch-name
   ```
5. Approve and merge changes into main on github

6. Change your branch back to main
   ```sh
   git checkout main
   ```
7. Pull to update main locally
   ```sh
   git pull
   ```

# Team Members

Aaron Bermudez, Vincent Fleming, Kevin Ochoa, and Bryan Torreblanca
