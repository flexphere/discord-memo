const client = require('cheerio-httpcli')
client.set('followMetaRefresh', true);

module.exports = (url) => {
  let ret = client.fetchSync(url);
  if (ret.error || !ret.response || ret.response.statusCode !== 200) {
    console.log(url);
    throw ret.error;
  }

  console.log(ret.response.headers["content-type"])

  if (!ret.response.headers["content-type"].includes('text/html')) {
    console.log("SKIPPING")
    return null;
  }

  return [
    url,
    ret.$('title').text(),
    ret.$('meta[name="description"]').attr('content'),
    ret.$('meta[name="keywords"]').attr('content')
  ];
}