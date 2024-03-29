# [Motorsport calendar](https://motorsport.benjami.in/)

This is a website that shows motorsport events from around the world. Currently, it can create a .ics-file and shows a list with interactive filtering but the plan is to make this a fully-fledged web app.

## Stack

-   Site generator: [Astro](https://astro.build/)
-   Interactive framework: [Svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/)
-   Deployment: [Fly.io](https://fly.io/)
-   Styling: [PostCSS](https://postcss.org/) + [open-props](https://open-props.style/)
-   Icons: [Phosphor Icons](https://phosphoricons.com/)

## Development

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `yarn`              | Installs dependencies                            |
| `yarn dev`          | Starts local dev server at `localhost:4321`      |
| `yarn build`        | Builds production site to `./dist/`              |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help` | Get help using the Astro CLI                     |
