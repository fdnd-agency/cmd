// vite.config.ts
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import svg from "@poppanator/sveltekit-svg";
var vite_config_default = defineConfig({
  plugins: [
    sveltekit(),
    svg({
      includePaths: ["./src/lib/icons"],
      svgoOptions: {
        multipass: true,
        plugins: ["preset-default"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzdmcgZnJvbSAnQHBvcHBhbmF0b3Ivc3ZlbHRla2l0LXN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRzdmVsdGVraXQoKSxcblx0XHRzdmcoe1xuXHRcdFx0aW5jbHVkZVBhdGhzOiBbJy4vc3JjL2xpYi9pY29ucyddLFxuXHRcdFx0c3Znb09wdGlvbnM6IHtcblx0XHRcdFx0bXVsdGlwYXNzOiB0cnVlLFxuXHRcdFx0XHRwbHVnaW5zOiBbJ3ByZXNldC1kZWZhdWx0J11cblx0XHRcdH1cblx0XHR9KVxuXHRdXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLE1BQ0gsY0FBYyxDQUFDLGlCQUFpQjtBQUFBLE1BQ2hDLGFBQWE7QUFBQSxRQUNaLFdBQVc7QUFBQSxRQUNYLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxNQUMzQjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
