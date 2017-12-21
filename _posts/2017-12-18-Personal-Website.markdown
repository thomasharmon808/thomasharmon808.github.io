---
layout: post
title:  "Personal Website"
subtitle: "Building this personal website was my first foray into front-end development and a rewarding experience."
date:   2017-12-18 11:14:44 -0500
number: 3
categories: projects
---

This was my first experience at front-end development and I found it to be a very rewarding experience. I built this website all by myself, from the ground up, with the help of Bootstrap 4, Jekyll, HTML 5, and SCSS. It was a large change from the type of programming I had become used to from school work, which was either Java or C/C++, and obviously much more low level. I found it an interesting challenge to use the constantly and rapidly developing web frameworks, with limited documentation and examples, but found it very rewarding.

When trying to build this website, I had a few goals in mind. These were: 

1. Fast and lightweight
2. Looks great
3. Uses the latest frameworks
4. Easy to maintain and update

My personal assessment is that I did very well on all of these fronts. I love quantifying things, so I did some measurements about the size and speed of the content on my site. The site as a whole takes up 1.2 MB (TO UPDATE) and the home page takes XXXX ms to load. This compares to an internet-wide average of XXXX MB and a loading speed of XXXX ms. That is a XXX improvement of loading time over the average website. Now, if you are taking a more fair lens to this issue, you would compare it to other blog and resume-type personal websites. The data for this, however, doesn't exist. The data also isn't worthwhile to collect since most websites that fall into that category are very skin and bones sites that use in-browser site building tools that don't have the same challenge as creating a website from scratch, as the most commonly used templates are the ones created by developers who have a lot more web-dev experience than I do.

Now for my second goal, this is not quantifiable and my opinion is very biased - I'm very proud of how my website turned out and love the way it looks. I do think however, that there are possible improvements that could be made. I'm not very knowledgable in design and if I knew more about fonts and colors I think I could make some changes to make it even more appealing. I would also love to be able to create my own artwork for each project to have as the thumbnail for each project post.

The third goal is very simple to know what to do, but given that Bootstrap 4 is in beta at the time of writing, not the easiest to know how to do it. For many simple tasks there were not a lot of Bootstrap 4 specific examples. Even though they were not very different from the previous version of Bootstrap, it just made it slightly more difficult as I had zero web-dev experience coming into this project. This was not something to big to overcome, and was actually a fun part of the project because I had the challenge of figuring many things out by myself - and when I did, it was rewarding.

For my final goal, I'm ecstatic with how easy it was to update my website with new posts. Given the power of Jekyll, all I had to do in order to add new posts to my site is create a new markdown file detailing it - which is exactly how I'm writing this post right now. If I want to add a new section to my home page, all I have to do is add it to the main `index.html` file and to `navbar.html` in my `_includes` folder. If I want to add new layouts, all I have to do is describe what specifically is special about that new layout because all of the boilerplate (head, navbar, footer, etc) is covered by the `_includes` folder. This is a very pleasant way to update my site, as I never have to worry about conflicts or any major reconstruction to the structure of my site in order to add new layouts or posts. When I do add them, they are all separated into their own specific areas, so I can focus on what I want to achieve, and not slog through all of the other site's codebase in order to add new content.


Thank you for reading about my site, and I hope you enjoyed it! If you want to check out my source code, you may find it at [GitHub](https://github.com/thomasharmon808/thomasharmon808.github.io).