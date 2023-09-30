const app = require("./index");

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in  mode on port ${PORT}`));
