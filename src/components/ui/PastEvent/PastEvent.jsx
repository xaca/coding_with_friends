function OpenPastEvent(){

  const childUrl = window.open('/preview', '_blank');
  childUrl.document.open('text/html', 'replace');
  childUrl.document.write(htmlContent);

}
function PastEvent(){
    return (<>
      <section id="eventos_anteriores">
      <h2>Eventos anteriores</h2>
      <ul className="lista_generica">
        <li>
          🌱 <a href="https://codingwithfriends.club/archivo/01/" target="_blank">CWF - CONF (el inicio)</a>
        </li>
        <li>
          🍼 <a href="https://codingwithfriends.club/archivo/02/" target="_blank">CWF - Renacimiento</a>
        </li>
        <li>
          🎙️ <a href="https://codingwithfriends.club/archivo/03/" target="_blank">CWF - Día de la mujer</a>
        </li>
        <li>
          🕵️ <a href="https://codingwithfriends.club/archivo/04/" target="_blank">CWF - Hackerone</a>
        </li>
        <li>
          🕹️ <a href="https://codingwithfriends.club/archivo/05/" target="_blank">CWF - VR / Touchdesigner</a>
        </li>
        <li>
          🖲️ <a href="https://codingwithfriends.club/archivo/06/" target="_blank">CWF - Design / WebGL</a>
        </li>
        <li>
          🏛️ <a href="https://codingwithfriends.club/archivo/07/" target="_blank">CWF - G.D.S. / Hacking Interviews</a>
        </li>
        <li>
          ⚔️ <a href="https://codingwithfriends.club/archivo/08/" target="_blank">CWF - React vs Angular</a>
        </li>
      </ul>
    </section>
    </>);
}
export default PastEvent;