import { defineField, defineType } from "sanity";

const videoUrlWithCoverSchema = defineType({
	name: "videoUrlWithCover",
	title: "Vídeo",
	type: "object",
	fields: [
		defineField({
			title: "Link do vídeo",
			name: "url",
			type: "url",
			description:
				"Coloque o link do vídeo extraído do ImageKit, Cloudinary ou outra plataform. Nota: vídeos do YouTube não irão funcionar.",
			//   TODO: validations
		}),
		defineField({
			name: "cover",
			title: "Imagem alternativa",
			hidden: ({ parent }) => !parent || !parent.url,
			type: "imageWithAlt",
			description:
				"A imagem alternativa será apresentada em quanto o vídeo é carregado.",
		}),
	],
});

export { videoUrlWithCoverSchema };
