import { config } from "dotenv";
import { CreateApp } from "./CreateApp";

config();

async function main() {
  try {
    const app = CreateApp();
    app.listen(process.env.PORT || 8000, () =>
      console.log(`application is running on port ${process.env.PORT || 8000}`)
    );
  } catch (e) {
    console.log(e);
  }
}
main();
