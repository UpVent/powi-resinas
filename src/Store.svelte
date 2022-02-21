<script>
    let products = [{
        name: 'Aretes de Resina',
        image_url: '/images/aretis.jpg',
        price: '100'
    },
    {
        name: 'Cabeza de Gato',
        image_url: '/images/ato.jpg',
        price: '100'
    },
    {
        name: 'Popsocket',
        image_url: '/images/cheems.jpg',
        price: '100'
    },
    {
        name: 'Stickers Powi ®',
        image_url: '/images/estiquers.jpg',
        price: '100'
    },
    {
        name: 'Llavero Inicial',
        image_url: '/images/inicial.jpg',
        price: '100'
    },
    {
        name: 'Llavero con código Spotify',
        image_url: '/images/spotify.jpg',
        price: '100'
    },
    ];
</script>

<style>
    @font-face {
        font-family: 'Pacifico-Regular';
        src: url('/fonts/Pacifico-Regular.ttf');
    }

    .btn {
        font-family: 'pacifico-regular';
        background-color: #42BA96;
    }

    .price {
        font-family: 'pacifico-regular';
    }
</style>

<section class="mt-5 mb-5">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {#each products as product}
                <div class="col">
                   <div class="card">
                    <img class="card-img-top" src={product.image_url} alt="imágen de producto">
                    <div class="card-body">
                            <p class="lead fw-bold text-break text-wrap p-1">{product.name}</p>
                            <div class="d-flex justify-content-between align-items-center p-1">
                                <span class="price">${product.price} - mxn </span>
                                <a class="btn rounded-pill btn-success text-light mx-auto">Comprar</a>
                            </div>
                            <p class="text-muted small">*Todos los precios incluyen IVA</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
