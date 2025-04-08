---
title: Whole page revamp!
description: Full migration to SvelteKit, actual good coding practices, and more!
timestamp: 1742177352978
---

## Hey everyone!

It's been a while. If you haven't noticed already, I made a full website revamp! I hope you like it :)

This version should be MUCH faster, MORE stable, and should have LESS bugs.

The old version was written in React 18; React 19 is available now. Not only that, but the old version relied on `react-router`, a package intended to, well, add routing and subpages to the website, which didn't work at all -- if you tried to reload the page while in a blog, it'd just give you a 404 error.

It also depended on _wayyy_ too many packages, for some context, just know that there was a dependency called `react-top-loading-bar` that my app couldn't work without. It was the dependency behind the loading and scrolling progress bar.

What. The. Hell.

Not only that, but the particle effect in the home page was extremely resource hungry; it would make my M1 Pro Mac just start running on overdrive and the keyboard would get so hot it become difficult to type.

It's that, and also the fact that I wrote the website a year ago. The code wasn't documented well, the commit messages were _awful_, the code itself was horrible and unmaintainable, and I just couldn't keep dealing with it. Adding a new blog in itself was a chore, the blogs were saved as objects in an array that had all the blogs, and you'd load a blog by doing something like

```js 2,5
// imports ALL the data
import { blogsArray } from '../blogsData/blogs.js';

// just to access one...
const blog_2_title = blogsArray[2].title;
```

and that would make your browser load EVERY BLOG. EVEN IF YOU WANTED TO VIEW JUST **ONE**.

Oh, and I think you've noticed, but the code blocks here look much better :)

## So... what does this do better?

Firstly, _that it's popular doesn't mean it's good_, _cough cough_ looking at you, React.

According to the [2024 StackOverflow Developer Survey](https://survey.stackoverflow.co/2024/technology/#admired-and-desired), Svelte is the 3rd most admired web technology.

And the developers at Svelte have this cool thing called _SvelteKit_, which turns Svelte into a full-fledged production-ready full-stack web framework. _Phew, that was a lot of magic words._

This project, built from scratch using SvelteKit, not only no longer downloads all the blogs at once, but it also uses actual Markdown files to store blog data which is lazily loaded when needed as opposed to Javascript template strings that are all loaded at once, every time, along with sticking to actual good coding practices and conventions, with impactful optimizations and no below-average user experience design (as opposed to the old website).

The dependencies that are used here are _actually_ necessary, and they all get compiled while building, meaning none of these dependencies are needed for production. If you don't believe me, check the package.json; all of the dependencies are in the `devDependency` field. This website is _blazingly-fast_! (I think.)

The files used to storage the blogs actually uses the MDX (using MDsveX) format, meaning that I can also add Svelte components in here if I wanted to. Here's a button! Check the [source code here](https://github.com/hozhai/design-portfolio) if you want to see how it works behind the hood :)

<button class="btn btn-primary" onclick={() => {open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); alert("AHA! Get Rickrolled <3")}}>
  I'm a button!
</button>

Oh, and the button doesn't do anything. Don't try.

We can also do math equations here now!

$$
f^{\prime}(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}
$$

I'm genuinely really proud of what I've done here, and I'll most likely stick with this page from now on. I love all of you!!!

P.S.: I'm not actually proud, just relieved :) ADHD ftw

Peace! Zhai out.
