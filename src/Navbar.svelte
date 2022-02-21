<script>
    // Sveltestrap imports
    import { Button } from 'sveltestrap';

    // Navbar icons
    import House from 'svelte-bootstrap-icons/lib/House';
    import BagFill from 'svelte-bootstrap-icons/lib/BagFill';
    import Images from 'svelte-bootstrap-icons/lib/Images';
    import Phone from 'svelte-bootstrap-icons/lib/Phone';
    import Instagram from 'svelte-bootstrap-icons/lib/Instagram';
    import Twitter from 'svelte-bootstrap-icons/lib/Twitter';
    import Facebook from 'svelte-bootstrap-icons/lib/Facebook';
    import BoxSeam from 'svelte-bootstrap-icons/lib/BoxSeam';
    import People from 'svelte-bootstrap-icons/lib/People';

    // Navbar logo
    const logo = 'images/logo-powi.png';
</script>

<style>
    .text-instagram {
        color: #c13584;
    }

    .text-twitter {
        color: #1da1f2;
    }

    .text-facebook {
        color: #1877f2;
    }
</style>

<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-0">
    <a href="/" class="d-flex align-items-center col-md-3 mb-1 mb-md-0 text-dark text-decoration-none navbar-brand">
        <img class="img-fluid mx-auto shadow rounded-circle" width="100" height="100" src="{logo}" alt="Logo de Powi Resinas">
    </a>

    <ul class="nav nav-pills col-12 mx-auto col-md-auto mb-1 justify-content-center mb-md-0">
        <li><a class="nav-link px-2 text-muted" href="/">Inicio <House/></a></li>
        <li><a class="nav-link px-2 text-muted" href="/">Tienda <BagFill/></a></li>
        <li><a class="nav-link px-2 text-muted" href="/">Servicios <BoxSeam/></a></li>
        <li><a class="nav-link px-2 text-muted" href="/">Galería <Images/></a></li>
        <li><a class="nav-link px-2 text-muted" href="/">Acerca de <People/></a></li>
    </ul>

    <div class="text-end me-auto ms-auto mx-auto">
        <a href="https://www.instagram.com/powi.resina/" class="px-2 text-instagram"><Instagram/></a>
        <a href="https://twitter.com/Resinas_Powi" class="px-2 text-twitter"><Twitter/></a>
        <a href="https://www.facebook.com/Resinas-Powi-104488658279251/" class="px-2 text-facebook"><Facebook/></a>
    </div>
</header>
