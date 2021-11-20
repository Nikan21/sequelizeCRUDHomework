const http = require("http");
const express = require("express");

const PORT = 5000;

http.createServer(app).listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
