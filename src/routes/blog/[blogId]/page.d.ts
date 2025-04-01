import { Component } from 'svelte';

export interface BlogData {
	data: {
		file: {
			default: Component;
			metadata: {
				title: string;
				description: string;
				timestamp: number;
				slug: string;
			};
		};
	};
}
