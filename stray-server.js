/*
    express-test
    following https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
*/

var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

var poem = `Water in the camera is a sign of what can happen when wet words enter a hot field.
Subjects without cameras in a place without cameras.
Some people will say that this camera is a precision instrument but I say that this camera is an instrument for going stray.
A camera that is straying on an object other than a human face may be detected as a human face.

*

Virtual horizons in exposure zones,
Night scenes or points of light,
Subjects in low light,
Subjects at the edge of the picture,
Subjects strongly reflecting light,
Subjects moving dramatically up, down, left and right,
Subjects that change speed and move erratically,
Subjects approaching or moving away from the camera, 
Subjects at the edge of the picture,
Subjects in an audible field,
Subjects going stray. 

*

Touch the subject to focus. 
Going stray like hairs on the neck. 
Picture stray hairs crossing a 
subjects eye and then erasing 
stray subjects from the frame. 
How stray light reaching the image plane 
enters the camera during exposure 
and even if the sun is slightly away 
from the angle of view it may still 
cause smoke or fire. 
Dragging on the monitor while looking 
through the viewfinder 
stray subjects moving through the finder 
move with many subjects lost & found.
`;
var length = poem.length;
var slides = 475;

// listen and respond
// (only GET)

/*
app.use(cors({
    origin: myorigin.tld, 
    allowedHeaders: [ 'Accept-Version', 'Authorization', 'Credentials', 'Content-Type' ]
}));
*/

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/now", (req, res, next) => {
  var now = new Date().getTime() / 1000;    // seconds since 1970 unix time
  var current_letter = Math.round(now % length);
  var current_slide = Math.round(now % slides);
  res.json({ now: now, poem: poem, length: length, current_letter: current_letter, slides: slides, current_slide: current_slide });
});
