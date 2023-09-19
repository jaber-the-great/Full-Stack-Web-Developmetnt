var head1 = document.querySelector("#one")
var head2 = document.querySelector("#two")
var head3 = document.querySelector("#three")

head1.addEventListener("mouseover",function(){
  head1.textContent = "Mouse currently Over";
  head1.style.color = "red";

})

head1.addEventListener("mouseout",function(){
  head1.textContent = "Hover Me";
  head1.style.color = "black";

})

var clicked = false;
head2.addEventListener("click",function(){
        if(!clicked)
        {
          head2.textContent = "Clicked On";
          head2.style.color = "blue";
        }
        else
        {
          head2.textContent = "Click Me";
          head2.style.color = "black";
        }

        clicked = !clicked;
})



var dbc = false;
head3.addEventListener("dblclick",function(){
    if(dbc)
    {
      head3.textContent = "Double Clicked On";
      head3.style.color = "green";
    }
    else
    {
      head3.textContent = "Double Click Me";
      head3.style.color = "black";
    }
    dbc = !dbc;
})
