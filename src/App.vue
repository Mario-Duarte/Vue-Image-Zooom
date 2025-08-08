<script setup lang="ts">
import Highlight from './components/highlight.vue'
import Container from './components/container.vue'
import Gallery from './components/gallery.vue'
import AdvancedGallery from './components/advancedGallery.vue'
import Footer from './components/footer.vue'
import ImageZooom from 'vue-image-zooom'
import Hero from './components/hero.vue'
</script>

<template>
    <main class="flex flex-col items-center justify-start min-h-screen mb-8">

        <Hero />

        <Container>
            <h2 class="text-2xl text-teal-700 font-bold mb-4">How it works</h2>
            <p class="mb-2">
                This component has a very minimal styling footprint only setting the minimum to make it work, and you
                can extend the styling to fit your needs.
            </p>
            <p class="mb-2">
                For extra customization this component it will also add extra classes dynamically depending on its
                state.
            </p>
            <p class="mb-2">
                It will have the class <Highlight>loading</Highlight> while the image is been preloaded and <Highlight>
                    loaded</Highlight> once it has been loaded.
            </p>
            <p class="mb-2">
                Additionally it will have the class <Highlight>fullview</Highlight> while the user has not initiated the
                zoom and <Highlight>zoomed</Highlight> once the user has taped/clicked in.
            </p>
            <p class="mb-2">
                You can also use the <Highlight>onErrorCallback</Highlight> prop to handle errors when loading the image
                and the <Highlight>errorMessage</Highlight> prop to display a custom error message.
            </p>
            <p class="mb-2">
                On touch enabled devices users can use one finger to zoom in and move the zoom location by dragging the
                finder on the image, this will disable the scrolling. Touching with more than 1 finger on the image will
                not activate the zoom and page will scroll as normal, this was decided this way as it is easier to use
                one finger to zoom and drag on the image.
            </p>
            <p class="mb-2">
                But you here for some examples so bellow you can find a standard image gallery using the component with
                a default 200% zoom:
            </p>
        </Container>

        <Container class="bg-stone-200 rounded-sm">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-6">
                <ImageZooom src="https://picsum.photos/seed/001/600/400" alt="Demo image 1" zoom="200%" />
                <ImageZooom src="https://picsum.photos/seed/002/600/400" alt="Demo image 2" zoom="200%" />
                <ImageZooom src="https://picsum.photos/seed/003/600/400" alt="Demo image 3" zoom="200%" />
                <ImageZooom src="https://picsum.photos/seed/004/600/400" alt="Demo image 4" zoom="200%" />
            </div>
        </Container>

        <Container>
            <h2 class="text-2xl text-teal-700 font-bold mb-4 mt-12">How to use it</h2>
            <p class="mb-2">
                The imageZoom component works very similar to the default img tag in HTML, just pass in a src attribute
                <b>(mandatory)</b> with the image url you wan to use and it will render a working imageZoom component.
            </p>

            <p class="mb-4">
                By default the component will set a <Highlight>zoom</Highlight> of <b>200%</b> on the image if no
                attribute was set, it will
                also set default values to the <Highlight>width</Highlight> <b>(100%)</b>, <Highlight>height</Highlight>
                <b>(auto)</b> and <Highlight>alt</Highlight> <b>(This is an
                    imageZoom image)</b> attributes.
            </p>

            <ImageZooom src="https://picsum.photos/seed/005/1920/1080" alt="Demo image 5" />

            <VCodeBlock class="w-full mt-4"
                :code='"<ImageZooom src=\"https://picsum.photos/seed/005/1920/1080\" alt=\"Demo image 5\" />"'
                label="Code Example:" lang="javascript" />

            <p class="my-2">
                You can also set the attribute <Highlight>fullWidth</Highlight> as boolean (defaults to false) to set
                the zoom level to match
                the full dimensions of the image, if the image is smaller than the container it is in it will ignore
                this and use the zoom prop.
            </p>

            <h2 class="text-2xl text-teal-700 font-bold mb-4 mt-6">Full width image example using a 4k image</h2>

            <ImageZooom src="https://picsum.photos/seed/022/3840/2160" alt="Demo image 6 with fullWidth prop"
                fullWidth />

            <VCodeBlock class="w-full mt-4"
                :code='"<ImageZooom src=\"https://picsum.photos/seed/022/3840/2160\" alt=\"Demo image 6 with fullWidth prop\" fullWidth />"'
                label="Code Example:" lang="javascript" />

            <p class="my-2">You can also pass in secondary attributes such as <Highlight>id</Highlight> and <Highlight>
                    className</Highlight> to enable you to style the component more easily, in addition to these, the
                component will also update it's className based on it's state, for example, <Highlight>loading
                </Highlight> and <Highlight>loaded</Highlight> for when the component is downloading the image passed,
                and <Highlight>fullView</Highlight> and <Highlight>zoomed</Highlight> for when the user zooms in on the
                image. These can be easily targeted in conjunction with the attribute className to adapt the style of
                the component depending of implementation.</p>

            <Gallery />

            <AdvancedGallery />

            <p class="my-2">Hope you find this useful and create something awesome with it!</p>

            <p>Want to contribute or found a bug? Let me know on <a class="text-rose-600 hover:underline"
                    href="https://github.com/Mario-Duarte/Vue-Image-Zooom/issues" target="_blank">GitHub</a></p>
            <p>Want to donate a Coffee and keep me going? <a class="text-rose-600 hover:underline"
                    href="https://www.paypal.com/paypalme/MarioDuarte/2" target="_blank">Donate via PayPal</a></p>

        </Container>
    </main>
    <Footer />
</template>