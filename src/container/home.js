import React from 'react';
import messenger_logo from '../img/facebook-messenger-white.svg';

const Home = () => (
  <div>
    <header className="business-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="tagline">Business Name or Tagline</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <hr/>
      <div className="row">
        <div className="col-sm-8">
          <h2>What We Do</h2>
          <p>Introduce the visitor to the business using clear, informative text. Use well-targeted keywords within your sentences to make sure search engines can find the business.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
          <p>
            <a className="btn btn-default btn-lg" href="#">Call to Action &raquo;</a>
          </p>
        </div>
        <div className="col-sm-4">
          <h2>Fale Conosco</h2>
          <div>
            <strong>CrossFit Ki</strong>
            <br/>Rua Dionisio da Costa, 353
            <br/>Klabin - São Paulo - SP
            <br/>
          </div>
          <div className="messenger-div">
            <div><img className="img-circle messenger-logo" src={messenger_logo}/></div>
            <div className="messenger-text"><span>Enviar pelo Messenger</span></div>
            <a href="https://m.me/crossfitki"><span className="messenger-span"></span></a>
          </div>
        </div>
      </div>

      <hr/>

      <div className="row">
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt=""/>
          <h2>Marketing Box #1</h2>
          <p>These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold.</p>
        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt=""/>
          <h2>Marketing Box #2</h2>
          <p>The images are set to be circular and responsive. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        </div>
        <div className="col-sm-4">
          <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" alt=""/>
          <h2>Marketing Box #3</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        </div>
      </div>

      <hr/>

      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright &copy; CrossFit Ki 2016</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Home;
