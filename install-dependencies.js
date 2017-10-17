#!/usr/bin/env node
const request = require('request');
const { exec } = require('child_process');

request('https://morning-peak-73646.herokuapp.com/players/repo', (error, response, players) => {
  console.log(players);
  const bowerDependencies = JSON.parse(players).join(' ');
  console.log(bowerDependencies);
  if(bowerDependencies) {
    exec(`./node_modules/.bin/bower install ${bowerDependencies} --save`, (err, stdout, stderr) => {
      console.log(`${err}`);
      console.log(`${stdout}`);
      console.log(`${stderr}`);
    });  
  }
});