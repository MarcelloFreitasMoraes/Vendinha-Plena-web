import Header from "@/components/Header/Header";
import useClientData from "@/hooks/useClientData";

export default function Home() {
  const { ClientQuery, ClientMutation } = useClientData();
  console.log(ClientQuery.data, 'ClientQuery'); 
  
  return (
    <>
    <Header/>
      OLA
    </>
  );
}
