
export const title = '党建'
const ip = require("ip");
export const udp = {
  prot: 8080,
  // address: '127.0.0.1'
  address: ip.address(),
}
export default {
  title,
  udp
}