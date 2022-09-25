# df-memes
Simple script which deep fries memes into tremendous piece of art

| Before | After |
|--------|-------|
| ![Before](https://user-images.githubusercontent.com/57900160/192134424-5baa009f-4a1f-47c5-85db-1be78ec9a414.jpg) | ![After](https://user-images.githubusercontent.com/57900160/192134438-35136b1d-ee3c-4902-a5e1-329e75d616d9.jpg) |



## Usage

First, you need to have installed `NodeJS` and `yarn` in your machine. Then in the root project folder please install all dependecies (for now just Jimp).

```sh
$ yarn install
```

Then you can deep fry your memes/images.

If you want to deep fry whole folder (flat structure) of images run script through `npm scripts`

```sh
$ yarn df <path_to_folder>
```

If you want to deep fry just one image, use `node`

```sh
$ node index.js <path_to_image>
```

After deep frying your images will land in `deep-fried-memes` folder in root of the project. Each of image will have `df_` prefix.
