import { Component } from 'svelte';

export interface BlogData {
	data: {
		component: Component;
		metadata: {
			title: string;
			description: string;
			timestamp: int;
		};
	};
}
