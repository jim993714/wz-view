"use strict";
const a = (n) => (n.install = (e) => {
  const t = n.name || n.__name;
  e.component(t, n);
}, n);
module.exports = a;
