# Time to Fish! by Pichy Jumpholwong

A short interactive narrative where the player experiences an adventure of fishing
on a new island in Animal Crossing New Horizons.

# Experience Goals

I wanted audiences to experience what it's actually like to play the game
Animal Crossing New Horizons (ACNH), and I wanted to include the activity fishing, where you
can catch different types of fish! Not only would people experience what fishing is like in ACNH, but
they would get to explore different islands across the game. They would also get to view an
introduction video of what they can expect at the bottom.

# Reference Art

All images used are screenshots from my own island in ACNH. I did this so it was easier
to make the story and customize what I wanted to wear and hold. My overall reference for
this project from this image as it inspired this project's concept.
Because fishing is a big part of the game as you can sell them for bells (money),
making an interactive game like this enables those who are not familiar with
the game or just want to see what it is like to play ACNH. The images were also a basis of editing the HTML/CSS in terms of text and color.

![image](https://raw.githubusercontent.com/pichyj/Time-To-Fish/main/89994064-3170-4eb9-b760-92d72489094a%2Facnh%20fishing.jpeg?v=1638384978614)

The video that plays in the beginning is from the first annoucement trailer from the official ACNH Youtube channel.
I found the video and thought
it would be a great "intro" to the game for those who just want
to view it or those who do not know much about the game.

This image of a wave also helped me decide how to better design the background because I was able to just use that
image and change the opacity. This helped relate to the theme of fishing better and make it so that
players are even more willing to play. Because the image was already curved, I decided to keep it just how it is.
![image](https://raw.githubusercontent.com/pichyj/Time-To-Fish/main/3041ed69-16f2-4ca4-b819-67f667fbab1b%2Fwave%20image.svg?v=1638480206098)

The Nintendo Switch was also a reference as the game has to be played on the switch.
![image](https://raw.githubusercontent.com/pichyj/Time-To-Fish/main/89994064-3170-4eb9-b760-92d72489094a%2Fnintendo%20switch%20image.jpeg?v=1638302306525)

# Authoring Process

I created the images based off of my P3 project which consisted of screenshots from my own
ACNH island. I did this to easily choose what to do with my story and be
more creative with it. It also makes the interaction better as people can experience elements from the original game.

I used the same text in the font Fink Hevy as it is the ACNH font to emulate
the overall game and feeling of actually playing ACNH. This was edited in the HTML/CSS
in order to fix the color and font for it to be seen and similar to ACNH.

In terns of the video, I converted it through an MP4 so that I can upload it as an asset,
and evnetually include it into the HTML. The video was able to be implemeneted and played
by making it centered and clicking to play it in the HTML. I had to convert it into an MP4
or else I could not upload it onto glitch and have it play. I also kept the video without
editing it as it is the real video trailer when ACNH was first being released.

I used a cursor from cursor.cc where an ACNH leaf was available to use as a cursor.I kept the green
cursor because it is the most similar to the ACNH icon when you recieve items and when it falls off the trees.
However, the link below also allows for more modifications of different colors, but it made more sense to keep the
green leaf as that is the actual icon. However, when hovering over choices, it becomes a pointer, similar to the
actual game.

[cursor](https://www.cursor.cc/?action=icon&file_id=28145)

Diagram of game:

![image](https://raw.githubusercontent.com/pichyj/Time-To-Fish/main/20063bc3-0987-4207-a361-6d7d8ed86e5b%2FIMG_1724.PNG?v=1635997615416)

# Technical Foundation

The starter code I used is from Professor Adam Smith's P3: Photo Graph. [Adam's P3](https://glitch.com/~photo-graph-base-2021)

The most similar past project that was used was based off my P3 project, "Time to Fish."
[myP3](https://p3-time-to-fish.glitch.me)

This was the right tehcnical foundation relative to the experience goals because I added my
own images from a game I actually play, and wanted to expland on that by making it actually
appear on a game console. My P3 acted as if you were actually playing ACNH, therefore I
wanted to enhance that experience by adding better colors that correspond to the game and
a video that would allow for an introduction to what can be expected. I really like how in
P3, you end up at the same ending, however, you go through different experiences depending
on the choice you make in terms of what to do during your fishing trip. Using images from a game I also played
gives it a more personal feeling too and I am able to share what I enjoy with others.
Most of the technical changes were done in HTML/CSS as I added lots of more code in order
to better sytlize the position, text, color, and size of image, captions, choices, and the
video. I also added more animation to make the background more dynamic as there are waves representing an ocean (like in fishing)!

# Artistic Presentation

In the index.html, I decided to add a video. This video is based off the actual ACNH
trailer whcih was released as a teaser before the game was released. I decided to add a
more centered bubble layout to the captions because it gives it more of a similar look
to ACNH. I made the bacground color and text color similar to what would be seen on the
actual game. Similarly, the choices are the same for the background color and the
text so that the feeling is the same when you are choosing something. I also added a cursor with
an ACNH leaf icon to convey that it relates to the game and gives it a new, fun feeling! In terms of the
background waves, I added them so that they had a more realistic feeling because fishing takes place in
water. Having it move makes it not only more fun, but allows players to be drawn into playing.

# Authoring Language

More specifically, in index.html lines 29-31, I added a video that could be paused at any
time, and the volume can change too. In line 45 of the html file, I added a new cursor so that whenever
hovering over the project, the cursor is a leaf of ACNH, again giving it the feeling of
the actual game. Additionally, when clicking on a choice, the cursor changes to grab a pointer, similar
to the game when choosing something when speaking. The entre CSS file has been changed through many additions, such as
centering, background colors, borders, and margins. This was done to get a similar look
to the game captions and choices. This was also done to animate the background. In lines 10-14 in index.html, I added a class container for an ocean and waves
in order for the background to be more dynamic and appealling in order to relate to the theme of fishing. More
of this is further fleshed out in style.css in lines 71-111 where I specified the location, color, and movement of the waves.

# Technical Interpretation

In rules.js there is a function called that gets the element in the type of cursor style.
This can be seen in lines 28-39, where the text I select makes it a pointer, hence why style.cursor = "pointer" and everywhere else on the page,
it is just a leaf cusor. It is located in the function function myFunction(x).


This was helped from W3Schools website: [W3Schools](https://www.w3schools.com/jsref/prop_style_cursor.asp)
This website helped me understand everything about cursors for programming. Professor Adam Smith also provided me with a link to
this website to understand how to do it.

# Help, Inspiration, and Credit

This was heavily inspired by ACNH through images and color. I also got help on how I can
make P3 better by attending Veronica's (TA) office hours as I had a previous P6 but had to scrap it due
to not having enough time. Professor Adam Smith also helped because of the base code from P3, and
providing links to the website about cursors.

I am not super good at programming, but with help from other in this class discord and from friend's
encouragement, I was able to continue pushing through this project despite having to start all over. :)
