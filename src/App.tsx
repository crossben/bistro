import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Navigation } from './components/Navigation';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="h-screen w-full">
      <Navigation />
      <div className="relative h-screen">
        <Canvas
          shadows
          camera={{ position: [5, 5, 5], fov: 45 }}
          className="h-full w-full bg-black"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-4">Le Sam Sam</h1>
            <p className="text-xl">Découvrez la haute cuisine</p>
          </motion.div>
        </div>
      </div>
      <section id="menu" className="min-h-screen bg-black text-white p-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Notre Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl mb-4">Entrées</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex justify-between">
                    <span>Soupe à l'oignon</span>
                    <span>$12</span>
                  </div>
                  <p className="text-gray-400">Oignons caramélisés, bouillon de bœuf, pain croustillant, gruyère</p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <span>Escargots</span>
                    <span>$16</span>
                  </div>
                  <p className="text-gray-400">Beurre à l'ail, herbes, pain</p>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl mb-4">Plats Principaux</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex justify-between">
                    <span>Coq au Vin</span>
                    <span>$32</span>
                  </div>
                  <p className="text-gray-400">Poulet braisé, sauce au vin rouge, champignons</p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <span>Bœuf Bourguignon</span>
                    <span>$38</span>
                  </div>
                  <p className="text-gray-400">Bœuf mijoté, vin rouge, légumes</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;