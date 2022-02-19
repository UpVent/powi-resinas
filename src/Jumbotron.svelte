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
    }

    .jumbotron-image {
        border-radius: 5%;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
</style>

<div class="jumbotron">
    <div class="container">
        <div class="row">
            <div class="col-8">
                <h1 class="display-3 text-light mt-5 mb-3">Resina epóxica</h1>
                <hr class="text-light">
                    <p class="text-light lead">
                        Somos un laboratorio de calibración con más de 20 años de experiencia en la configuración y mantenimiento de los elementos de medición para su correcto funcionamiento.
                    </p>
                <div class="d-grid gap-2 mt-2 mb-2 d-md-block">
                    <Button size="lg" color="primary">Contacto <Phone/></Button>
                </div>
            </div>
            <div class="col-4">
                <img class="img-fluid mt-5 mx-auto jumbotron-image" src={jumboimage} alt="Imágen mostrando una persona utilizando equipo de metrología."/>
            </div>
        </div>
    </div>
</div>
