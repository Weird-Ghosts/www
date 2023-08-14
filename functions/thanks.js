exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Handle the form data here

  return {
    statusCode: 200,
    body: "Form submitted successfully!",
  };
};
