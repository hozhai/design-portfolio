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

## Commands

For the commands, you can simply start typing and you'll see the little box above your command toolbox showing you what you're typing. You can press the *Enter* key to execute the command, or you can also just click on the command in the toolbox.

We're going to work with the `explode` command, which turns a big curve into smaller single and open curves<sup><a href="https://docs.google.com/document/d/1zxbwmq4aCWRUT7lNrqvKN97O5vH6wkhJEFNbDH9WMOw/edit?tab=t.0" target="_blank_">source</a></sup>.

We're also going to work with the following commands:

* `Join` - this command will join two or more curves into one single curve.
* `Trim` - this command will delete the section of a curve based on the intersection of another curve or feature.
* `Split` - this command divides objects into parts using other objects as cutters.
* `Break` - this command will remove a portion of a curve between two selected points.

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

## OSnap

There's also a tool called OSnap which stands for object snapping and it allows you to snap to the end of a line, the middle of a line, the intersection of two lines, and the center of a circle. This is very useful for creating shapes that are aligned with each other and creating closed curves. No more tiny gaps between your curves!

You can enable OSnap in the bottom toolbar of Rhino right next to the *SmartTrack* tool. 

After you've enabled it, you'll see these little checkboxes on the bottom left of your screen, something like this:

![OSnap]($lib/assets/osnap.webp?enhanced)

You might not have the exact options enabled, but these are the snapping points that will be made available to you.

Along with OSnap, another useful tool is used: the `move` command.

The move command allows you to move objects around the canvas. You can also use the gumball to move objects around, but the move command is more precise and allows you to move objects to specific points with OSnap enabled.

Try [these](https://drive.google.com/file/d/1W-EXHhbN6jLUPp70WGXYwOEZh8BnW6pu/view?usp=sharing) exercises!

1. ![Exercise 1]($lib/assets/lesson4_one.webp?enhanced)
2. ![Exercise 2]($lib/assets/lesson4_two.webp?enhanced)
3. ![Exercise 3]($lib/assets/lesson4_three.webp?enhanced)
4. ![Exercise 4]($lib/assets/lesson4_four.webp?enhanced)

[Here](https://drive.google.com/file/d/1h3k6L_VLP_ysO0UpIuPbj24sW-8Nu0p_/view) are my finished exercises!

## TextObjects

We will now work with text! Open up Rhino, and type in the command `TextObject`. Make sure to select `TextObject` and not `Text`, as they're very different; `TextObject` makes words with curves that you can control, modify, and manipulate, while `Text`s are just, texts. They don't do much.

You can then select fonts, text styles, etc.!

This time we're going to use 2 commands:

- `TextObject` - this command creates a text object out of curves that can be manipulated and modified.
- `Offset` - this command creates a new curve that is offset from the original curve. This is useful for creating outlines and borders around shapes.
- `Hatch` - this command creates a hatch pattern inside a closed curve. This is useful for creating patterns and designs inside shapes. For our use we will just use the solid fill option.

Select one of the letters, and type `Offset`. Make sure to check "Through Point" when you're using the `Offset` command. This will allow you to choose the distance between the offset line and your current line with your mouse instead of having to tweak a number value.

After you're done with that, deselect everything and type Hatch. Select the letter along with its offset line by dragging, and then press Done. After that, you can select the space you want to fill with the hatch. Click the space between the offset line and the original line, and then press Done. You can also select the hatch pattern you want to use, but as aforementioned for our purposes we will just use the solid fill option.

You should see something like this! I chose the font *[Rush Driver](https://www.1001fonts.com/rush-driver-font.html)* and typed "Coding"!

![textobject]($lib/assets/textobject.webp?enhanced)

## Distance, Dim, & Scale

If you want to print the project into a vinyl, for example, you would probably want to be able to know the measures inside Rhino; see the length of lines in millimeters, and there's a command for that! Make sure OSnap is turned on, and type `Distance`. Select the two points you want to measure, and it will show you the distance between them in the command line on the bottom of your screen. 

There's another command that goes hand in hand with `Distance`, and it's the `Dim` command. This command will measure the length, but also create arrows and measurements for you in case you want to print those too. They'll look something like this:

![dim]($lib/assets/dim_rhino.webp?enhanced)

**DO** keep in mind that `Dim` will measure the horizontal distance and the vertical distance but not the diagonal distance like `Distance` does.

For irregular shapes, sometimes it might be hard to measure the distance between two points. In this case, you can use the `BoundingBox` command, which will surround your object within a rectangle.

If you want to scale the object to a specific amount, for example, to be 50mm wide, you can use the `Scale` command. This command will allow you to scale the object to a specific size by selecting two points and then entering the desired size.

## Layers & Pictures

To organize your project better, there is a tab on the right side of your screen with an icon that looks like a slice of cake. Click on it, and you'll see your properties panel be replaced with the layers panel, where you can see all the layers in the project. Layers can overlap each other, and you can make layers visible or invisible through the lightbulb icon; if the lightbulb is switched on, it's visible, and if not, then it's not.

You can also click the lock icon to lock the layer, meaning you can no longer select it, which will help for our next command: `Picture`.

The `Picture` command will open a file selection prompt where you can select an image file to insert into your project.

Before anything, select your image and go to the properties panel and the materials tab; the tab right next to the object tab. It looks like a paint tube. Change the object transparency to something low, so you can see the lines when you trace over it.

Select your image, go to its properties, and change the layer to another layer other than `Default`, and then lock the layer you moved the image to so you can no longer select it by accident.

Now you can trace over the image! Here's me tracing a very important person in my life!

// TODO

## Initials Decal

Now that we know how to use Rhino, let's create a simple decal with our initials!

First, I made a draft of all the possible ideas I had:

![drafts]($lib/assets/initials_draft.webp?enhanced)

I ended up choosing the one on the middle right. Here's it in Rhino!

![initials]($lib/assets/initials_decal.webp?enhanced)

This was a fun project! I ended up doing the design first, printed it, and had to add more at the end, but nonetheless it was a fun project and a great way to learn how to use Rhino as well. I was going to use the original profile picture (the head silhouette) but I was afraid that the hair strands would be smaller than 1mm. Here's my profile picture:

![profile picture](https://avatars.githubusercontent.com/u/57015971)

Other than that, I stuck to the design I had first and ended up with a project I'm pretty happy with!

![final decal]($lib/assets/initials_decal_final.webp?enhanced)