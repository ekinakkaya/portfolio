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
- [ ] make the viewing page editable
- [ ] make it so that the project is editable IF the user is admin
  - (we need auth for this but for now make the editing unlock with a isAdmin flag)

### admin stuff
- [ ] add a page for creating & editing projects.
- [ ] add a button for creating projects
- [ ] add a button for deleting projects
- [ ] make it so that every 5 seconds, the project gets autosaved

## backend
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