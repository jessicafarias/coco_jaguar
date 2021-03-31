const Footer = () => {
  return (
    <section id="footer">
      <footer className="row">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe width="100%" height="100%" id="gmap_canvas"
              src="https://maps.google.com/maps?q=coco%20jaguar%20isla%20mujeres&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;