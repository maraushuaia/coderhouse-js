function encabezado() {

let imprimir = "";

imprimir += `
        <nav class="navbar navbar-expand-lg navbar-light ro-nav">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="./index-app.html">
                    <img src="../img/logo.png" alt="Logo del Juzgado" class="d-inline-block align-text-center logo">
                    JUZGADO DE FALTAS
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link font-menu text-white" aria-current="page" href="./index-app.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link font-menu text-white" href="./antecedentes.html">Causas en curso</a></li>
                        <li class="nav-item"><a class="nav-link font-menu text-white" href="#">Causas históricas</a></li>
                        <li class="nav-item"><a class="nav-link font-menu text-white" href="#">Pagar</a></li>
                        <li class="nav-item"><a class="nav-link font-menu text-white" href="../pages/acceso_portal.html">Salir</a></li>
                    </ul>
                </div>
            </div>
          </nav>`;
          document.getElementById("encabezado").innerHTML = imprimir;
}


function piedepagina() {

    let imprimir2 = "";

    imprimir2 += `
      <div class="container">
          <div class="row justify-content-center">
              <div class="social">
                  <a href="https://www.facebook.com/" target="_blank"><img src="../img/icon-facebook.png" alt="icono facebook"></a>
                  <a href="https://www.youtube.com/" target="_blank"><img src="../img/icon-youtube.png" alt="icono facebook"></a>
                  <a href="https://www.instagram.com/" target="_blank"><img src="../img/icon-instagram.png" alt="icono facebook"></a>
              </div>
          </div>
      </div>
      <div class="container p-4">
          <!-- Apartado para la suscripción -->
          <section>
              <form action="./404.html">
                  <div class="row d-flex justify-content-center border-bottom">
                      <div class="col-auto"><p class="pt-2"><strong>Suscribite a nuestro boletín</strong></p></div>
                      <div class="col-md-5 col-12">
                          <div class="form-outline form-white mb-4">
                              <input type="email" class="form-control" placeholder="Ingresa tu correo" required>
                          </div>
                      </div>
                      <div class="col-auto">
                          <button type="submit" class="btn ro-btn-light mb-4">Suscribirse</button>
                      </div>
                  </div>
              </form>
          </section>

          <!--Sección de 3 columnas con información-->
          <section>
              <div class="row pt-5">
                  <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                      <h6 class="text-uppercase">Trámites Frecuentes</h6>
                      <ul class="list-unstyled mb-0">
                          <li><a href="#" class="footer-link">Libre Deuda</a></li>
                          <li><a href="#" class="footer-link">Pago de Multas</a></li>
                          <li><a href="#" class="footer-link">Descargos</a></li>
                      </ul>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                      <h6 class="text-uppercase">Términos y Condiciones</h6>
                      <ul class="list-unstyled mb-0">
                          <li><a href="#" class="footer-link">Términos y Condiciones</a></li>
                          <li><a href="#" class="footer-link">Política de Privacidad</a></li>
                          <li><a href="#" class="footer-link">Sugerencias</a></li>
                      </ul>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                      <h6 class="text-uppercase">Nosotros</h6>
                      <ul class="list-unstyled mb-0 text-color-secondary">
                          <li><span>San Juan, Argentina</span></li>
                          <li><span>(+54) 0331 444123564</span></li>
                          <li><span>contacto@juzgadodefaltas.com.ar</span></li>
                      </ul>
                  </div>
                  <a class="text-center text-color-secondary copy-simple" href="https://github.com/maraushuaia" target="_blank">Diseño: Rodrigo Muñoz</a>
              </div>
          </section>
      </div>
      <div class="text-center p-3 copyright" >© 2023 Copyright:
          <a class="text-white" href="https://github.com/maraushuaia" target="_blank">Rodrigo Muñoz</a>
      </div>
      <!-- Este menu de Accesos Rápidos solo se muestra en vista movil -->
      <section class="nav-down">
          <div class="menu-option">
              <div>
                  <a class="footer-link" href="./index-app.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="icon-menu">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></a>
                  <span class="text-white">Inicio</span>
              </div>
              <div>
                  <a class="footer-link" href="./antecedentes.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon-menu">
                  <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></a>
                  <span class="text-white">Causa Activas</span>
              </div>

              <div>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon-menu">
                  <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM128 416c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg></a>
                  <span class="text-white">Trámites</span>
              </div>
              <div>
                  <a class="footer-link" href="../pages/acceso_portal.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon-menu">
                  <path d="M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg></a>
                  <span class="text-white">Salir</span>
              </div>
          </div>
      </section>`;
      document.getElementById("piedepagina").innerHTML = imprimir2;
      
}

encabezado();
piedepagina();