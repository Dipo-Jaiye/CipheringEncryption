const hmac256 = require("crypto-js/hmac-sha256");
const header_config = (body) => {
    const PayloadSignature = hmac256(JSON.stringify(body), process.env.KEY);
    const headers = {
      "headers": {
        "Payload-Signature": PayloadSignature,
        "Content-type": "application/json",
      },
    };
  
    return headers;
  };