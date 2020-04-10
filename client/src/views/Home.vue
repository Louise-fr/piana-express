<template>
<!-- Preloader -->
  <div>
        <div id="preloader">
            <div id="load"></div>
        </div>
    
        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="#intro">
                        <h1>Maison pianaise</h1>
                    </a>
                </div>
    
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul class="nav navbar-nav">
            <li class="active"><a href="#intro">Intro</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#service">Les +</a></li>
            <li><a href="#contact">Réserver</a></li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown">Admin<b class="caret"></b></a>
                <ul class="dropdown-menu">
                <li><a href="/admin">Se connecter</a></li>
                </ul>
            </li>
            </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>
    
        <!-- Section: intro -->
        <section id="intro" class="intro">
        
            <div class="slogan">
                <h2>Un coin tranquille à <span class="text_color">Piana</span> </h2>
                <h4>Réserver l'appartement de la famille Orsini dans un petit village corse.</h4>
            </div>
            <div class="page-scroll">
                <a href="#service" class="btn btn-circle">
                    <i class="fa fa-angle-double-down animated"></i>
                </a>
            </div>
        </section>
        <!-- /Section: intro -->
    
        <!-- Section: carrousel -->
        <section id="about" class="home-section text-center bg-white">
            <div class="heading-about">
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="wow bounceInDown" data-wow-delay="0.4s">
                        <div class="section-heading">
                        <h2>La maison</h2>
                        <i class="fa fa-2x fa-angle-down"></i>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="container">
    
            <div class="row">
                <div class="col-lg-2 col-lg-offset-5">
                    <hr class="marginbot-50">
                </div>
            </div>
            <div class="row">
                
                <!-- debut du carrousel-->
                <div id="my_carousel" class="carousel slide" data-ride="carousel">
                    <!-- Bulles -->
                    <ol class="carousel-indicators">
                        <li data-target="#my_carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#my_carousel" data-slide-to="1"></li>
                        <li data-target="#my_carousel" data-slide-to="2"></li>
                    </ol>
                    <!-- Slides -->
                    <div class="carousel-inner">
                        <!-- Page 1 -->
                        <div class="item active">
                            <div class="carousel-page">
                            <img src="../assets/img/bg10-crop.jpg" class="img-responsive" style="margin:0px auto;" />
                            </div>
                            <div class="carousel-caption">
                                <h5> Oh que c'est beau </h5>
                                </div>
                        </div>
                        <!-- Page 2 -->
                        <div class="item">
                            <div class="carousel-page">
                                <img src="../assets/img/bg7-crop.jpg" class="img-responsive img-rounded" style="margin:0px auto;"  /></div>
                            <div class="carousel-caption">
                                <h5> U ghjattu ! </h5>
                                </div>
                        </div>
                        <!-- Page 3 -->
                        <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/bg11-crop.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5> La belle plante ! </h5>
                                </div>
                        </div>
                    </div>
                    <!-- Contrôles -->
                    <a class="left carousel-control" href="#my_carousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a class="right carousel-control" href="#my_carousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            </div>		
            </div>
        </section>
        <!-- /Section: carrousel -->
        
    
        <!-- Section: services -->
        <section id="service" class="home-section text-center bg-gray">
            
            <div class="heading-about">
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="wow bounceInDown" data-wow-delay="0.4s">
                        <div class="section-heading">
                        <h2>Les petits +</h2>
                        <i class="fa fa-2x fa-angle-down"></i>
    
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="container">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-5">
                    <hr class="marginbot-50">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 col-md-3">
                    <div class="wow fadeInLeft" data-wow-delay="0.2s">
                    <div class="service-box">
                        <div class="service-icon">
                            <img src="../assets/img/icons/house-final.png" alt="" />
                        </div>
                        <div class="service-desc">
                            <h5>L'intérieur tout neuf</h5>
                            <p>L'intérieur a été refait à neuf et redécoré style moderne. Le confort est au rendez-vous.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3">
                    <div class="wow fadeInUp" data-wow-delay="0.2s">
                    <div class="service-box">
                        <div class="service-icon">
                            <img src="../assets/img/icons/mare-e-monti-final.png" alt="" />
                        </div>
                        <div class="service-desc">
                            <h5>Mare e monti</h5>
                            <p>Avec la vue sur la montagne et la mer depuis les chambres, l'immersion est garantie !</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3">
                    <div class="wow fadeInUp" data-wow-delay="0.2s">
                    <div class="service-box">
                        <div class="service-icon">
                            <img src="../assets/img/icons/zen-final.png" alt="" />
                        </div>
                        <div class="service-desc">
                            <h5>La tranquilité</h5>
                            <p>L'appartement est situé dans un petit coin du village, loin de la circulation. Vous serez donc tranquille, loin du bruit.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3">
                    <div class="wow fadeInUp" data-wow-delay="0.2s">
                    <div class="service-box">
                        <div class="service-icon">
                            <img src="../assets/img/icons/shop-final.png" alt="" />
                        </div>
                        <div class="service-desc">
                            <h5>Commerces</h5>
                            <p>Les commerces sont à 5 minutes à pied, le supermarché comme les petites épiceries du village. </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>		
            </div>
        </section>
        <!-- /Section: services -->
        
    
        
    
        <!-- Section: contact -->
        <section id="contact" class="home-section text-center bg-white">
            <div class="heading-contact">
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="wow bounceInDown" data-wow-delay="0.4s">
                        <div class="section-heading">
                        <h2>Nous contacter</h2>
                        <i class="fa fa-2x fa-angle-down"></i>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="container">
    
            <div class="row">
                <div class="col-lg-2 col-lg-offset-5">
                    <hr class="marginbot-50">
                </div>
            </div>
        <div class="row">
            <!--<div class="col-lg-8"> -->
                <div class="boxed-grey">
                    <form id="contact-form" @submit="checkForm">
                        <div class="row">
                            <div class='col-md-4'>
                                <div class="form-group">
                                    <label for="name">
                                        Nom</label>
                                    <input v-model="form.visitor_name" type="text" class="form-control" id="name" placeholder="Votre nom" required="required" />
                                </div>
                                <div class="form-group">
                                    <label for="email">
                                        Adresse mail</label>
                                    <div class="input-group">
                                        <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                        </span>
                                        <input v-model="form.visitor_email" type="email" class="form-control" id="email" placeholder="Votre email" required="required" /></div>
                                </div>
                                <div class="form-group">
                                    <!-- form choice -->
                                    <FormChoice
                                        @visitor-choice="updateSubject"
                                    ></FormChoice>
                                </div>
                            </div>

                            <FormChoiceFields :choice='form.subject'></FormChoiceFields>

                            <div v-if="form.subject !== ''">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-skin pull-right" id="btnContactUs">
                                        Envoyer</button>
                                </div>
                            </div>
                        </div>
                        </form>
                </div>
        </div>	
            </div>
        </section>
        <!-- /Section: contact -->
    
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="wow shake" data-wow-delay="0.4s">
                        <div class="page-scroll marginbot-30">
                            <a href="#intro" id="totop" class="btn btn-circle">
                                <i class="fa fa-angle-double-up animated"></i>
                            </a>
                        </div>
                        </div>
                        <p>&copy;Copyright 2014 - Squad. All rights reserved.</p>
                    </div>
                </div>	
            </div>
        </footer>
      </div>
</template>

<script>
// @ is an alias to /src
import FormChoice from '@/components/FormChoice.vue';
import FormChoiceFields from '@/components/FormChoiceFields.vue';

export default {
  name: 'Home',
  components: {
    FormChoice,
    FormChoiceFields
  },
  data(){
      //penser à échapper les infos
      return {
        form: {
            visitor_name: '',
            visitor_email: '',
            subject: '',
            message: '',
            start_date: Date,
            end_date: Date,
        }
      }
  },
  methods:{
    checkForm: function (e) {
      if (this.visitor_name != '' && this.visitor_email != '') {
          console.log('ok')
          return true;
      }

      this.errors = [];

      if (this.visitor_name == '') {
        this.errors.push('Name required.');
      }
      if (!this.visitor_email == '') {
        this.errors.push('Email required.');
      }

      e.preventDefault();
    },

    updateSubject($event){
        this.form.subject = $event
    },

}};
</script>

<style>


</style>
