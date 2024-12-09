import * as THREE from 'three';
import getStarfeild from './getStarfield.js'

const w = window.innerWidth;
const h = window.innerHeight - 150;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, w / h, 0.1, 2000);
camera.position.z = 12;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const parent = new THREE.Object3D()
console.dir(parent);
const objects = []

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
console.dir(earthGroup)
const detail = 12;
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshStandardMaterial({
    map: loader.load('/earth/00_earthmap1k.jpg'),
    blending: THREE.AdditiveBlending,
});

const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.6,
    map: loader.load('/earth/03_earthlights1k.jpg'),
    blending: THREE.AdditiveBlending,
});

const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);


const cloudsMat = new THREE.MeshStandardMaterial({
    map: loader.load('/earth/04_earthcloudmap.jpg'),
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
});
const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
cloudsMesh.scale.setScalar(1.002);
earthGroup.add(cloudsMesh);

const stars = getStarfeild({ numStars: 3000 });
scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-1, 0.8, 1.5);
scene.add(sunLight);

// multiple
// x + right, - left
// y + up, - down
// z + near, - far 
const points = [
    {
        x: -3,
        y: 2,
        z: 0,
        body: 0xd0f8ba,
        wings: 0xfc0000,
    },
    {
        x: -3,
        y: -1,
        z: 0,
        body: 0xd0f8ba,
        wings: 0xb9570c,
    },
    {
        x: 2,
        y: 1,
        z: -2,
        body: 0xfc0000,
        wings: 0xfc0000,

    },
    {
        x: -2,
        y: 2,
        z: -2,
        body: 0xfc0000,
        wings: 0xfc0000,

    },
    {
        x: 2,
        y: 1,
        z: 4,
        body: 0xfc0000,
        wings: 0xfc0000,

    },
    {
        x: -2,
        y: -2,
        z: 2,
        body: 0xfc0000,
        wings: 0xfc0000,

    },
    {
        x: -1,
        y: .5,
        z: 2.5,
        body: 0xca0a9a,
        wings: 0xfc0000,

    },
    {
        x: 1,
        y: -1,
        z: 2.5,
        body: 0xf28e13,
        wings: 0xfc0000,

    },
    {
        x: 0,
        y: -1,
        z: -2.5,
        body: 0xf28e13,
        wings: 0xfc0000,

    },
    {
        x:-2,
        y: -1,
        z: -2.5,
        body: 0xfc0000,
        wings: 0xfc0000,

    },
    {
        x: -1.5,
        y: 2,
        z: -3,
        body: 0x8c56c3,
        wings: 0xfc0000,

    },
    {
        x: -3.5,
        y: 0,
        z: 3,
        body: 0x8c56c3,
        wings: 0xffffff,
    },
    // green 1
    {
        x: 4,
        y: -1,
        z: 0,
        body: 0xf4fc00,
        wings: 0x9ced22,
    },
    // green 2
    {
        x: -4,
        y: 1,
        z: 0,
        body: 0xf4fc00,
        wings: 0x9ced22,
    },
  
    //blue 1 / 9
    {
        x: 4,
        y: -.1,
        z: 1,
        body: 0x54cedf,
        wings: 0xffffff,
    },
    //blue 2 / 10
    {
        x: 3.5,
        y: 1,
        z: 3,
        body: 0x54cedf,
        wings: 0xffffff,
    },
    {
        x: .7,
        y: 1,
        z: -1,
        body: 0xca0a9a,
        wings: 0xffffff,
    },
    {
        x: .5,
        y: 1,
        z: -4,
        body: 0x54cedf,
        wings: 0xffffff,
    },
    {
        x: .5,
        y: 1,
        z: 4,
        body: 0x54cedf,
        wings: 0xffffff,
    },
];

for (let i = 0; i < points.length; i++) {
    // shapes
    const cylinder = new THREE.CylinderGeometry(.75, .75, 2, 12, 6);
    const rectangle = new THREE.BoxGeometry(4, 1, .25, 8, 8, 1);

    //   materials
    // canister
    const bodyMat = new THREE.MeshPhongMaterial({
        color: points[i].body,
        specular: 0xffeebb,
        shininess: 90,
        reflectivity: 0.75,
    });
    //   wings
    const wingMat = new THREE.MeshPhongMaterial({
        color: points[i].wings,
        specular: 0xffffff,
        shininess: 45,
        reflectivity: 0.5,
    });
    // frame
    const frame = new THREE.MeshStandardMaterial({
        color: 0x000000,
        wireframe: true
    })

    //   meshes
    const satelite = new THREE.Mesh(cylinder, bodyMat)
    const wings = new THREE.Mesh(rectangle, wingMat)
    const wingDetail = new THREE.Mesh(rectangle, frame)
    wingDetail.scale.setScalar(1.001)
    // wings.position.set(0, 0, .25)

    wings.add(wingDetail)
    satelite.add(wings)

    satelite.position.x = points[i].x
    satelite.position.y = points[i].y
    satelite.position.z = points[i].z

    satelite.scale.setScalar(.1)
    objects.push(satelite)
    parent.add(satelite)
}
// new frame
// const wire = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
// const wireframe = new THREE.Mesh(geometry, wire)
// wireframe.scale.setScalar(2.5)
// scene.add(wireframe)

parent.scale.setScalar(2)
earthGroup.scale.setScalar(2.5)
parent.add(earthGroup)

scene.add(parent);
function animate() {
    requestAnimationFrame(animate);
    parent.rotation.y += 0.006
    earthGroup.rotation.y += 0.009
    objects.forEach(obj => {
        obj.rotation.y += Math.random() * .01
    })

    renderer.render(scene, camera);
}
animate();
export default earthGroup