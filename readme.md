# How to run it

- Install dependencies with `yarn` or `npm install`
- Run `yarn start` or `npm run start`
- Open `http://localhost:8080/`

# Implemented features

- Selecting background and removing it
- Ading logos via drag and drop
- Adding text with selected font
- Moving logos and texts
- Deleting logos and texts with via right click(context menu)
- Saving and loading state
- Downloading created image

Most of my time I spent on Saving/loading feature as I had to make some changes  
to the store. I wasn't thinking about this feature from the begging and it kinda fucked me up.  
In total I spent around 10h making this.

# Technical decisions and problem

I decided to go with scss, react hooks and my own store and actions. Most often I work with redux and styled-components and I wanted to try out new approach (expecially experimented with actions). Also I was trying to do this with atomic design but it's not usual application and I haven't that much time to think and plan out all the structure so this approach ended up not exactly as I imagined it. Some of the code is also kinda sketchy as I run out of free time and couldn't make final refactor :) Meybe I will add more features and refactor that code later (probably won't).
