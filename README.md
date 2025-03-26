# ekin akkaya's portfolio

- Next.js
- Tailwind CSS
- Orbitron (https://fonts.google.com/specimen/Orbitron)
- pnpm

```powershell
# install packages
pnpm i

# run
pnpm dev
```

# TODO

## frontend
- [x] prepare a mockup page for project description that shows the image and the information and the links and stuff.
  - [x] prepare basic mockup
  - [x] add markdown support
- [x] make the viewing page editable
- [x] make it so that the project is editable IF the user is admin
  - (we need auth for this but for now make the editing unlock with a isAdmin flag)
- [x] add a "you are already signed in" logic to the signin page
- [x] on signin page, make it so that enter key triggers a login
- [x] fetch the actual project data on project details page
- [x] fetch the actual project data on project edit page
- [x] add functionality to the save button in the edit page
- [ ] in the edit page, the "please login" screen shows up for a second even if we are logged in, fix it

### admin stuff
- [x] add a page for creating & editing projects.
- [x] add a button for creating projects
- [x] add a button for deleting projects
- [ ] make it so that every 5 seconds, the project gets autosaved

## backend
- [x] set up firebase auth
- [ ] determine the data structure for the database
  - for now lets say that we will just have a table of "projects"
  - and we will have these fields
    - id
    - title
    - description
    - markdown
    - image
    - link
  - on the frontend, we will render the description as markdown.
- [x] setup firebase and firestore
- [x] see all the projects in the projects folder
- [x] fetch project by id
- [x] create new project
- [x] delete project
- [x] save project