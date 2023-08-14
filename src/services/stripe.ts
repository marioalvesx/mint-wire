import Stripe from "stripe";
import { version } from "../../package.json";

// Verifica se a variável de ambiente está definida antes de usá-la
const stripeApiKey = process.env.STRIPE_API_KEY;

if (!stripeApiKey) {
  throw new Error("Stripe API key not defined in environment");
}

export const stripe = new Stripe(stripeApiKey, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Ignews",
    version,
  },
});
