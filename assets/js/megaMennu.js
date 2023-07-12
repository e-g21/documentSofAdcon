/*Mood web en diseños*/
$('#megaMenu').on('click', function () {
	//Condicion para agregar la class al bodys
	const base_url= 'http://localhost/MaquetadoApps/documentation-sofadcon/'; //Ruta Absoluta: depende donde esté alojado el proyecto
	var index_escritorio = base_url + 'appEscritorio/';
	var index_movil = base_url + 'appMovil/';
	var index_web = base_url + 'appWeb/';
	var index_include = base_url + 'include/';

	$('.dropdown-menu').html(`
					<div class="box-moodPage nav-open-click p-2">
						<div class="line-1"></div>
						<div class="container overflow-auto">
							<div class="row">
								<div class="col-12 my-2 header-text">
									Nuestros servicios
								</div>
								<div class="col-12 mb-2 menu-line"></div>
								<div class="col-12 col-sm-6 my-2">
									<h5><strong>Aplicaciones escritorio</strong></h5>
									<ul>
										<li><a class="p-0" href="${index_escritorio}banero.html">Bananero</a></li>
										<li><a class="p-0" href="${index_escritorio}Camaroneto.html">Camaronero</a></li>
										<li><a class="p-0" href="${index_escritorio}notificacionesWhatsApp.html">Notificaciones WhatsApp</a></li>
										<li><a class="p-0" href="${index_escritorio}controlServicioInternet.html">Controls de servicio de internet</a></li>
										<li><a class="p-0" href="${index_escritorio}SofadconERP.html">SofAdcon ERP</a></li>
									</ul>
								</div>
								<div class="col-12 col-sm-6 my-2">
									<h5><strong>Aplicaciones Web</strong></h5>
									<ul>
									<li><a class="p-0" href="${index_web}FactureroWeb.html">Facturero Web</a></li>
									<li><a class="p-0" href="${index_web}FactureroWebContable.html">Facturero Web contable</a></li>
									<li><a class="p-0" href="${index_web}SofadconERP-Web.html">SofAdcon ERP</a></li>
									</ul>
								</div>
								<div class="col-12 col-sm-6 my-2">
									<h5><strong>Aplicaciones Móviles</strong></h5>
									<ul>
									<li><a class="p-0" href="${index_movil}FactureroMovil.html">Facturero Movil</a></li>
									<li><a class="p-0" href="${index_movil}Pedidos.html">Pedidos</a></li>
									<li><a class="p-0" href="${index_movil}Restaurante.html">Restaurante</a></li>
									</ul>
								</div>
								<div class="col-12 col-sm-6 my-2">
								<li><a class="p-0" href="${index_include}PreguntasFrecuentes.html"><h5><strong>Preguntas Frecuentes</strong></h5></a></li>
								<li><a class="p-0" href="${index_include}Videos tutoriales.html"><h5><strong>Videos tutoriales</strong></h5></a></li>
								<li><a class="p-0" href="${index_include}Noticias.html"><h5><strong>Noticias</strong></h5></a></li>			
								</div>
								<div class="col-12 p-4">
								</div>
							</div>
						</div>

					</div>
		`);
});
