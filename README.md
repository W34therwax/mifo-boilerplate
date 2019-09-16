This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This repo is about tooling and initial file structure. Just some ideas, we could use some of them for MIFO. Components created here, its code is just to show off file structure (mostly copied from storybook example, simplified and 'typescripted').

1. general project structure
there are so many ways of structuring react apps, all seems flawed in one way or another. I found out something like that, it sounds resonable, what do You think? please skim that article
https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145

In general:
a) all components that are reusable are on /components root level

b) component that is clearly a part of other component, not reusable is created in parent dir

c) component is splited per files per different responsibilities, only top most component is exported from index file.

d) components that represent route live in /pages dir

2. I added redux with thunk, no use of redux is included in the repo (only empty store dir), but check out this way of structuring redux related code, for me it make sense:

https://github.com/alexnm/re-ducks
https://github.com/jthegedus/re-ducks-examples/tree/master/re-ducks-todos

3. Router - for some time there is reach router lib that is getting momentum, its created by react-router creator. They say they will unify both solutions in the end, but that unified solution would have API similar/same as reach router, so is seems more future proof.

https://reach.tech/router/credits
https://reacttraining.com/blog/reach-react-router-future/

4. Storybook - I heard good things about this dev approach and after toying with it here I think its really cool. The way you develop with it is first write youself simple storyfile (really easy), run storybook instance (npm run storybook - it starts like separate app, hot reload and everything), and develop against that story. This way its really easy to develop components in separation, have component documented. There are also ways to use it in automated testing which I did not explore.

official nice tutorial:
https://www.learnstorybook.com/react/en/get-started/

example in action:
http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default

5. firestore integration. I added some firebase libraries that integrate with redux - redux-firestore and  react-redux-firebase . I am still not certain if this is good approach, or would I prefer to use firebase client API directly. In createview we had simpler project and choose not to use redux at all, only react context api. 

6. eslint, prettier - how do you feel about those two? I like to use them and store config on repo, so everyone have same rules. What those rules are, especially considering prettier are not so important to me, but the fact that they are same for everyone make code consistent I think.

7. react hooks - do we want them, what do you think? We used them (for the first time) on createview most components and did like them, but don't have to go this direction if we are not certain it make sense.

8. I added here styled components, but this is just an example. We can easily get rid of them in favour of scss, I don't mind.
https://www.styled-components.com/

9. create react app ? do we start with that, do you suggest anything else?
