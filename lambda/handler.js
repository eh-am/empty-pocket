var GetPocket = require('node-getpocket');
var config = {
  "consumer_key": process.env.POCKET_CONSUMER_KEY,
  "access_token":  process.env.POCKET_ACCESS_TOKEN
};

var pocket = new GetPocket(config);

export const all = async (event, context, callback) => {
  pocket.get({}, function(err, resp) {
    if (err) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(err)
      })
    } 

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(resp)
    });
  });  
};