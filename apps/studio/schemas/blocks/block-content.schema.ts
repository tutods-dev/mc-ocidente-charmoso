import { defineArrayMember, defineType } from "sanity";

/**
 * Schema for rich text fields.
 */
const blockContentSchema = defineType({
	title: "Conteúdo",
	name: "blockContent",
	type: "array",
	of: [
		defineArrayMember({
			title: "Block",
			type: "block",
			// Styles let you set what your user can mark up blocks with. These
			// correspond with HTML tags, but you can set any title or value
			// you want and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "Citação", value: "blockquote" },
			],
			lists: [
				{ title: "Lista não ordenada", value: "bullet" },
				{
					title: "Lista ordenada",
					value: "number",
				},
			],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						title: "URL",
						name: "link",
						type: "object",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
							},
							{
								title: "Abrir em nova aba",
								name: "target",
								type: "boolean",
								initialValue: false,
							},
						],
					},
				],
			},
		}),
	],
});

/**
 * Schema for rich text fields with image field.
 */
const blockContentSchemaWithImage = defineType({
	title: "Conteúdo",
	name: "blockContentWithImage",
	type: "array",
	of: [
		defineArrayMember({
			title: "Block",
			type: "block",
			// Styles let you set what your user can mark up blocks with. These
			// correspond with HTML tags, but you can set any title or value
			// you want and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "Citação", value: "blockquote" },
			],
			lists: [
				{ title: "Lista não ordenada", value: "bullet" },
				{
					title: "Lista ordenada",
					value: "number",
				},
			],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						title: "URL",
						name: "link",
						type: "object",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
							},
						],
					},
				],
			},
		}),
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		defineArrayMember({
			title: "Image",
			type: "imageWithAlt",
		}),
	],
});

export { blockContentSchema, blockContentSchemaWithImage };
