<script>
    // Get Current Year
    let year = new Date().getFullYear();

    // Medilia logo
    const logo = 'images/medilia-logo.png';

    // Footer Icons
    import Twitter from 'svelte-bootstrap-icons/lib/Twitter';
    import Instagram from 'svelte-bootstrap-icons/lib/Instagram';
    import Facebook from 'svelte-bootstrap-icons/lib/Facebook';
    import HeartFill from 'svelte-bootstrap-icons/lib/HeartFill';
</script>

<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img class="img-thumbnail" src={logo} alt="Logo de Medilia"/>
      </a>
      <span class="text-muted">© {year} Medilia.</span>
  </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-muted" href="#"><Twitter/></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><Instagram/></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><Facebook/></a></li>
    </ul>

    <div class="container text-center text-muted">
        <p>
            Somos un proveedor experto de soluciones de calibración y certificación empresarial, con un enfoque impulsado por la tecnología moderna que nos permite ofrecer soluciones de alto rendimiento.
        </p>
        <p>Hecho con <HeartFill class="text-danger"/> por <a class="text-decoration-none" href="https://upvent.codes" target="_blank">UpVent Technologies</a></p>
    </div>

    <div class="container text-center text-muted small mt-5 border-top">
        <p>
            El <a href="https://github.com/UpVent/medilia.mx">código fuente</a> de esta página se encuentra bajo la <a href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia Pública General de Affero (GNU) versión 3</a>. Excepto donde se indique lo <a href="https://creativecommons.org/policies#license">contrario</a>, el trabajo escrito, blogs, opiniones y parte del contenido visual se encuentra bajo la <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0)</a>
        </p>
    </div>
</footer>
