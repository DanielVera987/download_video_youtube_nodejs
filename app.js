'use strict';

const fs = require('fs');
const youtubedl = require('youtube-dl');

const video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
  ['--format=18'],
  { cwd: __dirname });

video.on('info', (info) => {
  console.log('Dowload video');
  console.log(`Filename: ${info.__filename}`);
  console.log(`Size: ${info.size}`);
});

video.pipe(fs.createWriteStream('mivideo.mp4'));
