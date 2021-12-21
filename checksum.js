const bcrypt = require("bcryptjs");
const getChecksum = async (...args) => {
    const hashString = args.join("|");
    const hash = await bcrypt.hash(hashString, 10);
    let buff = new Buffer.from(hash);
    let base64String = buff.toString('base64');
    return base64String;
}