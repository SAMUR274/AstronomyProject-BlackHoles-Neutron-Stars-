"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const BlackHoleModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222, 1);
    scene.add(ambientLight);
    
    // Add directional lights with blue/purple tint for space feeling
    const directionalLight = new THREE.DirectionalLight(0x3366ff, 2);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);
    
    // Add point lights for the "engulfed in flames" effect
    const redLight = new THREE.PointLight(0xff3300, 5, 20);
    redLight.position.set(2, 0, 2);
    scene.add(redLight);
    
    const orangeLight = new THREE.PointLight(0xff9900, 5, 20);
    orangeLight.position.set(-2, 0, -2);
    scene.add(orangeLight);
    
    // Black hole center sphere (event horizon)
    const blackHoleGeometry = new THREE.SphereGeometry(3, 64, 64);
    const blackHoleMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.1,
      metalness: 1
    });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    scene.add(blackHole);
    
    // Accretion disk (using a torus)
    const diskGeometry = new THREE.TorusGeometry(6, 1.5, 30, 100);
    const diskMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6600,
      emissive: 0xff3300,
      emissiveIntensity: 0.5,
      roughness: 0.5,
      metalness: 0.8,
    });
    const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
    accretionDisk.rotation.x = Math.PI / 2; // Make it horizontal
    scene.add(accretionDisk);
    
    // Create particle system for the "flames" effect
    const particleCount = 5000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Create particles positioned in a disk-like shape
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 5 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 2;
      
      positions[i3] = radius * Math.cos(theta);
      positions[i3 + 1] = height * (Math.random() * 1.5);
      positions[i3 + 2] = radius * Math.sin(theta);
      
      // Color gradient from yellow to red to purple
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        colors[i3] = 1;  // R
        colors[i3 + 1] = 0.6;  // G
        colors[i3 + 2] = 0;  // B
      } else if (colorChoice < 0.6) {
        colors[i3] = 0.9;  // R
        colors[i3 + 1] = 0.2;  // G
        colors[i3 + 2] = 0;  // B
      } else {
        colors[i3] = 0.6;  // R
        colors[i3 + 1] = 0.0;  // G
        colors[i3 + 2] = 0.8;  // B
      }
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // Camera position
    camera.position.set(0, 5, 20);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the black hole
      blackHole.rotation.y += 0.005;
      
      // Rotate accretion disk
      accretionDisk.rotation.z += 0.01;
      
      // Animate particles to create a swirling effect
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        
        // Rotate around the center
        const angle = 0.005;
        positions[i3] = x * Math.cos(angle) - z * Math.sin(angle);
        positions[i3 + 2] = x * Math.sin(angle) + z * Math.cos(angle);
        
        // Subtle pulsation effect
        positions[i3 + 1] *= 0.999 + Math.random() * 0.002;
      }
      particleGeometry.attributes.position.needsUpdate = true;
      
      // Make lights flicker for a flame effect
      redLight.intensity = 5 + Math.random() * 2;
      orangeLight.intensity = 4 + Math.random() * 2;
      
      // Subtly move the light positions
      const time = Date.now() * 0.001;
      redLight.position.x = Math.sin(time * 0.7) * 3;
      redLight.position.z = Math.cos(time * 0.5) * 3;
      orangeLight.position.x = Math.sin(time * 0.3) * 3;
      orangeLight.position.z = Math.cos(time * 0.5) * 3;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", onWindowResize);
    
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", onWindowResize);
      
      // Clean up THREE.js resources
      particleGeometry.dispose();
      particleMaterial.dispose();
      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();
      diskGeometry.dispose();
      diskMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />;
};

export default BlackHoleModel;