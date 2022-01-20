"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello end-labs test endpoint",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.goodbyes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "goodye end-labs test endpoint",
        input: event,
      },
      null,
      2
    ),
  };
};
