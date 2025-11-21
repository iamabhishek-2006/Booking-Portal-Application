// import React from "react";
// import Layout from "../components/Layout";

// const Home = () => {
//   return (
//     <Layout>
//       <div className=" h-[calc(100vh-60px )]">
//         <img src="Image.png" className="w-full h-[calc(100vh-235px)] object-cover  " />
//         <div>
//           <h1 className="text-2xl">Get Start Travel </h1>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Layout>
      <div className="h-[calc(100vh-60px)]">
        <img
          src="Image.png"
          alt="travel banner"
          className="w-full h-auto max-h-[calc(100vh-235px)] object-cover"
        />

        <div className="p-4">
          <h1 className="text-2xl font-semibold">Get Start Travel</h1>
          <Button>ranso</Button>
          {/* <Button asChild>
            <a href="/signin">Login</a>
          </Button> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

