"use client"; 
import React, { useEffect } from 'react';
import * as THREE from 'three';

const MoonScene = () => {
  useEffect(() => {
    // Texture URLs
    const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"; 
    const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"; 

    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true}); // Set alpha to false for opaque background
    renderer.setSize(300, 300); // Fixed size for the moon
    document.getElementById('moon-container').appendChild(renderer.domElement);

    // Create geometry and materials
    const geometry = new THREE.SphereGeometry(2.9, 60, 60);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureURL);
    const displacementMap = textureLoader.load(displacementURL);

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: texture,
      displacementMap: displacementMap,
      displacementScale: 0.06,
      bumpMap: displacementMap,
      bumpScale: 0.04,
    });

    // Create and add the moon
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Add lights
    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(-100, 10, 50);
    scene.add(light);

    camera.position.z = 5;

    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      moon.rotation.x += 0.0006;
      renderer.render(scene, camera);
    }
    animate();

    // Handle resizing
    function onResize() {
      const width = 300; 
      const height = 300; 
      camera.aspect = width / height; 
      camera.updateProjectionMatrix();
      renderer.setSize(width, height); 
    }

    window.addEventListener('resize', onResize, false);

    return () => {
      window.removeEventListener('resize', onResize, false);
      renderer.dispose();
      const container = document.getElementById('moon-container');
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      id="moon-container"
      className="relative z-10 mx-auto sm:mx-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] top-[-400px] sm:top-[-500px]"
    />
  );
  
};

export default MoonScene;
