const e=`Hello world. This is my new personal website, so what better to
make the first post about than the site itself?

A lot has changed since I made my last site, but let's start by
talking about what I had before building the new one. The old site
had an architecture that was very of its era (or just based on
tech that I like). It was built using the Jekyll framework, a
static site generation framework. Jekyll allows for templating and
all kinds of nice features like that while still having a static
site. Jekyll is also Ruby based, and uses both liquid templates
and Markdown.

My previous site used the Bootstrap library for styling and such,
and I can't remember what bootstrap version it was, but I am
pretty sure it was 3. Other than that, there was just the Jquery
JavaScript library. Nice and simple, but it did the job, especially
when paired with Jekyll's templating.

As for hosting, even though Jekyll is great for GitHub pages, I was
running it on an OpenBSD VM with OpenBSD's httpd serving and Squid
acting as a cache. After building it, I really didn't update it much
at all, only making a couple blog posts. I can't remember when I
took it down, but I eventually decided it wasn't worth the trouble
of patching the server anymore.

So, after some time, I decided to build a new personal site. The
first question to answer in the build process is, which framework?
I have used a few of them in my work, but I opted to build it with
React + Vite. No particular reason as Angular and Vue are both
fine, though React definitely seems to be the trendy choice these
days. Initially, I opted to use MUI for styling, but I later
changed my mind on that.

On the subject of website styling, you would be better asking
someone else. I may be more than capable of doing full-stack and
frontend, but backend is definitely more where my heart is. I
chose bootstrap on the old site because I loved the simplicity and
that it was clean and easy. MUI felt in many ways the same, and
the way it integrated with React was fantastic. However, I really
didn't need all that much from my site, and it felt heavy-handed.
It also had a clean almost clinical aesthetic which would be great
for a UI in a portal of a commercial web portal. MUI was not quite
the vibe I wanted for my personal site, even after I themed it to
be more fun and pink than it was out of the box. Would I use MUI
again? For a professional project, without a doubt, but for a
personal site or project, probably not.

After getting bored with MUI, I was searching things when I
stumbled upon 98.css. This is a CSS library to replicate the look
and feel of Windows 98. Unless I have updated this site again, and
you are reading this on yet another new site, it should be obvious
that I started over with 98.css. It took a little effort to shape
the CSS to accommodate my goals for the site, but I had a lot more
fun working with it. The site flew together with my newfound
retro-computing inspired motivation and I had the skeleton of it
done in no time.

Now, back to the old site again, I really enjoyed the Markdown
support, especially for blog posts. It just makes the writing
process more easy and streamlined where more complicated HTML/CSS
styling is not needed. This took a couple dependencies including
\`react-markdown\`, \`remark-gfm\`, and \`remark-emoji\`. Okay, the last
two weren't strictly necessary, but \`remark-gfm\` adds GitHub's
extensions to Markdown like tables (which are very useful). The
\`remark-emoji\` dependency adds, as the name suggests, emoji
support, which just make me happy 🤷‍♀️. More specifically, it makes
adding emoji easier with \`:+1:\` converting to :+1: and such as it
is still possible to use the actual UTF-8 characters to insert
emoji without \`remark-emoji\`, but it makes it easier. Or at least
it usually does, as it failed to pick up that \`:shrugging_woman:\`
emoji I just used and instead substituted a generic shrug, but I
can work around that with the actual emoji character when it
happens. So, I am calling that a "\`close enough\`" moment and I
will open an issue with \`remark-emoji\` when I get a moment to do
so.

That's about it from a technical decision standpoint. From there,
it was just all fiddling with CSS, making style choices, redoing
all the progress I made from my first attempt when I was using MUI
before deciding to restart, etc.

Finding the image for the home page definitely proved to be a
challenge. There is no shortage of creative commons/public domain
art out there, but the problem now is so much of it is AI. This is
a non-starter for me. I consider AI art to be problematic, and I
certainly don't want to use it on my website. This is definitely
an issue I didn't have to face when building my old website. On
the old site, I just used an artsy photo I took, but here I wanted
something that felt more on theme for the Windows 98 styling.
Eventually I found an image in a game asset pack of all places. It
is definitely still possible to find good art to use for free, but
AI certainly makes it harder.

That brings us to now, where there is one finished website. Well,
mostly finished as I have some more planned things, but for now
it's good enough to ship.`;export{e as default};
