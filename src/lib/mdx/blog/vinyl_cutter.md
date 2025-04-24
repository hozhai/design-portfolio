---
title: "Vinyl Cutter"
description: "Design Tech - Using Rhino and a vinyl cutter to make stickers and decals!"
timestamp: 1745509047000
---

# Welcome back!

In this blog we're going to use Rhinoceros 8 to create some simple shapes!

Rhino does need a license to run, but I get to use it for free because I have an educational license :)

## Getting started

You can download Rhino [here](https://www.rhino3d.com/download/rhino/8/evaluation).

After you've completed the installation process, open Rhino and you should see this:

![Rhino Menu]($lib/assets/rhino_menu.webp?enhanced)

Double click on *Small Objects - Millimeters*, it should then open a new window with a blank canvas and 4 viewports. It might take a bit for it to load though, give your computer some time to think :)

You should see something like this:

![Rhino Blank Project]($lib/assets/rhino_blank_project.webp?enhanced)

On the left, you can see some tools like in Microsoft Paint or Photoshop, and these are like tools, except they're called commands because Rhino is fancy and you can type them out instead.

We have 4 viewports, allowing us to have a top, front, right and perspective view of our project. You can change the view by clicking on the viewport name in the top left corner of each viewport. You can also change the view by click the view you want to access on the top left of the viewport.

You can fully focus on a viewport by double clicking its name.

We're going to use the top view because it is the one that is most similar to a 2D drawing. The front and right views are 3D views, and the perspective view is a 3D view that allows you to see the object in a 3D space.

You can move the camera's orbit in the perspective view by holding right click and moving your mouse, and you can move around by holding shift and holding the right click.

Let's double click the top view's label to allow it to occupy our entire screen, and let's draw some shapes!

We'll use tools from the first two rows of the toolbar.

Mess around, and create some random shapes! Make sure to also enable the gumball feature by clicking on *Gumball (CPlane)* all the way at the bottom of the Rhino app.

I made the universal icon of "coding"! (which is a self closing unnamed HTML tag, but whatever-)

![Rhino Project]($lib/assets/rhino_gumball_enabled.webp?enhanced)

You can also left click and hold to drag a box to select objects and lines, however, there are two different methods of dragging.

Dragging left to right will select everything that is fully inside the box; the box also has solid borders.

Dragging right to left will select everything that is touching the box; the box has dashed borders.

Here's the flag of my home country in Rhino!

![CN Flag]($lib/assets/rhino_flag_cn.webp?enhanced)

For the commands, you can simply start typing and you'll see the little box above your command toolbox showing you what you're typing. You can press the *Enter* key to execute the command, or you can also just click on the command in the toolbox.

We're going to work with the `explode` command, which turns a big curve into smaller single and open curves<sup><a href="https://docs.google.com/document/d/1zxbwmq4aCWRUT7lNrqvKN97O5vH6wkhJEFNbDH9WMOw/edit?tab=t.0" target="_blank_">source</a></sup>.

We're also going to work with the following commands:

* `join` - this command will join two or more curves into one single curve.
* `trim` - this command will delete the section of a curve based on the intersection of another curve or feature.
* `split` - this command divides objects into parts using other objects as cutters.
* `break` - this command will remove a portion of a curve between two selected points.

With this knowledge we can complete the following exercises. These have already been completed by me :)

Try them on your own! Here's the <a href="https://drive.google.com/file/d/1AuiHhcn4l8BNuOdAA2OfY4CDVLV4yMly/view" target="_blank">link</a> to the exercises.

1. ![Exercise 1]($lib/assets/lesson3_one.webp?enhanced)
2. ![Exercise 2]($lib/assets/lesson3_two.webp?enhanced)
3. ![Exercise 3]($lib/assets/lesson3_three.webp?enhanced)
4. ![Exercise 4]($lib/assets/lesson3_four.webp?enhanced)

[Here's my finished file for the exercises uploaded to drive](https://drive.google.com/file/d/1LTaRCkFZRWfp6u4hAgyVeBDnU1sfPGDV/view?usp=sharing).

The reason why we want so many closed curves is to practice actually printing decals for our projects with the vinyl cutter. Closed curves, a curve that starts and ends at the same point, allows you to actually create shapes and peel them off the vinyl. 

Here's a good demonstration placed on my classroom.

![Vinyl cutter]($lib/assets/curves_vinyl.webp?enhanced)