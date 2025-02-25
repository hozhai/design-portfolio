<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	interactivity();

	let rotation = $state(0);
	let pos = new Spring(-0.6);
	let scale = new Spring(1);

	useTask((delta) => {
		rotation += delta * 0.5;
	});

	$effect(() => {
		pos.target = 0.4;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0.5, 2, 0]}
	oncreate={(ref) => {
		ref.lookAt(4, 3, 0);
	}}
/>

<T.DirectionalLight position={[0.2, 0.3, 0.25]} color="#f1f1f1" />

<T.Mesh
	position={[3, pos.current, 0]}
	rotation={[1, 1, rotation]}
	scale={scale.current}
	onpointerenter={() => (scale.target = 1.05)}
	onpointerleave={() => (scale.target = 1)}
>
	<T.IcosahedronGeometry args={[2, 2, 2]} />
	<T.MeshStandardMaterial color="#ffffff" />
</T.Mesh>
