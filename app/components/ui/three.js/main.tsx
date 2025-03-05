"use client";

import * as THREE from "three";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
// Canvas : react-three/fiber에서 제공하는 컴포넌트로, 3D 씬을 렌더링할 수 있는 공간 제공 = WebGLRenderer
// useFrame : 애니메이션 프레임마다 호출되는 훅, 프레임마다 3D 객체를 업데이트하거나 애니메이션을 적용
// ThreeElements : mesh, light, camera에 대한 타입을 제공하는 TypeScript 유틸리티
import { useRef, useState } from "react";

function Box(props: ThreeElements["mesh"]) {
  // ThreeElements의 mesh를 type으로 정의
  const meshRef = useRef<THREE.Mesh>(null!);
  //   Mesh : 3D 객체를 생성하는데 사용되는 기본 요소
  // Geometry(기하학적 형태) : Mesh의 기본 형상을 정의
  // ex ) BoxGeometry(상자), SphereGeometry(구), PlaneGeometry(평면)
  //   Material (재질) : 색상, 텍스쳐, 반사 등 시각적 특성을 부여하는 요소
  // ex ) MeshBasicMaterial, MeshLamberMaterial, MeshStandardMaterial

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  //   매 프레임마다 호출되며, 3D 객체의 애니메이션을 업데이트하는데 사용
  //   meshRef.current.rotation.x를 매 프레임마다 조금씩 증가시켜 상자가 회전
  //   state : 애니메이션의 상태 (카메라, 시간)
  // delta : 두 프레임 사이의 시간 차이
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      {/* react-three/fiber에서 자동으로 제공, 별도로 import 안해도됨 원래는 THREE.BoxGeometry*/}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "#2f74c0"} />
    </mesh>
  );
}

const MainThree = () => {
  return (
    <Canvas>
      {/* 조명 intensity : 조명의 강도 */}
      <ambientLight intensity={Math.PI / 2} />
      {/* 원뿔조명 */}
      <spotLight
        position={[10, 10, 10]}
        // position={[x,y,z]}
        angle={0.15}
        // 각도 기본값 Math.PI / 3
        penumbra={1}
        // 빛이 부드럽게 퍼지는 정도
        // 0 : 날카로운 가장자리
        // 1 : 부드러운 경계
        decay={0}
        // 거리가 증가할 수록 빛이 점점 약해짐
        intensity={Math.PI}
      />
      {/* 모든 방향으로 빛을 방출 */}
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default MainThree;
