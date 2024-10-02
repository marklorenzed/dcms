// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

type Data = {
  clinics: any[] | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const supabase = createClient(
    "https://gkrwbruhaylwbhvroyyb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrcndicnVoYXlsd2JodnJveXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwODEzNDgsImV4cCI6MjAwMDY1NzM0OH0._qXyj863Ieg8E8eJevM5ujYBS1sBRuKwQLqaWel02So"
  );
  const { data } = await supabase.from("clinic").select();
  console.log("data", data);
  res.status(200).json({ clinics: data });
}
