import { defineField, defineType } from "sanity";
import { isFileRequired, isTextRequired } from "../../shared/validations";

const imageWithAltSchema = defineType({
	type: "image",
	name: "imageWithAlt",
	title: "Imagem com texto alternativo",
	options: {
		hotspot: true,
		metadata: ["blurhash", "lqip", "exif"],
	},
	fields: [
		defineField({
			hidden: ({ parent }) => !parent?.asset,
			name: "alt",
			title: "Texto alternativo",
			type: "string",
			description:
				"O texto alternativo serve como legenda oculta da imagem, é utilizada por razões de SEO.",
			validation: (Rule) => isTextRequired(Rule, "texto alternativo"),
		}),
	],
	validation: (Rule) => isFileRequired(Rule, "imagem"),
});

const imageWithAltAndCaptionSchema = defineType({
	type: "image",
	name: "imageWithAltAndCaption",
	title: "Imagem com texto alternativo e legenda",
	options: {
		hotspot: true,
		metadata: ["blurhash", "lqip", "exif"],
	},
	fields: [
		defineField({
			hidden: ({ parent }) => !parent?.asset,
			name: "alt",
			title: "Texto alternativo",
			type: "string",
			description:
				"O texto alternativo serve como legenda oculta da imagem, é utilizada por razões de SEO.",
			validation: (Rule) => isTextRequired(Rule, "texto alternativo"),
		}),
		defineField({
			hidden: ({ parent }) => !parent?.asset,
			name: "caption",
			title: "Caption",
			type: "string",
			validation: (Rule) =>
				Rule.required().warning(
					"A legenda da imagem não é obrigatória, porém pode ajudar a melhorar o SEO da página.",
				),
		}),
	],
	validation: (Rule) => isFileRequired(Rule, "imagem"),
});

export { imageWithAltSchema, imageWithAltAndCaptionSchema };
