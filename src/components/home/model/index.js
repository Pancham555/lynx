// import Model from "@/components/components/spaceship/ModelDraco";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React, { Suspense } from "react";

const SpaceShip = () => {
  return (
    <div>
      {/* <div className="md:px-10 px-5">
        <h2 className="text-2xl text-center font-bold mb-5">
          A Simple 3D GLTF model below
        </h2>
        <div>
          <div className="h-64 lg:h-[28rem] mb-10 rounded-md">
            <Canvas
              className="rounded-md"
              camera={{
                far: 1000,
                fov: 35,
                zoom: 2,
                near: 5,
                position: [35, 25, 25],
              }}
            >
              <ambientLight intensity={0.5} />
              <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Suspense fallback={null} />
              <Environment preset="sunset" background />
              <Model />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div> */}
      <div className="bg-theme">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
          }}
          className={"bg-white w-full h-32 -scale-x-100"}
        ></div>
      </div>
    </div>
  );
};

export default SpaceShip;
