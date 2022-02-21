<script>
    // Get Current Year
    let year = new Date().getFullYear();

    // Medilia logo
    const logo = 'images/logo-powi.png';

    // Footer Icons
    import Twitter from 'svelte-bootstrap-icons/lib/Twitter';
    import Instagram from 'svelte-bootstrap-icons/lib/Instagram';
    import Facebook from 'svelte-bootstrap-icons/lib/Facebook';
    import HeartFill from 'svelte-bootstrap-icons/lib/HeartFill';
</script>

<style>
    .footer-powi {
        background-color: #fff2e4;
    }

    .text-powi {
        color: #494753;
    }

</style>

<footer class="d-flex flex-wrap footer-powi justify-content-between align-items-center py-3 my-4">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-powi text-decoration-none lh-1">
        <img class="img-fluid mx-auto p-1" height="100" width="100" src={logo} alt="Logo de Medilia"/>
      </a>
      <span class="text-powi">© {year} Powi Resinas.</span>
  </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-powi" href="https://twitter.com/Resinas_Powi"><Twitter/></a></li>
        <li class="ms-3"><a class="text-powi" href="https://www.instagram.com/powi.resina/"><Instagram/></a></li>
        <li class="ms-3"><a class="text-powi" href="https://www.facebook.com/Resinas-Powi-104488658279251/"><Facebook/></a></li>
    </ul>

    <div class="container text-center text-powi">
        <p>
            La creatividad es contagiosa. En Powi Resinas creamos accesorios y artículos de resina époxica. Venta de productos de stock y personalizados. Envíos a todo el país, ubicados en León, Gto.
        </p>
        <p>Hecho con <HeartFill class="text-danger"/> por <a class="text-decoration-none" href="https://upvent.codes" target="_blank">UpVent Technologies</a></p>
    </div>

    <div class="container text-center text-powi small mt-5 border-top border-light">
        <p>
            El <a href="https://github.com/UpVent/powi-resinas">código fuente</a> de esta página se encuentra bajo la <a href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia Pública General de Affero (GNU) versión 3</a>. Excepto donde se indique lo <a href="https://creativecommons.org/policies#license">contrario</a>, el trabajo escrito, blogs, opiniones y parte del contenido visual se encuentra bajo la <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0)</a>
        </p>
    </div>
</footer>
