<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oups!</h1>
                <h2>
                    Erreur 404</h2>
                <div class="error-details">
                    Il n'y a rien ici...
                </div>
                <div class="error-actions">
                    <a href="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Retour à l'accueil </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>


export default {
    name: 'NotFound',
    data(){
        return {
        }
    },
    methods:{
    }
};
</script>

<style scoped>


.error-template {
    padding: 40px 15px; 
    text-align: center;
    vertical-align: middle;
    position: fixed;
    top: 30%;
    left: 50%;
    margin-left: -100px;
}

.error-actions {
    margin-top:15px;
    margin-bottom:15px;
}

.error-actions .btn { 
    margin-right:10px; 
}

</style>
