import { useLazyGetAllClinicsQuery } from "@/redux/features/clinics";
import { useEffect } from "react";

export default function Home() {
  const [getClinics] = useLazyGetAllClinicsQuery();
  useEffect(() => {
    getClinics().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col p-8">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Clinics
      </h2>
    </div>
  );
}
