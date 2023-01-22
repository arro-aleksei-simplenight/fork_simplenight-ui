# **Simplenight UI**

This is the first Simplenight UI draft

URL: https://simplenightdv.github.io/simplenight-ui

## **Initialize project**

```
npm run initialize or
yarn initialize or
pnpm run initialize
```

## **Run project**

```
npm run storybook or
yarn storybook or
pnpm run storybook
```

This will run in port 6006.

## **Working on the proyect**

Run `yarn changeset` to update current versioning with patch and describe your task or Add the jira ticket. Like a commit.

## **Adding Icons to the library**

Remember always to remove the height and width from the svg file.
After that, run `yarn compile-icons` to convert the svg file to a react component.
Finally, add the icon to the `src/icons/index.ts` and `src/icons/Icons.stories.mdx` files with a storybook story in its category.

## **How to install this package**

1. First you should have .npmrc configured with your GITHUB_TOKEN, as it uses github packages

   ```
   registry=https://registry.npmjs.org/
   @YOUR_USER:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=YOUR_TOKEN
   ```

2. Then if everything is correct, you should install the library with the next commands:

   ```
   npm install @simplnightdv/simplenight-ui or
   pnpm add @simplnightdv/simplenight-ui or
   yarn add @simplnightdv/simplenight-ui
   ```

**More information:** [GITHUB DOCS](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

## **How to deploy a repo with a GITHUB package**

**Details:** [GITHUB DOCS](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
