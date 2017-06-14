var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      meme = /^\/meme$/,
      guide = /^\/guide$/,
      records = /^\/records$/,
      orders = /^\/orders$/,
      menus = /^\/menus$/,
      help = /^\/help$/,
      business = /^\/business$/;
  
  if(request.text && meme.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && guide.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1XkFx5BlbWRut3lLIIOtYds_SLpxcBsCfo4gfwDmItM0/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
    if(request.text && records.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1vGXOkNTHAcKaxb5w_8uoJC1gsGAoKaBQN5jsHdtOzkk/edit#gid=0");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
    if(request.text && orders.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.ordercosmic.com/admin/orders?verifyMe=rff8e7f5f5w");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && menus.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.ordercosmic.com/admin/orders?verifyMe=rff8e7f5f5w");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && help.test(request.text)) {
    this.res.writeHead(200);
    postMessage("DispatchBot commands: /guide, /records, /orders, /menus, and /help (but you knew that).");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && business.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.ordercosmic.com/rocket/business_delivery/order_entry");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

}//end respond()

function postMessage(s) {
  var botResponse, options, body, botReq;

  botResponse = s;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
} //meme


exports.respond = respond;
