var WIDTH = 400, HEIGHT = 300;

var VIEW_ANGLE = 45,
	ASPECT = WIDTH / HEIGHT,
	NEAR = 0.1,
	FAR = 10000;

var $container = $('#container');

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

var scene = new THREE.Scene();

scene.add(camera);
camera.position.z = 300;

// Make a sphere
var radius = 50, segments = 16, rings = 16;

var sphereMaterial = new THREE.MeshLambertMaterial(
{
	color: 0xcc0000
});

var sphere = new THREE.Mesh(
	new THREE.SphereGeometry(
		radius, segments, rings
	),
	sphereMaterial);
scene.add(sphere);

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

// Done
renderer.setSize(WIDTH, HEIGHT);

$container.append(renderer.domElement);

var step = function(renderer, scene, camera) {
	return function() {
		renderer.render(scene, camera);
	}
}(renderer, scene, camera);

setInterval(step, 100);