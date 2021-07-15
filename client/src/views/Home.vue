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
                        <h1>Piana Orsini</h1>
                    </a>
                </div>
    
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul class="nav navbar-nav">
            <li class="active"><a href="#intro">Intro</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#service">Les +</a></li>
            <li><a href="#contact">Réserver</a></li>
            <!-- <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown">Admin<b class="caret"></b></a>
                <ul class="dropdown-menu">
                <li><a href="/admin">Se connecter</a></li>
                </ul>
            </li> -->
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
                        <h2>Le lieu</h2>
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
                        <li data-target="#my_carousel" data-slide-to="3"></li>
                         <li data-target="#my_carousel" data-slide-to="4"></li>
                         <li data-target="#my_carousel" data-slide-to="5"></li>
                         <li data-target="#my_carousel" data-slide-to="6"></li>
                         <li data-target="#my_carousel" data-slide-to="7"></li>
                         <li data-target="#my_carousel" data-slide-to="8"></li>
                         <li data-target="#my_carousel" data-slide-to="9"></li>
                         <li data-target="#my_carousel" data-slide-to="10"></li>
                         <li data-target="#my_carousel" data-slide-to="11"></li>
                         <li data-target="#my_carousel" data-slide-to="12"></li>
                         <li data-target="#my_carousel" data-slide-to="13"></li>
                         <li data-target="#my_carousel" data-slide-to="14"></li>
                    </ol>
                    <!-- Slides -->
                    <div class="carousel-inner">
                        <!-- Page 1 -->
                        <div class="item active">
                            <div class="carousel-page">
                            <img src="../assets/img/14.jpg" class="img-responsive" style="margin:0px auto;" />
                            </div>
                            <div class="carousel-caption">
                                <h5> Montée d'escaliers </h5>
                                </div>
                        </div>
                        <!-- Page 2 -->
                        <div class="item">
                            <div class="carousel-page">
                                <img src="../assets/img/0.jpg" class="img-responsive img-rounded" style="margin:0px auto;"  /></div>
                            <div class="carousel-caption">
                                <h5> Terrasse </h5>
                                </div>
                        </div>
                        <!-- Page 3 -->
                        <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/1.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5> Terrasse </h5>
                                </div>
                        </div>
                        <!-- Page 4 -->
                        <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/2.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Vue de ta terrasse </h5>
                                </div>
                        </div>
                        <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/11.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Vue de ta terrasse </h5>
                                </div>
                        </div>
                        <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/13.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Cuisine </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/9.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Salon </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/10.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Cuisine </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/7.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Salon</h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/8.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Salon </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/3.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Chambre 1 </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/15.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Vue Chambre 1 </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/16.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Vue Chambre 1 </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/17.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Chambre 2 </h5>
                                </div>
                        </div>
                         <div class="item">
                            <div class="carousel-page">
                            <img src="../assets/img/4.jpg" class="img-responsive img-rounded" 
                                style="margin:0px auto;max-height:100%;"  />
                            </div>
                            <div class="carousel-caption">
                                <h5>Chambre 2 </h5>
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
                        <h2>Les plus...</h2>
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
                        <h2>Nous contacter </h2>
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

                            <FormChoiceFields 
                                :choice='form.subject' 
                                @visitor-message="updateMessage"
                            ></FormChoiceFields>

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
                        <p>&copy;Copyright 2020 - Louise Fresquet</p>
                        <p>CSS Theme based on <a href="https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/">Squadfree</a></p>
                    </div>
                </div>	
            </div>
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Merci de votre intérêt !</h4>
                    </div>
                    <div class="modal-body">
                        <p>Nous vous avons envoyé un email de confirmation à l'adresse email indiquée (veuillez vérifier vos spam si jamais il n'apparaît pas dans votre boîte de réception).</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="refresh">OK</button>
                    </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
        </footer>
      </div>
</template>

<script>
// @ is an alias to /src
import FormChoice from '@/components/FormChoice.vue';
import FormChoiceFields from '@/components/FormChoiceFields.vue';

const API_URL = "https://piana-orsini.fr/send-email";

var myStartDate = '';
var myEndDate = '';

$(document).ready(function(){
    $("#datepicker1").on("change", function(){
        myStartDate = $('#datepicker1').datepicker({ dateFormat: 'dd,MM,yyyy' }).val();;
        myEndDate = $('#datepicker2').datepicker({ dateFormat: 'dd,MM,yyyy' }).val();;
        console.log("Start Date of datepicker: ", myStartDate)
        console.log("End Date of datepicker: ", myEndDate)
    });
    $("#datepicker2").on("change", function(){
        myStartDate = $('#datepicker1').datepicker({ dateFormat: 'dd,MM,yyyy' }).val();;
        myEndDate = $('#datepicker2').datepicker({ dateFormat: 'dd,MM,yyyy' }).val();;
        console.log("Start Date of datepicker: ", myStartDate)
        console.log("End Date of datepicker: ", myEndDate)
    });
});



export default {
  name: 'Home',
  components: {
    FormChoice,
    FormChoiceFields
  },
  data(){
      return {
        errors: [],
        form: {
            visitor_name: '',
            visitor_email: '',
            subject: '',
            message: '',
        }
      }
  },
  methods:{
    checkForm: function (e) {
        this.errors = [];
        if (this.form.visitor_name == '') {
            this.errors.push('Name required.');
        }
        if (this.form.visitor_email == '') {
            this.errors.push('Email required.');
        }
        if (this.form.subject=='') {
            this.errors.push('Subject required.');
        }
        if (this.form.message == '') {
            this.errors.push('Message required.');
        }
        
        var data = {
            to : this.form.visitor_email,
            message : this.form.message, 
            subject : this.form.subject, 
            name : this.form.visitor_name,
        }


        //console.log(data);
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "content-type": "application/json"
            }
        })
        .then(response => response.json())

        $('#myModal').modal('toggle')
        
        // console.log("fetch api");
        // fetch(API_URL_Test, {
        //     method: "GET",
        // })
        // .then(response => response.json())

        // try{
        //     axios.post(
        //         "http://localhost:4000/send-email", 
        //         data
        //     ) 
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // }
        // catch(error) {
        //     console.log(error);
        //     this.errors.push(error);
        //     this.errors.push('Problem sending email');
        // };

        if (this.errors.length){
            console.log({"error":this.errors.join(",")});
            return;
        }
        e.preventDefault();
    },
    updateSubject($event){
        this.form.subject = $event
    },
    updateMessage($event){
        this.form.message = $event
    },
    refresh(){
        location.reload();
    }
}};
</script>

<style>


</style>
