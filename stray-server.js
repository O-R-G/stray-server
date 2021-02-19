/*
    express-test
    following https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
*/

var express = require("express");
var cors = require('cors');
var fs = require('fs');
var app = express();
app.use(cors());
var text_plain = '';
var text_plain_extended = '';
var text_plain_length;
var text_plain_extended_length;
fs.readFile('data/text.txt', 'utf8', (err, data)=>{
  if(err){
    console.log(err);
    return false;
  }
  text_plain = data;
  // console.log(data);
  text_plain_length = text_plain.length;
});

fs.readFile('data/text_extended.txt', 'utf8', (err, data)=>{
  if(err){
    console.log(err);
    return false;
  }
  text_plain_extended = data;
  // console.log(data);
  text_plain_extended_length = text_plain_extended.length;
});



var slides = 475;

var letter_duration = 3000;
var slide_text_duration = 1000;
var slide_image_duration = 10000;


// var slide_text_length = 707;
// var slide_image_length = 138;


// var chapter_1_length = 588;
// var chapter_2_length = 40;
// var chapter_3_length = 309;
// var chapter_4_length = 0;
// var chapter_5_length = 0;
// var chapter_6_length = 404;
// var chapter_7_length = 0;
// var chapter_8_length = 100;
// var entire_length = chapter_1_length + chapter_2_length + chapter_3_length + chapter_4_length + chapter_5_length + chapter_6_length + chapter_7_length + chapter_8_length;

// listen and respond
// (only GET)

/*
app.use(cors({
    origin: myorigin.tld, 
    allowedHeaders: [ 'Accept-Version', 'Authorization', 'Credentials', 'Content-Type' ]
}));
*/

app.listen(3002, () => {
 console.log("Server running on port 3002");
});

app.get("/now", (req, res, next) => {
  var now = new Date().getTime();
  // var current_letter = Math.round( (now/letter_duration ) % letter_length);
  var current_pos = parseInt(now/1000) % text_plain_length;
  var current_pos_extended = parseInt(now/1000) % text_plain_extended_length;
  // var current_slide_text = parseInt(Math.round( (now/slide_text_duration )) % slide_text_length);
  // var current_slide_image = parseInt(Math.round( (now/slide_image_duration )) % slide_image_length);
  // var chapter_1 = {
  //   length: chapter_1_length,
  //   current_slide: parseInt(Math.round( (now/slide_text_duration )) % chapter_1_length)
  // };
  // var chapter_2 = {
  //   length: chapter_2_length,
  //   current_slide: parseInt(Math.round( (now/slide_text_duration )) % chapter_2_length)
  // }
  // var chapter_3 = {
  //   length: chapter_3_length,
  //   current_slide: parseInt(Math.round( (now/slide_text_duration )) % chapter_3_length)
  // }
  // var chapter_4 = {
  //   length: chapter_4_length,
  //   current_slide: 0
  // }
  // var chapter_5 = {
  //   length: chapter_5_length,
  //   current_slide: 0
  // }
  // var chapter_6 = {
  //   length: chapter_6_length,
  //   current_slide: parseInt(Math.round( (now/slide_text_duration )) % chapter_6_length)
  // }
  // var chapter_7 = {
  //   length: chapter_7_length,
  //   current_slide: 0
  // }
  // var chapter_8 = {
  //   length: chapter_8_length,
  //   current_slide: parseInt(Math.round( (now/slide_text_duration )) % chapter_8_length)
  // }
  // var entire = {
  //   length: entire_length,
  //   current_slide: parseInt(Math.round( (now/slide_text_duration )) % entire_length)
  // }

  now = now / 1000;    // seconds since 1970 unix time
  console.log(now);
  // res.json({ 
  // 	now: now, 
  // 	text_plain: text_plain, 
  // 	letter_length: letter_length, 
  // 	letter_duration: letter_duration,
  // 	current_letter: current_letter,
  //   current_pos: current_pos,
  // 	slide_text_length: slide_text_length, 
  // 	slide_text_duration: slide_text_duration,
  // 	current_slide_text: current_slide_text,
  // 	slide_image_length: slide_image_length, 
  // 	slide_image_duration: slide_image_duration,
  // 	current_slide_image: current_slide_image,
  //   chapter_1: chapter_1,
  //   chapter_2: chapter_2,
  //   chapter_3: chapter_3,
  //   chapter_4: chapter_4,
  //   chapter_5: chapter_5,
  //   chapter_6: chapter_6,
  //   chapter_7: chapter_7,
  //   chapter_8: chapter_8,
  //   entire: entire

  // });
  res.json({ 
    now: now, 
    current_pos: current_pos,
    current_pos_extended: current_pos_extended
  });
});
