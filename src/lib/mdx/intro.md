```ts
import { Class } from '@nidodeaguilas/sophomore';

const zhai = {
	name: 'Hongmeng Zhai',
	age: 16,
	birthday: new Date(1222687800000),
	gpa: (() => throw new Error("too low"))(),
	countries: ['cn', 'cl'],
	languages: ['en-GB', 'es-CL', 'zh-CN'],
	learning_languages: ['pt-BR', 'ko-KR', 'fr-FR'],
	programming_languages: [
		'javascript',
		'typescript',
		'c',
		'cpp', 
		'java', 
		'kotlin', 
		'python', 
		'go'
	],
	classes: {
		a: Class.design_tech,
		b: Class.science,
		c: Class.changemakers,
		d: Class.social_studies,
		e: Class.concert_band,
		f: Class.english,
		g: Class.personal_fitness,
		h: Class.math_advanced
	},
	useless_skills: [
		'has a girlfriend (crazy i know-)',
		'can crack his knuckles indefinitely',
		'can almost spin a pen',
		'is ambidextrous'
	]
};
```
