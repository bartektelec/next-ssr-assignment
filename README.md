<img src="./.readme/noroff-light.png" width="160" align="right">

# # JS Frameworks - Module Assignment 4

# Brief

Create a new app using Create Next App.

You can create an app inside the current folder using:

```
npx create-next-app .
```

> If your repo name has a capital letter in it make the folder name all lowercase before running the above command.

---

You can use a UI library like React Bootstrap or style it all on your own. The styling is not important for this assignment but every frontend project must always be responsive.

Find a URL that returns multiple results. You can use any URL except the ones used in this week's module.

You can also hardcode json and return it from an API route in `pages/api/*`.

All UI should be built the "Next.js" way. Don't, for example, use React Router.

---

## Level 1

Create these 3 routes, named exactly:

- "/"
- "/results"
- "/about-us"

Place links to these routes in some kind of nav common to all pages.

All three pages should use a `Heading` component.

### Home page

This page should display a heading and a link to the results page.


### Results page

This page should make a call to your URL and display at least 2 properties from each result.

You can use either static generation or server-side rendering.

If one of the properties you display is an image source, use Next's `Image` component.

### About us page

This page should display a heading and lorem text.


---

## Deployment

Deploy your site to either Vercel or Netlify and place a link to your deployment at the top of the assignment's README.

---

