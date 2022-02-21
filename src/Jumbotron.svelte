<script>
    // Sveltestrap imports
    import { Button } from 'sveltestrap';

    // Svelte bootstrap icons imports
    import Phone from 'svelte-bootstrap-icons/lib/Phone';
    // Component variables
    let jumboimage = 'images/image-jumbotron.jpg';
</script>

<style>
    .jumbotron {
        background:
        url("/images/background-pattern.png");
        height: 30em;
        font-family: 'Pacifico', cursive;
        font-weight: 400;
    }
</style>

<div class="jumbotron">
    <div class="container text-center">
        <br>
        <br>
        <h1 class="display-3 text-light mt-5 mb-3">Resina epóxica</h1>
        <hr class="text-light">
         <p class="text-light lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam felis eget sollicitudin vestibulum. Proin felis arcu, placerat aliquam dapibus non, tincidunt sit amet enim. Vivamus fringilla ante varius neque fringilla bibendum. Suspendisse eget eros rhoncus, convallis sem sed, tempor elit.
        </p>
        <div class="container mt-5">
            <a class="btn btn-light rounded-pill" href="#">Visita nuestro catálogo de productos</a>
        </div>
    </div>
</div>
