class MobileMenu {
    constructor() {
      this.menu = document.getElementById('mobile-menu');
      this.button = document.getElementById("closebtn");
      this.modal = $('.modal');
      this.events();
    }
  
    events() {
      this.modal.hide();
      this.button.addEventListener('click', this.toggleTheMenu.bind(this));
    } 
  
    toggleTheMenu() {
      $('#mobile-list').slideToggle("slow");
      this.modal.fadeToggle('slow', "swing");
    }
}

module.exports = MobileMenu;