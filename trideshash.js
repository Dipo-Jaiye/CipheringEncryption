const triDesHash = (text, passphrase) => {
    let md5hash = crypto.createHash('md5').update(Buffer.from(passphrase)).digest();
  
    key = Buffer.concat([md5hash, md5hash.slice(0, 8)]); // properly expand 3DES key from 128 bit to 192 bit
  
    const cipher = crypto.createCipheriv('des-ede3-cbc', key, Buffer.alloc(8));
  
    const encrypted = cipher.update(text, 'utf8', 'base64');
  
    return encrypted + cipher.final('base64');
}