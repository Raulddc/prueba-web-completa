import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import Cookies from "js-cookie"
import {useRouter} from 'next/router';
import classNames from 'classnames';

const BCookies = () => {

    const [isModalCOpen, setIsModalCOpen] = useState(false);
    const handleModalC = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsModalCOpen(true);
      };

    const p = 'b-cookies';
    const necessaryCookiesName = 'necesary-cookies-raulddc.eth';
    const analysisCookiesName = 'analysis-cookies-raulddc.eth';
    const [isVisibleAdvice, setIsVisibleAdvice] = useState(false);
    const [isAcceptAnalysisCookies, setIsAcceptAnalysisCookies] = useState(false);
    const router = useRouter();

    const arrayClasses = [
        {[`${p}`]       :p},
        {[`is-active`]      : isVisibleAdvice},
    ]

    let classes = classNames (arrayClasses);
    classes = classes.split(' ').join(' | ');

    const handleDeclineAll = () => {
        Cookies.set(necessaryCookiesName, 'disallow');
        setIsVisibleAdvice(false);
        setShowCookieBanner(false);
    }

    const handleAcceptAll = () => {
        Cookies.set(necessaryCookiesName, 'accept', { expires: 30});
        Cookies.set(analysisCookiesName, 'accept', { expires: 30});
        setIsVisibleAdvice(false);
        setIsAcceptAnalysisCookies(true);
        setShowCookieBanner(false);
    }

    useEffect (() => {

        const necessaryCookies = Cookies.get(necessaryCookiesName);
        const analysisCookies = Cookies.get(analysisCookiesName);

        if(necessaryCookies){
            setIsVisibleAdvice(false);
        }
        else{
            setIsVisibleAdvice(true);
        }

        if(analysisCookies){
            setIsAcceptAnalysisCookies(false);
        }
        else{
            setIsAcceptAnalysisCookies(true);
        }

    }, []);

    useEffect (() => {
        if(isAcceptAnalysisCookies){
            if(process.env.NEXT_PUBLIC_GA_ID){

                ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
                ReactGA.pageview(window.location.pathname + window.location.search);

                const handleRouteChange = (url: string) => {
                    ReactGA.pageview(url);
                }
                router.events.on('routeChangeComplete', handleRouteChange)
                return () => {
                    router.events.off('routeChangeComplete', handleRouteChange)
                }
            }
        }

    },[isAcceptAnalysisCookies]);

    const [showCookieBanner, setShowCookieBanner] = useState(true);

    useEffect(() => {
    const necessaryCookies = Cookies.get(necessaryCookiesName);
    const analysisCookies = Cookies.get(analysisCookiesName);
    if (necessaryCookies && analysisCookies) {
    setShowCookieBanner(false);
    }
    }, []);

    
    

    return (
        <div style={{
            position: "fixed",
            zIndex: 10,
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "white",
            opacity: showCookieBanner ? 1 : 0,
            visibility: showCookieBanner ? "visible" : "hidden",
            transition: "all 0.4s ease-in-out",
          }} className={showCookieBanner ? "is-active" : ""}>
            <div style={{
              padding: "10px 0px"
            }} className="b-cookies__wrapper">
              <div style={{
                display: "block",
                width: "100%",
                paddingBottom: "5px",
              }} className="b-cookies__wrapper-information">
                <p style={{
                  fontSize: "30px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  fontFamily: "var(--font-a)",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  color: "black",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                }} className="b-cookies__information">
                  COOKIES
                  
                </p>
              </div>
              <div style={{
                display: "block",
                width: "100%",
                paddingBottom: "5px",
              }} className="b-cookies__wrapper-information">
                <p style={{
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  fontFamily: "var(--font-a)",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  color: "black",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                }} className="b-cookies__information">
                  Usamos dos tipos de cookies en esta web, aquellas estrictamente necesarias y las dirigidas a analíticas.
                  Haz click en aceptar para confirmar el uso de cookies opcionales de analíticas. Puedes 
                  leer mas información sobre ello en 
                  <a style={{
                    textDecoration: "underline"
                  }} onClick={handleModalC} className="b-cookies__link" href="#"> Políticas de cookies.</a>
                </p>
              </div>
              <div style={{
                display: "block",
                width: "100%",
                textAlign: "center"
              }} className="b-cookies__wrapper-buttons">
                <div style={{
                  display: "inline-block"
                }} className="b-cookies__wrapper-accept">
                  <button style={{
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    fontFamily: "var(--font-a)",
                    fontWeight: "normal",
                    fontStyle: "normal",
                    textTransform: "uppercase",
                    width: "auto",
                    padding: "5px 10px",
                    paddingBottom: "1px",
                    color: "black",
                    borderRadius: "0px"
                }}className="b-cookies__decline" onClick={handleAcceptAll}>Aceptar</button>
                </div>
                <div style={{
                  display: "inline-block",
                  paddingRight: "10px"
                }} className="b-cookies__wrapper-decline">
                  <button style={{
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    fontFamily: "var(--font-a)",
                    fontWeight: "normal",
                    fontStyle: "normal",
                    textTransform: "uppercase",
                    width: "auto",
                    padding: "5px 10px",
                    paddingBottom: "1px",
                    color: "black",
                    borderRadius: "0px"
                  }} className="b-cookies__decline" onClick={handleDeclineAll}>Rechazar</button>
                </div>
                {isModalCOpen && (
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
            onClick={() => setIsModalCOpen(false)}
            >
            Cerrar
            </button>

        </div>
        </div>
      )}
                
          </div>
        </div>
      </div>
      
    
    )

};

export default BCookies