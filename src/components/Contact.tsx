import { FC } from "react";
import { socialLinks } from "../shared/contants";
import { useState } from "react";
import { AfiliadosButton } from "../shared/afiliados1";


const Contact: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  
  const handleModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  setIsModalOpen(true);
  };
  
  const handleModal2 = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  setIsModal2Open(true);
  };
  const handleModal3 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModal3Open(true);
  };
  const handleModal4 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModal4Open(true);
  };

return (
<div className="pb-20">
<h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
Contacta
</h1>
<div
     data-scroll
     data-scroll-speed="1"
     className="flex justify-center mx-[5vw] mt-8"
   >
<div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
<div className="flex-1">

<iframe width="365" height="390" src="https://ebc0809d.sibforms.com/serve/MUIEABt6rVedjrqFD63NGy931tqutTmq_r90bp1ku3f0jGqRRvbq5PWoB4f_0L2W1HEenyVVKKG3kfT-S307v2pdE1M1E-DOeDmBAHedT8_d9jvEMor3NpdftjiY0ZCZ44UTy-hixT6v894Ubq1pZxNEZnvXMYhBsq3A3Ri-b2AulUQCLaCznHwsAmnBCceQysWxfOaup-LNz67O"></iframe>

</div>


<div className="flex-1">
  <h1 className="text-xl mb-3">Redes</h1>
  {socialLinks.map((item) => (
              <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={item.icon}
                alt=""
              />
  <h1>{item.title}</h1>
</a>
))}
</div>

<div className="flex-1">
    <a
      href="#"
      onClick= {handleModal}
      className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
    >
      Políticas de privacidad
    </a>
    <a
      href="#"
      onClick={handleModal2}
      className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
    >
      Términos y condiciones
    </a>
    <a
      href="#"
      onClick={handleModal3}
      className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
    >
      Política de Reembolso
    </a>
    <a
      href="#"
      onClick={handleModal4}
      className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
    >
      Políticas de Cookies
    </a>
    <a
     
      onClick={AfiliadosButton()}
      className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
    >
      Programa de Afiliados
    </a>
    
    {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div
          style={{
            maxHeight: "70vh",
            overflowY: "scroll",
          }}
          className="max-w-[600px] rounded-lg p-4 bg-black"
        >
          <h1 className="text-2xl mb-4">Políticas de privacidad</h1>
          <p>
          SECCIÓN 1 - ¿QUÉ HACEMOS CON TU INFORMACIÓN?

Cuando compras algo de nuestra tienda, como parte del proceso de compra venta, nosotros recolectamos la información personal que nos das tales como nombre, dirección y correo electrónico.

Cuando navegas en nuestra tienda, también recibimos de manera automática la dirección de protocolo de internet de tu computadora (IP) con el fin de proporcionarnos información que nos ayuda a conocer acerca de su navegador y sistema operativo.

Email marketing (si es aplicable): Con tu permiso, podremos enviarte correos electrónicos acerca de nuestra tienda, nuevos productos y otras actualizaciones.

</p><br></br><p> 

SECTION 2 - CONSENTIMIENTO

¿Cómo obtienen mi consentimiento?

Cuando nos provees tu información personal para completar una transacción, verificar tu tarjeta de crédito, crear una orden, concertar un envío o hacer una devolución, implicamos que aceptas la recolección y uso por esa razón específica solamente.

Si te pedimos tu información personal por una razón secundaria, como marketing, te pediremos directamente tu expreso consentimiento, o te daremos la oportunidad de negarte.

¿Cómo puedo anular mi consentimiento?

Si luego de haber aceptado cambias de opinión, puedes anular tu consentimiento para que te contactemos, por la recolección, uso o divulgación de tu información, en cualquier momento, contactándonos a contacto.raul.fitness@gmail.com.

</p><br></br><p> 

SECCIÓN 3 - DIVULGACIÓN

Podemos divulgar tu información personal si se nos requiere por ley o si violas nuestros Términos de Servicio.

</p><br></br><p> 

SECCIÓN 4 - IPFS

Nuestra tienda se encuentra alojada en IPFS a través de Fleek. Se encuentra descentralizada en InterPlanetary Filling System a través de la plataforma de lanzamiento Fleek.

Tus datos se almacenan a través del almacenamiento de datos de Sendinblue.

Pagos:

Para pagar solo se proporciona de momento el servicio de PayPal o Metamask, los datos que se quedan registrados son los que guardan PayPal o la blockchain correspondiente, no se asociará la cartera a tu correo o identidad ya que solo se verificará que la transacción se ha completado correctamente para aceptarte el servicio.

</p><br></br><p> 

SECCIÓN 5 - SERVICIOS DE TERCEROS

En general, los servicios de terceros utilizados por nosotros solo recopilarán, usarán y divulgarán tu información en la medida que sea necesaria para que les permita desempeñar los servicios que nos proveen.

Sin embargo, algunos proveedores de servicios de terceros, tales como pasarelas de pago y otros procesadores de transacciones de pago, tienen sus propias políticas de privacidad con respecto a la información que estamos obligados a proporcionarles para las transacciones relacionadas con las compras.

Para estos proveedores, te recomendamos que leas las políticas de privacidad para que puedas entender la manera en que tu información personal será manejada.

En particular, recuerda que algunos proveedores pueden estar ubicados o contar con instalaciones que se encuentran en una jurisdicción diferente a ti o nosotros. Así que si deseas proceder con una transacción que involucra los servicios de un proveedor a terceros, tu información puede estar sujeta a las leyes de la jurisdicción (jurisdicciones) en que se encuentra el proveedor de servicios o sus instalaciones.

A modo de ejemplo, si te encuentras en Canadá y tu transacción es procesada por una pasarela de pago con sede en Estados Unidos, entonces tu información personal utilizada para completar la transacción puede ser sujeto de divulgación en virtud de la legislación de Estados Unidos, incluyendo la Ley Patriota.

Una vez que abandonas el sitio web de nuestra tienda o te rediriges a un sitio o aplicación de terceros, ya no estás siendo regulados por la presente Política de Privacidad o los Términos de Servicio de nuestra página web.

Enlaces:

Cuando haces clic en enlaces de nuestra tienda, puede que seas redirigido fuera de nuestro sitio. No somos responsables por las prácticas de privacidad de otros sitios y te recomendamos leer sus normas de privacidad.

</p><br></br><p> 

SECCIÓN 6 - SEGURIDAD

Para proteger tu información personal, tomamos precauciones razonables y seguimos las mejores prácticas de la industria para asegurarnos de que no haya pérdida de manera inapropiada, mal uso, acceso, divulgación, alteración o destrucción de la misma.

</p><br></br><p> 

SECCIÓN 7 - EDAD DE CONSENTIMIENTO

Al utilizar este sitio, declaras que tienes al menos la mayoría de edad en tu estado o provincia de residencia, o que tienes la mayoría de edad en tu estado o provincia de residencia y que nos has dado tu consentimiento para permitir que cualquiera de tus dependientes menores use este sitio.

</p><br></br><p> 

SECCIÓN 8 - CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD

Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, asique por favor revísala frecuentemente. Cambios y aclaraciones entrarán en vigencia inmediatamente después de su publicación en el sitio web. Si hacemos cambios materiales a esta política, notificaremos aquí que ha sido actualizada, por lo que cual estás enterado de qué información recopilamos, cómo y bajo qué circunstancias, si las hubiere, la utilizamos y/o divulgamos.

Si nuestra tienda es adquirida o fusionada con otra empresa, tu información puede ser transferida a los nuevos propietarios, para que podamos seguir vendiéndote productos.

</p><br></br><p> 

PREGUNTAS E INFORMACIÓN DE CONTACTO

Si quieres: acceder, corregir, enmendar o borrar cualquier información personal que poseamos sobre ti, registrar una queja, o simplemente quieres más información contacta a nuestro Oficial de Cumplimiento de Privacidad contacto.raul.fitness@gmail.com o por correo postal a raulddc.eth

[Re: Privacy Compliance Officer]

[camin del campón 282, 33394 Gijón, Asturias, Spain]
          
          </p>
            <button
            className="bg-gray-800 p-2 rounded-full mt-4"
            onClick={() => setIsModalOpen(false)}
            >
            Cerrar
            </button>

        </div>
        </div>
      )}



      {isModal2Open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div
          style={{
            maxHeight: "70vh",
            overflowY: "scroll",
          }}
          className="max-w-[600px] rounded-lg p-4 bg-black"
        >
          <h1 className="text-2xl mb-4">Términos y condiciones</h1>
          <p>
          DESCRIPCIÓN GENERAL 

Este sitio web es operado por raulddc.eth. En todo el sitio, los términos “nosotros”, “nos” y “nuestro” se refieren a raulddc.eth. raulddc.eth ofrece este sitio web, que incluye toda la información, herramientas y servicios disponibles en este sitio para usted, el usuario, condicionado a su aceptación de todos los términos, condiciones, políticas y avisos establecidos aquí. 



Al visitar nuestro sitio y / o comprar algo de nosotros, usted participa en nuestro “Servicio” y acepta estar sujeto a los siguientes términos y condiciones (“Términos de Servicio”, “Términos”), incluidos los términos y condiciones adicionales y las políticas a las que se hace referencia en este documento y / o están disponibles por hipervínculo. Estos Términos de servicio se aplican a todos los usuarios del sitio, incluidos, entre otros, los usuarios que son navegadores, proveedores, clientes, comerciantes y / o contribuyentes de contenido. 



Lea atentamente estos Términos de servicio antes de acceder o utilizar nuestro sitio web. Al acceder o utilizar cualquier parte del sitio, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con todos los términos y condiciones de este acuerdo, no podrá acceder al sitio web ni utilizar ningún servicio. Si estos Términos de servicio se consideran una oferta, la aceptación se limita expresamente a estos Términos de servicio. 



Cualquier característica nueva o herramienta que se agregue a la tienda actual también estará sujeta a los Términos de Servicio. Puede revisar la versión más reciente de los Términos de Servicio en cualquier momento en esta página. Nos reservamos el derecho de actualizar, cambiar o reemplazar cualquier parte de estos Términos de Servicio publicando actualizaciones y / o cambios en nuestro sitio web. Es su responsabilidad revisar esta página periódicamente para ver los cambios. Su uso continuo o acceso al sitio web después de la publicación de cualquier cambio con la aceptación de dichos cambios. 



Nuestra tienda está alojada en Shopify Inc. Nos proporcionan la plataforma de comercio electrónico en línea que nos permite venderle nuestros productos y servicios. 

</p><br></br><p> 

SECCIÓN 1 - TÉRMINOS DE LA TIENDA ONLINE 

Al aceptar estos Términos de servicio, usted declara que tiene al menos la mayoría de edad en su estado o provincia de residencia, o que tiene la mayoría de edad en su estado o provincia de residencia y nos ha dado su consentimiento para permitir que cualquiera de sus dependientes menores use este sitio. 

No puede usar nuestros productos para ningún propósito ilegal o no autorizado ni puede, al usar el Servicio, violar ninguna ley en su jurisdicción (incluidas, entre otras, las leyes de derechos de autor). 

No debe transmitir gusanos, virus o códigos de naturaleza destructiva. 

Una violación o violación de cualquiera de los Términos resultará en la terminación inmediata de sus Servicios. 

</p><br></br><p>

SECCIÓN 2 - CONDICIONES GENERALES 

Nos reservamos el derecho de rechazar el servicio a cualquier persona por cualquier motivo en cualquier momento. 

Usted comprende que su contenido (sin incluir la información de la tarjeta de crédito) puede transferirse sin cifrar e implicar (a) transmisiones a través de varias redes; y (b) cambios para cumplir y adaptar los requisitos técnicos de la conexión de redes o dispositivos. La información de la tarjeta de crédito siempre se cifra durante la transferencia a través de redes. 

Usted acepta no reproducir, duplicar, copiar, vender, revender o explotar ninguna parte del Servicio, el uso del Servicio o el acceso al Servicio o cualquier contacto en el sitio web a través del cual se presta el servicio, sin un escrito expreso permiso de nosotros 

Los encabezados utilizados en este acuerdo se incluyen solo por conveniencia y no limitarán ni afectarán estos Términos. 

</p><br></br><p>

SECCIÓN 3 - EXACTITUD, COMPLETIDAD Y ACTUALIDAD DE LA INFORMACIÓN 

No somos responsables si la información disponible en este sitio no es precisa, completa o actual. El material en este sitio se proporciona solo para información general y no se debe confiar en él ni utilizarlo como la única base para tomar decisiones sin consultar fuentes de información primarias, más precisas, más completas o más oportunas. Cualquier confianza en el material de este sitio es bajo su propio riesgo. 

Este sitio puede contener cierta información histórica. La información histórica, necesariamente, no es actual y se proporciona solo para su referencia. Nos reservamos el derecho de modificar el contenido de este sitio en cualquier momento, pero no tenemos la obligación de actualizar ninguna información en nuestro sitio. Usted acepta que es su responsabilidad monitorear los cambios en nuestro sitio. 

</p><br></br><p>

SECCIÓN 4 - MODIFICACIONES AL SERVICIO Y PRECIOS 

Los precios de nuestros productos están sujetos a cambios sin previo aviso. 

Nos reservamos el derecho en cualquier momento de modificar o descontinuar el Servicio (o cualquier parte o contenido del mismo) sin previo aviso en cualquier momento. 

No seremos responsables ante usted ni ante ningún tercero por cualquier modificación, cambio de precio, suspensión o interrupción del Servicio. 

</p><br></br><p>

SECCIÓN 5 - PRODUCTOS O SERVICIOS 

(si corresponde) y estar disponible exclusivamente en línea a través del sitio web. Estos productos o servicios pueden tener cantidades limitadas y están sujetos a devolución o cambio solo de acuerdo con nuestra Política de devolución. 

Hemos hecho todo lo posible para mostrar con la mayor precisión posible los colores e imágenes de nuestros productos que aparecen en la tienda. No podemos garantizar que la visualización de cualquier color en el monitor de su computadora sea precisa. 

Nos reservamos el derecho, pero no estamos obligados, de limitar las ventas de nuestros productos o servicios a cualquier persona, región geográfica o jurisdicción. Podemos ejercer este derecho caso por caso. Nos reservamos el derecho de limitar las cantidades de cualquier producto o servicio que ofrecemos. Todas las descripciones de productos o precios de productos están sujetas a cambios en cualquier momento sin previo aviso, a discreción de nosotros. Nos reservamos el derecho de descontinuar cualquier producto en cualquier momento. Cualquier oferta para cualquier producto o servicio realizado en este sitio es nula donde esté prohibida. 

No garantizamos que la calidad de los productos, servicios, información u otro material comprado u obtenido por usted cumpla con sus expectativas, o que cualquier error en el Servicio será corregido. 

</p><br></br><p>

SECCIÓN 6 - EXACTITUD DE LA INFORMACIÓN DE FACTURACIÓN Y CUENTA 

Nos reservamos el derecho de rechazar cualquier pedido que realice con nosotros. Podemos, a nuestro exclusivo criterio, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. Estas restricciones pueden incluir pedidos realizados por o bajo la misma cuenta de cliente, la misma tarjeta de crédito y / o pedidos que utilizan la misma dirección de facturación y / o envío. En el caso de que hagamos un cambio o cancelemos un pedido, podemos intentar notificarlo contactando con el correo electrónico y / o la dirección de facturación / número de teléfono proporcionado en el momento en que se realizó el pedido. Nos reservamos el derecho de limitar o prohibir los pedidos que, a nuestro exclusivo criterio, parecen ser realizados por distribuidores, revendedores o distribuidores. 



Usted acepta proporcionar información de compra y cuenta actual, completa y precisa para todas las compras realizadas en nuestra tienda. Usted acepta actualizar de inmediato su cuenta y otra información, incluyendo su dirección de correo electrónico y números de tarjeta de crédito y fechas de vencimiento, para que podamos completar sus transacciones y contactarlo según sea necesario. 



Para obtener más detalles, consulte nuestra Política de devoluciones. 

</p><br></br><p>

SECCIÓN 7 - HERRAMIENTAS OPCIONALES 

Podemos proporcionarle acceso a herramientas de terceros sobre las cuales no supervisamos ni tenemos control ni aportes. 

Usted reconoce y acepta que proporcionamos acceso a dichas herramientas “tal cual” y “según estén disponibles” sin garantías, representaciones o condiciones de ningún tipo y sin ningún tipo de respaldo. No tendremos ninguna responsabilidad derivada o relacionada con su uso de herramientas de terceros opcionales. 

Cualquier uso que usted haga de las herramientas opcionales ofrecidas a través del sitio es bajo su propio riesgo y discreción, y debe asegurarse de que está familiarizado y aprueba los términos en que las herramientas son proporcionadas por los proveedores externos relevantes. ) 

También podemos, en el futuro, ofrecer nuevos servicios y / o funciones a través del sitio web (incluido el lanzamiento de nuevas herramientas y recursos). Tales nuevas características y / o servicios también estarán sujetos a estos Términos de Servicio. 

</p><br></br><p>

SECCIÓN 8 - ENLACES DE TERCEROS 

Ciertos contenidos, productos y servicios disponibles a través de nuestro Servicio pueden incluir materiales de terceros. 

Los enlaces de terceros en este sitio pueden dirigirlo a sitios web de terceros que no están afiliados a nosotros. No somos responsables de examinar o evaluar el contenido o la precisión y no garantizamos ni tendremos ninguna responsabilidad por los materiales o sitios web de terceros, ni por ningún otro material, producto o servicio de terceros. 

No somos responsables de ningún daño o perjuicio relacionado con la compra o uso de bienes, servicios, recursos, contenido o cualquier otra transacción realizada en relación con sitios web de terceros. Revise detenidamente las políticas y prácticas de terceros y asegúrese de comprenderlas antes de realizar cualquier transacción. Las quejas, reclamos, inquietudes o preguntas relacionadas con productos de terceros deben dirigirse al tercero. 

</p><br></br><p>

SECCIÓN 9 - COMENTARIOS DEL USUARIO, COMENTARIOS Y OTRAS COMUNICACIONES 

Si, a nuestra solicitud, envía ciertas presentaciones específicas (por ejemplo, entradas de concursos) o sin una solicitud de nosotros envía ideas creativas, sugerencias, propuestas, planes u otros materiales, ya sea en línea, por correo electrónico, por correo postal o de otra manera (colectivamente, 'comentarios'), usted acepta que podemos, en cualquier momento, sin restricciones, editar , copie, publique, distribuya, traduzca y de otra manera use en cualquier medio cualquier comentario que nos envíe. No estamos y no tendremos ninguna obligación (1) de mantener ningún comentario confidencial; (2) pagar una compensación por cualquier comentario; o (3) para responder a cualquier comentario. 

Podemos, pero no tenemos la obligación de monitorear, eabandonar o eliminar contenido que, a nuestro exclusivo criterio, determinemos que es ilegal, ofensivo, amenazante, difamatorio, difamatorio, pornográfico, obsceno u objetable o viola la propiedad intelectual de cualquiera de las partes o estos Términos de servicio. 

Usted acepta que sus comentarios no violarán ningún derecho de terceros, incluidos los derechos de autor, marca registrada, privacidad, personalidad u otro derecho personal o de propiedad. Además, acepta que sus comentarios no contendrán material difamatorio o ilegal, abusivo u obsceno, ni contendrán ningún virus informático u otro malware que pueda afectar de alguna manera el funcionamiento del Servicio o cualquier sitio web relacionado. No puede utilizar una dirección de correo electrónico falsa, pretender ser otra persona que no sea usted mismo, o engañarnos a nosotros o a terceros en cuanto al origen de cualquier comentario. Usted es el único responsable de cualquier comentario que haga y de su precisión. No asumimos ninguna responsabilidad ni asumimos ninguna responsabilidad por los comentarios publicados por usted o cualquier tercero. 

</p><br></br><p>

SECCIÓN 10 - INFORMACIÓN PERSONAL 

Su envío de información personal a través de la tienda se rige por nuestra Política de privacidad. Para ver nuestra Política de privacidad. 

</p><br></br><p>

SECCIÓN 11 - ERRORES, IMPRECISIONES Y OMISIONES 

Ocasionalmente puede haber información en nuestro sitio o en el Servicio que contiene errores tipográficos, imprecisiones u omisiones que pueden relacionarse a descripciones de productos, precios, promociones, ofertas, gastos de envío de productos, tiempos de tránsito y disponibilidad. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, y de cambiar o actualizar información o cancelar pedidos si alguna información en el Servicio o en cualquier sitio web relacionado es inexacta en cualquier momento sin previo aviso (incluso después de haber enviado su pedido). 

No asumimos ninguna obligación de actualizar, modificar o aclarar información en el Servicio o en cualquier sitio web relacionado, incluida, entre otras, información de precios, excepto según lo exija la ley. No se debe tomar ninguna fecha específica de actualización o actualización en el Servicio o en cualquier sitio web relacionado, para indicar que toda la información en el Servicio o en cualquier sitio web relacionado se ha modificado o actualizado. 

</p><br></br><p>

SECCIÓN 12 - USOS PROHIBIDOS 

Además de otras prohibiciones establecidas en los Términos de Servicio, tiene prohibido usar el sitio o su contenido: ( a) para cualquier propósito ilegal; (b) para solicitar a otros que realicen o participen en cualquier acto ilegal; (c) violar cualquier regulación, norma, ley u ordenanza local internacional, federal, provincial o estatal; (d) infringir o violar nuestros derechos de propiedad intelectual o los derechos de propiedad intelectual de terceros; (e) acosar, abusar, insultar, dañar, difamar, calumniar, menospreciar, intimidar o discriminar por motivos de género, orientación sexual, religión, origen étnico, raza, edad, origen nacional o discapacidad; (f) presentar información falsa o engañosa; (g) cargar o transmitir virus o cualquier otro tipo de código malicioso que se pueda o pueda usar de alguna manera que afecte la funcionalidad u operación del Servicio o de cualquier sitio web relacionado, otros sitios web o Internet; (h) para recopilar o rastrear la información personal de otros; (i) para spam, phishing, pharm, pretexto, araña, rastreo o raspado; (j) para cualquier propósito obsceno o inmoral; o (k) para interferir o eludir las características de seguridad del Servicio o cualquier sitio web relacionado, otros sitios web o Internet. Nos reservamos el derecho de terminar su uso del Servicio o cualquier sitio web relacionado por violar cualquiera de los usos prohibidos. 

</p><br></br><p>

SECCIÓN 13 - DESCARGO DE RESPONSABILIDAD DE GARANTÍAS; LIMITACIÓN DE RESPONSABILIDAD 

No garantizamos, representamos ni garantizamos que su uso de nuestro servicio será ininterrumpido, oportuno, seguro o libre de errores. 

No garantizamos que los resultados que se puedan obtener del uso del servicio sean precisos o confiables. 

Usted acepta que de vez en cuando podemos eliminar el servicio por períodos indefinidos o cancelar el servicio en cualquier momento, sin notificárselo. 

Usted acepta expresamente que el uso o la imposibilidad de usar el servicio es bajo su propio riesgo. El servicio y todos los productos y servicios entregados a usted a través del servicio se proporcionan (excepto según lo expresamente expresado por nosotros) “tal cual” y “según esté disponible” para su uso, sin ninguna representación, garantía o condición de ningún tipo, ya sea expresa o implícita. , incluidas todas las garantías o condiciones implícitas de comerciabilidad, calidad comercializable, idoneidad para un propósito particular, durabilidad, título y no infracción. 

En ningún caso raulddc.eth, nuestros directores, funcionarios, empleados, afiliados, agentes, contratistas, pasantes, proveedores, proveedores de servicios o licenciantes serán responsables de cualquier lesión, pérdida, reclamación, o directa, indirecta, daños incidentales, punitivos, especiales o consecuentes de cualquier tipo, incluidos, entre otros, pérdida de ganancias, pérdida de ingresos, pérdida de ahorros, pérdida de datos, reemplazo n costos, muchos daños similares, ya sea por contrato, agravio (incluida negligencia), responsabilidad estricta o de otro tipo, derivados de su uso de cualquiera de los servicios o productos adquiridos utilizando el servicio, o por cualquier otro reclamo relacionado de alguna manera con su uso del servicio o cualquier producto, incluidos, entre otros, cualquier error u omisión en cualquier contenido, o cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso del servicio o cualquier contenido (o producto) publicado, transmitido , o de otro modo disponible a través del servicio, incluso si se le informa de su posibilidad. Debido a que algunos estados o jurisdicciones no permiten la exclusión o la limitación de responsabilidad por daños consecuentes o incidentales, en dichos estados o jurisdicciones, nuestra responsabilidad se limitará en la medida máxima permitida por la ley. 

</p><br></br><p>

SECCIÓN 14 - INDEMNIZACIÓN 

Usted acepta indemnizar, defender y mantener indemne raulddc.eth y nuestra matriz, subsidiarias, afiliadas, socios, funcionarios, directores , agentes, contratistas, licenciantes, proveedores de servicios, subcontratistas, proveedores, pasantes y empleados, inofensivos ante cualquier reclamo o demanda, incluidos los honorarios razonables de abogados, realizados por un tercero debido a su incumplimiento de estos Términos de servicio o los documentos que incorporan por referencia, o su violación de cualquier ley o los derechos de un tercero. 

</p><br></br><p>

SECCIÓN 15 - SEPARABILIDAD 

En el caso de que se determine que alguna disposición de estos Términos de servicio es ilegal, nula o inaplicable, dicha disposición será, sin embargo, exigible en la mayor medida permitida por la ley aplicable, y la parte no exigible se considerará separada de estos Términos de Servicio, dicha determinación no afectará la validez y aplicabilidad de cualquier otra disposición restante. 

</p><br></br><p>

SECCIÓN 16 - TERMINACIÓN 

Las obligaciones y responsabilidades de las partes contraídas antes de la fecha de terminación sobrevivirán a la terminación de este acuerdo para todos los propósitos. 

Estos Términos de servicio son efectivos a menos que usted o nosotros los rescindamos. Puede rescindir estos Términos de servicio en cualquier momento notificándonos que ya no desea usar nuestros Servicios o cuando deja de usar nuestro sitio. 

Si, a nuestro exclusivo criterio, usted no cumple o sospechamos que ha incumplido cualquier término o disposición de estos Términos de Servicio, también podemos rescindir este acuerdo en cualquier momento sin previo aviso y usted seguirá siendo responsable de todo importes adeudados hasta la fecha de terminación inclusive; y / o en consecuencia puede negarle el acceso a nuestros Servicios (o cualquier parte de los mismos). 

</p><br></br><p>

SECCIÓN 17 - ACUERDO COMPLETO 

El incumplimiento por nuestra parte de ejercer o hacer cumplir cualquier derecho o disposición de estos Términos de Servicio no constituirá una renuncia a tal derecho o provisión. 

Estos Términos de servicio y cualquier política o regla operativa publicada por nosotros en este sitio o con respecto al Servicio constituye el acuerdo completo y el entendimiento entre usted y nosotros y rigen su uso del Servicio, reemplazando cualquier acuerdo anterior o contemporáneo, comunicaciones y propuestas, ya sean orales o escritas, entre usted y nosotros (incluidas, entre otras, las versiones anteriores de los Términos de servicio). 

Cualquier ambigüedad en la interpretación de estos Términos de Servicio no se interpretará en contra de la parte redactora. 

</p><br></br><p>

SECCIÓN 18 - LEY APLICABLE 

Estos Términos de Servicio y cualquier otro acuerdo por el cual le brindemos Servicios se regirán e interpretarán de acuerdo con las leyes de España . 

</p><br></br><p>

SECCIÓN 19 - CAMBIOS A LOS TÉRMINOS DE SERVICIO 

Puede revisar la versión más reciente de los Términos de Servicio en cualquier momento en esta página. 

Nos reservamos el derecho, a nuestra sola discreción, de actualizar, cambiar o reemplazar cualquier parte de estos Términos de Servicio mediante la publicación de actualizaciones y cambios en nuestro sitio web. Es su responsabilidad consultar periódicamente nuestro sitio web para ver los cambios. Su uso continuo o acceso a nuestro sitio web o al Servicio después de la publicación de cualquier cambio en estos Términos de servicio constituye la aceptación de esos cambios. 

</p><br></br><p>

SECCIÓN 20 - INFORMACIÓN DE CONTACTO 

Las preguntas sobre los Términos de servicio deben enviarse a contacto.raul.fitness@gmail.com.
            </p>
            <button
            className="bg-gray-800 p-2 rounded-full mt-4"
            onClick={() => setIsModal2Open(false)}
            >
            Cerrar
            </button>

</div>
</div>
)}

{isModal3Open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div
          style={{
            maxHeight: "70vh",
            overflowY: "scroll",
          }}
          className="max-w-[600px] rounded-lg p-4 bg-black"
        >
          <h1 className="text-2xl mb-4">Política de Reembolso</h1>
          <p>
          Devoluciones

Nuestra política dura 30 días. Si han pasado 30 días desde su compra, desafortunadamente no podemos ofrecerle un reembolso o cambio.



Para ser elegible para una devolución completa debe hacerlo antes de los primeros 15 días, ya que durante ese tiempo es cuando se inicia el proceso y aún no ha empezado el servicio.



Para completar su devolución, requerimos un recibo o comprobante de compra.



Hay ciertas situaciones en las que solo se otorgan reembolsos parciales (si corresponde)



-Durante los siguientes 15 días al periodo de la devolución completa puede solicitar el reembolso por el servicio, sin embargo, será devuelto el importe proporcional que corresponde con los días que no dispondrá del servicio.

</p><br></br><p> 

Reembolsos (si corresponde)

Una vez que se reciba e inspeccione su devolución, le enviaremos un correo electrónico para notificarle que hemos recibido su solicitud de reembolso. También le notificaremos la aprobación o rechazo de su reembolso.

Si es aprobado, su reembolso será procesado y se aplicará automáticamente un crédito al método de pago original, dentro de un cierto cantidad de días.

</p><br></br><p> 

Reembolsos tardíos o faltantes (si corresponde)

Si aún no ha recibido un reembolso, primero verifique su cuenta bancaria nuevamente.

Si ha hecho todo esto y aún no ha recibido su reembolso, contáctenos en contacto.raul.fitness@gmail.com.

</p><br></br><p> 

Artículos en oferta (si corresponde) 

Solo se pueden reembolsar los artículos a precio regular, desafortunadamente los artículos en oferta no se pueden reembolsar.
          
          </p>
            <button
            className="bg-gray-800 p-2 rounded-full mt-4"
            onClick={() => setIsModal3Open(false)}
            >
            Cerrar
            </button>

        </div>
        </div>
      )}

{isModal4Open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div
          style={{
            maxHeight: "70vh",
            overflowY: "scroll",
          }}
          className="max-w-[600px] rounded-lg p-4 bg-black"
        >
          <h1 className="text-2xl mb-4">Políticas de Cookies</h1>
          <p>
          
https://raulddc.eth.limo/
</p><br></br><p>
El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
</p><br></br><p>
Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
</p><br></br><p>
La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
</p><br></br><p>
Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
</p><br></br><p>
Cookies propias: 
Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por raulddc.eth para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
</p><br></br><p>
Cookies de terceros: 
Son cookies utilizadas y gestionadas por entidades externas que proporcionan a raulddc.eth servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.
</p><br></br><p>
La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
</p><br></br><p>
Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente(s) enlace(s):
</p><br></br><p>
Google Analytics: https//developers.google.com/analytics/
</p><br></br><p>
La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder esta información a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta información para dichas entidades.
</p><br></br><p>
Cookies de redes sociales: 
raulddc.eth incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:
</p><br></br><p>
Facebook: https://www.facebook.com/policies/cookies/
Twitter: https://twitter.com/es/privacy
Instagram: https://help.instagram.com/1896641480634370?ref=ig
YouTube: https://policies.google.com/privacy?hl=es-419&gl=mx
Pinterest: https://policy.pinterest.com/es/privacy-policy
LinkedIn: https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies
</p><br></br><p>
Deshabilitar, rechazar y eliminar cookies
</p><br></br><p>
El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
          </p>
            <button
            className="bg-gray-800 p-2 rounded-full mt-4"
            onClick={() => setIsModal4Open(false)}
            >
            Cerrar
            </button>

        </div>
        </div>
      )}
</div>

</div>
</div>
</div>
);
};
export default Contact;