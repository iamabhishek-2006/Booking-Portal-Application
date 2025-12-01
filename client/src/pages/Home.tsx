import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const Home = () => {

  return (
    <Layout>
      <div className="h-[calc(100vh-60px)]">
        <img
          src="Image.png"
          alt="travel banner"
          className="w-full h-auto max-h-[calc(100vh-235px)] object-cover  "
        />
        <div className="p-10 border-3  text-center flex justify-center gap-3 bg-[#EDEDED]">
          <div>
            <h1 className="text-2xl font-semibold ">Get Start Travel</h1>
          </div>
          <input
            className="border-2 p-2 rounded-lg border-black outline-none"
            type="text"
            placeholder="From"
          />
          <input
            className="border-2 p-2 rounded-lg border-black outline-none"
            type="text"
            placeholder="To"
          />
          <input
            className="border-2 p-2 rounded-lg border-black outline-none"
            type="date"
            placeholder="DD-MM-YY"
          />

          <input
            className="border-2 p-2 rounded-lg border-black outline-none"
            type="text"
            placeholder="Return"
          />
          <Button className="p-6">Search</Button>
        </div>
      </div>
    </Layout>
  );
};
export default Home;

