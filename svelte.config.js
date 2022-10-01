import sveltePreprocess from 'svelte-preprocess'
// import preprocess from 'svelte-preprocess';

export default {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    // preprocess: preprocess()
    extensions: ['.svelte'],
    preprocess: sveltePreprocess()
}