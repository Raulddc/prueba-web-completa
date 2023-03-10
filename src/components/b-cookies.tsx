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
                  Usamos dos tipos de cookies en esta web, aquellas estrictamente necesarias y las dirigidas a anal??ticas.
                  Haz click en aceptar para confirmar el uso de cookies opcionales de anal??ticas. Puedes 
                  leer mas informaci??n sobre ello en 
                  <a style={{
                    textDecoration: "underline"
                  }} onClick={handleModalC} className="b-cookies__link" href="#"> Pol??ticas de cookies.</a>
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
          <h1 className="text-2xl mb-4">Pol??ticas de Cookies</h1>
          <p>
          
            https://raulddc.eth.limo/
            </p><br></br><p>
            El acceso a este Sitio Web puede implicar la utilizaci??n de cookies. Las cookies son peque??as cantidades de informaci??n que se almacenan en el navegador utilizado por cada Usuario ???en los distintos dispositivos que pueda utilizar para navegar??? para que el servidor recuerde cierta informaci??n que posteriormente y ??nicamente el servidor que la implement?? leer??. Las cookies facilitan la navegaci??n, la hacen m??s amigable, y no da??an el dispositivo de navegaci??n.
            </p><br></br><p>
            Las cookies son procedimientos autom??ticos de recogida de informaci??n relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden tambi??n, por ejemplo, ayudar a identificar y resolver errores.
            </p><br></br><p>
            La informaci??n recabada a trav??s de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las p??ginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y despu??s del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el n??mero de tel??fono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer informaci??n del disco duro del Usuario o robar informaci??n personal. La ??nica manera de que la informaci??n privada del Usuario forme parte del archivo Cookie es que el usuario d?? personalmente esa informaci??n al servidor.
            </p><br></br><p>
            Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les ser?? de aplicaci??n la Pol??tica de Privacidad anteriormente descrita. En este sentido, para la utilizaci??n de las mismas ser?? necesario el consentimiento del Usuario. Este consentimiento ser?? comunicado, en base a una elecci??n aut??ntica, ofrecido mediante una decisi??n afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
            </p><br></br><p>
            Cookies propias: 
            Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por raulddc.eth para el mejor funcionamiento del Sitio Web. La informaci??n que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
            </p><br></br><p>
            Cookies de terceros: 
            Son cookies utilizadas y gestionadas por entidades externas que proporcionan a raulddc.eth servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtenci??n de estad??sticas de accesos y analizar la informaci??n de la navegaci??n, es decir, c??mo interact??a el Usuario con el Sitio Web.
            </p><br></br><p>
            La informaci??n que se obtiene se refiere, por ejemplo, al n??mero de p??ginas visitadas, el idioma, el lugar a la que la direcci??n IP desde el que accede el Usuario, el n??mero de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta informaci??n se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de ??ptima calidad. En todo caso, la informaci??n se recopila de forma an??nima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
            </p><br></br><p>
            Puede obtener m??s informaci??n sobre las cookies, la informaci??n sobre la privacidad, o consultar la descripci??n del tipo de cookies que se utiliza, sus principales caracter??sticas, periodo de expiraci??n, etc. en el siguiente(s) enlace(s):
            </p><br></br><p>
            Google Analytics: https//developers.google.com/analytics/
            </p><br></br><p>
            La(s) entidad(es) encargada(s) del suministro de cookies podr??(n) ceder esta informaci??n a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta informaci??n para dichas entidades.
            </p><br></br><p>
            Cookies de redes sociales: 
            raulddc.eth incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta raz??n, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias pol??ticas de protecci??n de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias pr??cticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. ??nicamente a t??tulo informativo se indican a continuaci??n los enlaces en los que se pueden consultar dichas pol??ticas de privacidad y/o de cookies:
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
            El Usuario puede deshabilitar, rechazar y eliminar las cookies ???total o parcialmente??? instaladas en su dispositivo mediante la configuraci??n de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que est?? utilizando. En el supuesto de que rechace el uso de cookies ???total o parcialmente??? podr?? seguir usando el Sitio Web, si bien podr?? tener limitada la utilizaci??n de algunas de las prestaciones del mismo.
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