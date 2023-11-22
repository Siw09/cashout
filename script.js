// Attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner le modal
    var modal = document.getElementById('myModal');

    // Afficher le modal
    modal.style.display = 'block';

    // Sélectionner le bouton de fermeture du modal
    var closeBtn = document.getElementsByClassName('close')[0];

    // Fermer le modal lorsque l'utilisateur clique sur le bouton de fermeture
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Fermer le modal lorsque l'utilisateur clique en dehors du modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
