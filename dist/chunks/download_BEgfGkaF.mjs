const download = new Proxy({"src":"/_astro/download.Bsw91WpD.jpg","width":224,"height":224,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/fachowe-strony/src/assets/images/download.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/fachowe-strony/src/assets/images/download.jpg");
							return target[name];
						}
					});

export { download as default };
