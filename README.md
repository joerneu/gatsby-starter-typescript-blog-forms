<h1 align="center">
  Gatsby starter for a website in TypeScript with a homepage, blog and forms.
</h1>

This starter uses the official [Gatsby blog core theme](https://www.npmjs.com/package/gatsby-theme-blog-core) that handles the data processing for the blog posts.

All components and pages are implemented using TypeScript.

Minimal styling and a theme is implemented using [Emotion](https://www.emotion.sh). It can easily be extended to style your web site.

The form uses the [Formite Library](https://www.formite.org) (React Hooks Forms) for form validation and form submission. The form visuals are implemented with [Reakit](https://reakit.io/) and Emotion.

## Goals for this starter

- TypeScript for type safety, IDE comfort and error checking during development and build time.
- ESLint and Prettier for safety and consistent code style.
- Current state of the art by using React functional components with React Hooks.
- Minimal bundle size - therefore it does not include an UI Framework and instead uses Formite and Reakit with Emotion.

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the TypeScript website starter.

    ```shell
    gatsby new my-blog-website https://github.com/joerneu/gatsby-starter-typescript-blog-forms
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-website/
    yarn install
    gatsby develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000`!

## FAQ

### Does the starter include theming?

Yes, it uses Emotion Theming.

### Does the theming apply to markdown?

Yes, look into the `theme` folder and the `layout.tsx` file if you want to extend the supported elements. Use `<P>`, `<H1>` etc. from the `theme` instead of `<p>`, `<h1>` to use the same styles in your pages and components.

### Why doesn't it use Theme UI like the Gatsby Blog Starter?

If you want to develop a Gatsby Theme for others to use, Theme UI is a good choice. However, if you develop your own website, a lower level API like Emotion for React is a better choice that gives you more control and that has less "magic" and therefore it is easier to maintain and to extend.

Tip: Use the Theme specification from Theme UI as a reference for your own theme.

### Why does't the starter include an UI Framework?

UI Frameworks usually add a couple of 100K of JavaScript code or CSS to your bundle. When developing a website that is not necessary. This starter demonstrates how you can add a form in a couple of 10K of JavaScript. Only if you have to support old browsers (< IE11) you might want to use an UI Framework like Bootstrap.

However, this starter is very minimal. If you prefer you can add any UI Framework that you like. (In this case you could remove Emotion if the UI Framework supplies its own theming.)

### Why doesn't it use gatsby-plugin-emotion?

The plugin `gatsby-plugin-emotion` only adds a Babel plugin so that you do not have to specify the JSX pragma `/** @jsx jsx */`. Gatsby uses Babel to compile TypeScript and does not do any type checking. The starter includes the NPM script `type-check` that is also called when building the website. TypeScript requires the JSX pragma to compile the `css` property from Emotion.

### I do not like to use double quotes or prefer 2-char tabs. Can I change the code style?

Simply edit the file `.prettierrc.js` and execute `yarn format` to apply your own code styles to all files.

## Important files

1.  **`/content`**: A content folder for the blog post content. Replace the avatar image file, delete the demo posts, and add your own!

2.  **`src/theme`**: The theme that is applied to your website.

3.  **`.prettierrc.js`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to lint and format files.

4.  **`.eslintrc.js`**: The configuration and rules for ESLint.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description. You can also specify the options for the Gatsby blog core theme here.

6.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7.  **`/.vscode/settings.json`**: Settings for VSCode - some of them overlap with Prettier and they control when and how ESLint rules are applied during editing.
