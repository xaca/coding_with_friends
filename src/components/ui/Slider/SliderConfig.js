//edited form Ryan Morr
class SliderConfig{
  
  constructor(parent_node){
    this.container = "";
    this.prevBtn= "";
    this.nextBtn= "";
    this.pagination = "";
    this.bullets = [];
    this.totalItems = 0;
    this.percent = 0;
    this.currentIndex = 0;
    this.slider_delay = 20000;
    this.createSlider(parent_node);
  }

  next(ref) {
      ref.slideTo(ref.currentIndex + 1);
  }

  prev(ref) {
      ref.slideTo(ref.currentIndex - 1);
  }

  slideTo(index) {
      index = index < 0 ? this.totalItems - 1 : index >= this.totalItems ? 0 : index;
      this.container.style.WebkitTransform = this.container.style.transform = 'translate(-' + (index * 100) + '%, 0)';
      this.bullets[this.currentIndex].classList.remove('active-bullet');
      this.bullets[index].classList.add('active-bullet');
      this.currentIndex = index;
  }

  createPagination(parent_node) {
    this.pagination.replaceChildren();
    for(var i=0; i<this.totalItems;  i++)
      {
        var li = document.createElement("li");
        li.classList.add("carousel-bullet");
        this.pagination.appendChild(li);
      }
      this.bullets = [].slice.call(parent_node.querySelectorAll('.carousel-bullet'));
      this.bullets[this.currentIndex].classList.add('active-bullet');
      this.prevBtn.addEventListener('click', this.prev.bind(null,this), false);
      this.nextBtn.addEventListener('click', this.next.bind(null,this), false);
      
      this.pagination.addEventListener('click', function(ref,e) {
        var index = ref.bullets.indexOf(e.target);
        if (index !== -1 && index !== ref.currentIndex) {
          ref.slideTo(index);
        }
      }.bind(null,this), false);
  }

  createSlider(parent_node){
    this.container = parent_node.querySelector('.carousel-container');
    this.prevBtn = parent_node.querySelector('.carousel-prev');
    this.nextBtn = parent_node.querySelector('.carousel-next');
    this.pagination = parent_node.querySelector('.carousel-pagination');  
    this.totalItems = this.container.querySelectorAll('.carousel-item').length;
    this.currentIndex = 0;
    this.createPagination(parent_node);
    setInterval(this.next.bind(null,this),this.slider_delay);
  }
}

export default SliderConfig;