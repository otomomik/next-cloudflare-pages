import { getEnv } from "@/utils";
import type { NextApiRequest } from "next";

const handler = (req: NextApiRequest) => {
  const env = getEnv();
  return new Response(JSON.stringify(env), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

export default handler;
