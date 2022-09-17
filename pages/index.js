import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <div>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <style dangerouslySetInnerHTML={{__html: "\nbody,h1,h5 {font-family: \"Raleway\", sans-serif}\nbody, html {height: 100%}\n.bgimg {\n  background-image: url('/w3images/onepage_restaurant.jpg');\n  min-height: 100%;\n  background-position: center;\n  background-size: cover;\n}\n" }} />
        <div className="bgimg w3-display-container w3-text-white">
          <div className="w3-display-middle w3-jumbo">
            <p>logo</p>
          </div>
          <div className="w3-display-topleft w3-container w3-xlarge">
            <p><button onclick="document.getElementById('menu').style.display='block'" className="w3-button w3-black">menu</button></p>
            <p><button onclick="document.getElementById('contact').style.display='block'" className="w3-button w3-black">contact</button></p>
          </div>
          <div className="w3-display-bottomleft w3-container">
            <p className="w3-xlarge">monday - friday 10-23 | saturday 14-02</p>
            <p className="w3-large">42 village St, New York</p>
            <p>powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
          </div>
        </div>
        {/* Menu Modal */}
        <div id="menu" className="w3-modal">
          <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container w3-black w3-display-container">
              <span onclick="document.getElementById('menu').style.display='none'" className="w3-button w3-display-topright w3-large">x</span>
              <h1>Starters</h1>
            </div>
            <div className="w3-container">
              <h5>Tomato Soup <b>$2.50</b></h5>
              <h5>Chicken Salad <b>$3.50</b></h5>
              <h5>Bread and Butter <b>$1.00</b></h5>
            </div>
            <div className="w3-container w3-black">
              <h1>Main Courses</h1>
            </div>
            <div className="w3-container">
              <h5>Grilled Fish and Potatoes <b>$8.50</b></h5>
              <h5>Italian Pizza <b>$5.50</b></h5>
              <h5>Veggie Pasta <b>$4.00</b></h5>
              <h5>Chicken and Potatoes <b>$6.50</b></h5>
              <h5>Deluxe Burger <b>$5.00</b></h5>
            </div>
            <div className="w3-container w3-black">
              <h1>Desserts</h1>
            </div>
            <div className="w3-container">
              <h5>Fruit Salad <b>$2.50</b></h5>
              <h5>Ice cream <b>$2.00</b></h5>
              <h5>Chocolate Cake <b>$4.00</b></h5>
              <h5>Cheese <b>$5.50</b></h5>
            </div>
          </div>
        </div>
        {/* Contact Modal */}
        <div id="contact" className="w3-modal">
          <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container w3-black">
              <span onclick="document.getElementById('contact').style.display='none'" className="w3-button w3-display-topright w3-large">x</span>
              <h1>Contact</h1>
            </div>
            <div className="w3-container">
              <p>Reserve a table, ask for today's special or just send us a message:</p>
              <form action="/action_page.php" target="_blank">
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2020-11-16T20:00" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
                <p><button className="w3-button" type="submit">SEND MESSAGE</button></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}