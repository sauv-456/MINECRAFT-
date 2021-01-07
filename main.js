var canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=30;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update() {
fabric.Image.fromURL("player.png",function(Img)
{
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:playerY, left:playerX
});
canvas.add(player_object);
}
);
}
function new_image(get_image) {
fabric.Image.fromURL(get_image, function(Img) 
{
block_object=Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({ top:playerY, left:playerX});
canvas.add(block_object);
}
); 
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keypress=e.keyCode;
console.log(keypress);
if(e.shiftKey==true && keypress=='80')
{
console.log("p and shift pressed together. ");
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true && keypress=='77')
{
console.log("m and shift pressed together. ");
block_width=block_width-10;
block_height=block_height-10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(keypress=='38') {
up();
console.log("up");
}
if (keypress=='40') {
down();
console.log("down");
}
if (keypress=='37') {
left();
console.log("left");
}
if (keypress=='39') {
right();
console.log("right");
}
if (keypress=='87') {
new_image('wall.jpg');
console.log("w");
}
if (keypress=='71') {
new_image('ground.png');
console.log("g");
}
if (keypress=='76') {
new_image('light_green.png');
console.log("l");
}
if (keypress=='84') {
new_image('trunk.jpg');
console.log("t");
}
if (keypress=='82') {
new_image('roof.jpg');
console.log("r");
}
if (keypress=='89') {
    new_image('yellow_wall.png');
    console.log("y");
}
if (keypress=='68') {
new_image('dark_green.png');
console.log("d");
}
if (keypress=='85') {
new_image('unique.png');
console.log("u");
}
if (keypress=='67') {
new_image('cloud.jpg');
console.log("c");
}
}

function up() {
if( playerY >= 0)
{
 playerY = playerY - block_height;
 console.log("block height = "+block_height);
canvas.remove(player_object);
player_update();
}
}

function down() {
if( playerY<=500) {
playerY = playerY + block_height;
console.log("block height ="+block_height);
canvas.remove(player_object);
player_update();
}
}

function left() {
if( playerX>=0) {
playerX=playerX-block_width;
console.log("block width ="+block_width);
canvas.remove(player_object);
player_update();
}
}

function right() {
if( playerX<=850) 
{
playerX=playerX+block_width;
console.log("block width ="+block_width);
canvas.remove(player_object);
player_update();
}
}



