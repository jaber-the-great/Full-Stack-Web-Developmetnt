function hello(){
  console.log("Hello World!")
}
function helloU(name = "this is defualt:)" , title='sir'){
  console.log("Hello " + name)
  return title + " " + name
}
