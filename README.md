# df-memes
Simple script which deep fries memes into tremendous piece of art

## Usage

First, you need to have installed `NodeJS` in your machine. Then in the root project folder please install all dependecies (for now just Jimp).

```sh
$ yarn install
```

Then you can deep fry your memes/images.

If you want to deep fry whole folder (flat structure) of images run script through `npm scripts`

```sh
$ npm run df <path_to_folder>
```

If you want to deep fry just one image, use `node`

```sh
$ node index.js <path_to_image>
```

After deep frying your images will land in `deep-fried-memes` folder in root of the project. Each of image will have `df_` prefix.
