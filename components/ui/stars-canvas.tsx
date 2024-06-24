import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import * as random from "maath/random";
import { TypedArray } from "maath/dist/declarations/src/ctypes";

const Stars = (props: any) => {
  const ref = useRef<THREE.Mesh>(null);
  const [sphere, setSphere] = useState<TypedArray>();

  useEffect(() => {
    return setSphere(random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  }, []);

  useFrame((state: any, delta: any): any => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group
      rotation={[0, 0, Math.PI / 4]}
    >
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <motion.div
      className="w-full h-full absolute inset-0 z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>{" "}
        <Preload all />
      </Canvas>
    </motion.div>
  );
};

export default StarsCanvas;
