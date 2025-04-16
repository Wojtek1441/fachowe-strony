const images = new Proxy({"src":"/_astro/images.D9pGHbk8.jpg","width":275,"height":183,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/fachowe-strony/src/assets/images/images.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/fachowe-strony/src/assets/images/images.jpg");
							return target[name];
						}
					});

export { images as default };
