var love = 1   //CHANGE TO 1
var loveNum = 1
var money = 0
var knowledge = 0
var age = 0;     //change it back to 0
var weekCount = 0;
var inventory = [] ; //for tools
var button;
var stat;
var babyLock = false;
var toddlerLock = true;
var kidLock = true;
var preteenLock = true;
var teenLock = true;
var bdayText = "";
var alertShown = false;
var health = 100;
var attack = 1;
var m1 = false;
var m2 = false;
var m3 = false;



var interval = setInterval(updateStatus, 100);
function updateStatus(){
  showUpdate("age")
  showUpdate("love")
  showUpdate("money")
  showUpdate("knowledge")
  showUpdate("inventory")
  showUpdate("health")

//IF U CHANGE WEEK COUNT ALSO CHANGE IT TO WEEKCOUNT-1 ON LINE 101
  if(weekCount == 52){       //CHANGE WEEK COUNT TO 52
    if(!alertShown){
      age++;
    }
    weekCount = 0;
    showUpdate("age")
    clearQueue("events");
    bdayText = "Happy Birthday, you are " + age + "!"
    notification(bdayText)
  }  

  if (toddlerLock && age == 2){
      toddlerLock = false
      document.getElementById("baby").style.display = "none"
      document.getElementById("toddler").style.display = "block"
      
      button = document.getElementById("cryB")
      button.style.display = "none"
	    button = document.getElementById("hugB")
      button.style.display = "block"
      button = document.getElementById("kissB")
      button.style.display = "block"
	}

  if (kidLock && age == 5){
      kidLock = false
      document.getElementById("toddler").style.display = "none"
      document.getElementById("kid").style.display = "block"

      button = document.getElementById("playB")
      button.style.display = "block"
	    button = document.getElementById("allowB")
      button.style.display = "block"
      stat = document.getElementById("moneyStat")
      stat.style.display = "block"
      stat = document.getElementById("knowStat")
      stat.style.display = "block"

	}
  if (preteenLock && age == 10){
      preteenLock = false

      document.getElementById("kid").style.display = "none"
      document.getElementById("preteen").style.display = "block"

      notification("Too old for kisses yuck!")
      button = document.getElementById("kissB")
      button.style.display = "none"
      button = document.getElementById("playB")
      button.style.display = "none"
      button = document.getElementById("studyB")
      button.style.display = "block"
	    button = document.getElementById("allowB")
      button.style.display = "block"
      button = document.getElementById("shopB")
      button.style.display = "block"
	}
  if (teenLock && age == 15){
      teenLock = false
      document.getElementById("preteen").style.display = "none"
      document.getElementById("teen").style.display = "block"
      
      button = document.getElementById("qtB")
      button.style.display = "block"
      button = document.getElementById("dateB")
      button.style.display = "block"
	}
  if (age == 17 && weekCount == 1){
    document.getElementById("teen").style.display = "none"
    document.getElementById("ufo").style.display = "block"
  }
  if(age == 18 && !alertShown)
  {
    document.getElementById("teen").style.display = "none"
    //document.style.backgroundColor = "#3a2c52";
    document.body.style.color = "white";
    document.getElementsByTagName('html')[0].style.backgroundColor = "#3a2c52";
    
    
    alert("Is that a ...UFO?!! Aliens!!!!");

    document.getElementById("ufo").style.display = "none"

    alertShown = true;
    button = document.getElementById("hugB")
    button.style.display = "none"
    button = document.getElementById("studyB")
    button.style.display = "none"
    button = document.getElementById("qtB")
    button.style.display = "none"
    button = document.getElementById("allowB")
    button.style.display = "none"
    button = document.getElementById("dateB")
    button.style.display = "none"
    button = document.getElementById("shopB")
    button.style.display = "none"

    notification("You have been abducted by aliens,they want you to entertain them by fighting monsters.")
    notification("If you have experienced enough love in your childhood, your kindness will allow them to let you shop in their toolbox.")
    
    stat = document.getElementById("healthStat")
    stat.style.display = "block"
    button = document.getElementById("drawB");
    button.style.display = "block";
    button = document.getElementById("exploreB");
    button.style.display = "block";
    stat = document.getElementsByClassName("inventory");
    stat[0].style.display = "block";
    stat[1].style.display = "block";
    document.getElementById("aliens").style.display = "block"
  }

  if (m3){
    notification("You have satisfied the aliens wishes, and they have decided to take you back to your home! Thye appreciate you defeating the monsters on their planet.")
  }
}

var interval = setInterval(lovePerSec, 1000);

function aliensBouns(){
  love++;
}

function lovePerSec(){
  love+=loveNum
  document.getElementById("love").innerHTML = love
}


function action(event){
  
  var valid = true;

  switch(event){
    case "cry":
      cryForLove();       //done
      break;
    case 'hug':          //done
      notification("You give a hug to your family. Love+1")
      break;
    case 'kiss':
      kissForLove();    //done
      break;
    case 'play':
      knowledge += 1    //done
      notification("You played with your toys and learned a lesson. Knowledge+1")
      break;
    case 'study':
      knowledge += 2    //done
      notification("You studied and did your homework to learn information and life skills. Knowledge+2")
      break;
    case 'allowance':
      allowance()       //done
      break;
    case 'qualityTime':
      qualityTime();    //done
      break;
    case 'shop':
      if(money >= 30){
        money -= 30
        shop();    //done
      } else{
        notification("You don't have enough money to perform this action", "red")
        valid = false
      }
      break;
    case 'date':
      dateForLove();    //done
      break;
    case 'draw':
      if(love >= 300){
        love -= 300
        draw();    //done
      } else{
        notification("You don't have enough love to perform this action, take some time to reminisce to get your love stats back up", "red") 
      }
      valid = false
      break;
    case 'explore':
      notification("You enter the game\n Be careful")
      explore();    
      break;
    default:
    
  }
  
  if(valid)
    weekCount++;
}

var monster1 = {name: "m1", pic: document.getElementById("monster1"), health: 50, attack: 10}
var monster2 = {name: "m2", pic: document.getElementById("monster2"), health: 100, attack: 20}
var monster3 = {name: "m3", pic: document.getElementById("monster3"), health: 500, attack: 30}


function explore()
{
  if(probability(40)) //entering event
  {
    notification("As you walk around the spacecraft and strange planet, you come across a map in a strange language." )
    if (knowledge >= 200){
      tool = randItemFromToolList(commonTools)
      notification("Your knowledge is high enough to translate the map and it takes you to a... " + tool.name, "#4cd2e0")
      notification("You can communicate better with the aliens in their language now. Knowledge+10")
      knowledge+=10
      if(!checkDuplicateTool(tool))  
        inventory.push(tool);
    }else if (knowledge >= 500 ){
      tool = randItemFromToolList(rareTools)
      notification("Your knowledge is high enough to translate the map and it takes you to a... " + tool.name, "#e09fce")
      notification("You can communicate better with the aliens in their language now. Knowledge+10")
      knowledge+=10
      if(!checkDuplicateTool(tool))  
        inventory.push(tool);
    }else{
      notification("Your knowledge is NOT high enough to translate the map", "red")
    }
  } else{

    if (confirm("An monster decided to attack you. What do you do? Warning: loosing fight will have punishment.")) {
      
      document.getElementById("aliens").style.display = "none"

      var modal = document.getElementById("myModal")

      modal.style.display = "block";

      var close = document.getElementsByClassName("close")[0];
      

      close.onclick = function() {
        modal.style.display = "none";
        document.getElementById("aliens").style.display = "block"
        clearQueue("notificationList")   
        if(m1)
          document.getElementById("monster1").style.display = "none"
        else if(m2)
          document.getElementById("monster2").style.display = "none"
        else if(m3)
          document.getElementById("monster3").style.display = "none"
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      if(fight()){ //if win a fight
        notification("Congratulations, you win the battle, keep going and you can go back home!", "blue")
        fightNotification("\Congratulations, you win the battle, keep going and you can go back home!", "blue")
      } else {
        notification("You suffer a head injury, come back when you are strong enough (Knowledge -10)", "red")
        fightNotification("\You suffer a head injury, come back when you are strong enough (Knowledge -10)", "red");
        knowledge -= 10
      }
      
    } else {
      notification("You escape the monster... But what are you going to do next?")
    }
  }
}



function fightNotification(text) {
  var ol = document.getElementById("notificationList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ol.appendChild(li); 
}

function fightNotification(text, color) {
  var ol = document.getElementById("notificationList");
  var li = document.createElement("li");
  
  li.appendChild(document.createTextNode(text));
  li.style.color = color;

  ol.appendChild(li); 
}


function fightingRound(monster){
  var result = false;
  var healthFight = health;

  for(var i=0; i<10; i++){
    fightNotification("\n")
    fightNotification("-----ROUND "+ (i+1) +" -----")
    fightNotification("Monster:\n"+ "Health: "+ monster.health)
    fightNotification("You:\n"+ "Health: "+ healthFight)
    
    fightNotification("\n")
    //monster attack
    fightNotification("The monster attack you. You lost "+ monster.attack + " health.")
    healthFight -= monster.attack;

    //player attack
    monster.health -= attack;
    fightNotification("You fight back! The monster lost "+ attack + " health.")

    
    if(healthFight < 0 || monster.health <0){
      fightNotification("\n")
      break;    
    }
  }

  if(monster.health < 0){
    fightNotification("YOU WIN!", "blue")
    result = true; 
  }else{
    fightNotification("Oh noooo...", "red")
  }
  fightNotification("\n")
  return result;
}



function fight(){
  var fightResult = false;
  if (!m1){
    notification("You encounter slimy green alien monster!")
    fightNotification("You encounter slimy green alien monster!\n")
    document.getElementById("monster1").style.display = "block"
    fightResult = fightingRound(monster1)    
    if(fightResult)
    {
      m1 = true;
      
    }
    //if win
    //m1 = true

  }else if(!m2){
    notification("You encounter firey red monster with claws!")
    fightNotification("You encounter firey red monster with claws!\n")
    document.getElementById("monster2").style.display = "block"
    fightResult = fightingRound(monster2)    
    if(fightResult)
    {
      m2 = true;
    }

    //if win
    //m2 = true

  }else{
    notification("You encounter the master tentacle king! If you beat him, you will be granted passage back to Earth!")
    fightNotification("You encounter the master tentacle king! If you beat him, you will be granted passage back to Earth!\n")
    document.getElementById("monster3").style.display = "block"
    fightResult = fightingRound(monster3)    
    if(fightResult)
    {
      m3 = true;
    }
  }
  return fightResult;
}


//shop objects
var gift1 = {name:"Flowers", ability: "give player 40 Love"}; 
var gift2 = {name:"Dinner", ability: "give player 30 Love"};
var gift3 = {name:"Painting", ability: "increase love production"};
var giftList = [gift1, gift2, gift3];

//require value calculation
function shop(){
  if(probability(30)){
    var selected = randItemFromList(giftList);
    if(selected.name == "Flowers"){
      love+=20;
      notification("You brought flowers for your family. love+20", "blue")
    }
    if(selected.name == "Dinner"){
      love+=15;
      notification("You brought home dinner for your family. love+15", "blue")
    }
    if(selected.name == "Painting"){
      loveNum+=0.5;  
      notification("You brought a painting for your family. love production increase", "blue")
    }
  } else{
    notification("You ventured into a shop but did not find anything worth buying. :(")
  }
}

/*
  parameters: 
    list: a list contain all the objects
*/
function randItemFromList(list){
  var rand = Math.floor(Math.random() * Object.keys(list).length);
  return list[rand];  
}


function probability(num){  //ex: num = 30 for 30% chance
  var prob = Math.floor(Math.random() * 101);
  if (prob <= num){
    return true
  }else{
    return false
  }
}

function cryForLove(){
  if(probability(10)){
    love += 5
    notification("You are screaming! Your parents run in the room and sing you to sleep. Love +5", "blue")
  }else{
    love++
    notification("You cry! Your parents run in the room and snuggle you. Love +1")
  }
}

//type could be ul or li
function notification(text)
{
  var ol = document.getElementById("events");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text ));

  ol.prepend(document.createElement("li").appendChild(document.createTextNode(" -------\n")));

  ol.prepend(li);
}

function notification(text, color)
{
  var ol = document.getElementById("events");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  li.style.color = color;

  ol.prepend(document.createElement("li").appendChild(document.createTextNode(" -------\n")));

  ol.prepend(li);
}

function clearQueue(queueId)
{
  var ol = document.getElementById(queueId);
  if(ol != null){
    while (ol.hasChildNodes()) {
      ol.removeChild(ol.childNodes[0]);
    }
  }
}

function kissForLove(){
  if(probability(30)){
    love += 2
    notification("You got kisses from a puppy! Love+2", "blue")
  }else{
    love++
    if (probability(50)){
      notification("A kiss on your cheek from your parents. Love+1")
    }else{
      notification("You kiss your parents on the cheek. Love+1")
    }
  }
}

function qualityTime(){
  if(probability(40)){
    love += 5
    notification("You go on vacation with your family. Love+5", "blue")
  }else{
    love+=3
    notification("Family Game Night! Love+3")

  }
  
}

function dateForLove(){
  var foundRightPerson = probability(10)
  if (foundRightPerson){
    increaseLoveRate()
    notification("You found someone you love and who loves you back... <3. Love production increase", "blue")
  }
  notification("You haven't found the one just yet </3")
}

function allowance(){
  var amount = 1;
  if(age >=5 && age <= 9){
    amount = Math.floor((Math.random() * 5)+ 1)
    money += amount; //get $1-5
  }
  else if(age >=10 && age <= 14){
    amount = Math.floor((Math.random() * 16) + 5)
    money += amount; //get $5-15
  }
  else if(age >= 15){
    amount = Math.floor((Math.random() * 31) + 15)
    money += amount; //get $15-30
  }
  if (amount == 1)
    notification("You got 1 whole dollar, rad!")
  else
    notification("You got "+ amount + " bucks, rad!")

}

function increaseLoveRate(){
  loveNum++
}

//Common, rare, extremly rare tools available
var cTool1 = {rarity: "Common", name:"Hammer", ability: "Increase attack by 1 (Attack + 1)", owned: 1, attack: 1}; 
var cTool2 = {rarity: "Common", name:"Flashlight", ability: "This might be useful", owned: 1, knowledge: 10};
var cTool3 = {rarity: "Common", name:"BandAid", ability: "Meh... Better than nothing (Increase health limit by 10)", owned: 1, health: 10};


var rTool1 = {rarity: "Rare", name:"Gun", ability: "Your attack are now much more powerful! (Attack + 5)", owned: 1, attack: 5};
var rTool2 = {rarity: "Rare", name:"Magnifying Glass", ability: "Maybe this will help you discover something.", owned: 1, knowledge: 30};
var rTool3 = {rarity: "Rare", name:"Medicine", ability: "You could try to use it to cure yourself. (Increase health limit by 30)", owned: 1, health: 30};


var eTool1 = {rarity: "Extremely Rare", name:"Nuclear Weapon", ability: "Not much things can survive this. (Attack + 50)", owned: 1, attack: 50}; 
var eTool2 = {rarity: "Extremely Rare", name:"Phone", ability: "Maybe you can Google something. (Show a hint when come to decision)", owned: 1, knowledge: 100};
var eTool3 = {rarity: "Extremely Rare", name:"Lab", ability: "You have the best healthcare now, go wild! (Increase health limit by 80)", owned: 1, health: 80}; //increase health

var commonTools = [cTool1, cTool2, cTool3];
var rareTools = [rTool1, rTool2, rTool3];
var extremlyRTools = [eTool1, eTool2, eTool3];

function randItemFromToolList(list){
  var rand = Math.floor(Math.random() * Object.keys(list).length);

  switch(rand){
    case 0:
      attack += list[rand].attack;
      break;
    case 1:
      knowledge += list[rand].knowledge;
      break;
    case 2:
      health += list[rand].health;
      break;
    default:
  }
  return list[rand];  
}

function draw(){
  if(probability(39))
  {
    var tool = randItemFromToolList(commonTools)
    notification("You got a " + tool.name, "#4cd2e0")
    //if selected item is not in the inventory, then add it to inventory
    //if it is in the inventory, then increase numbe own by one
    if(!checkDuplicateTool(tool))  
      inventory.push(tool);
  } else if(probability(12))
  {
   
    var tool = randItemFromToolList(extremlyRTools)
     notification("You got a " + tool.name, "orange")
    if(!checkDuplicateTool(tool))  
      inventory.push(tool);

  } else{
    var tool = randItemFromToolList(rareTools)
    notification("You got a " + tool.name, "#e09fce")
    if(!checkDuplicateTool(tool))  
      inventory.push(tool);

  } 

}

function checkDuplicateTool(tool)
{
  var check = false
  for(var i in inventory)
  {
    if(inventory[i] == tool){
      check = true
      inventory[i].owned+=1;
    }
  }
  return check;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function showUpdate(id){
  switch (id){
    case "love":
      document.getElementById("love").innerHTML = love;
      break;
    case "money":
      document.getElementById("money").innerHTML = money;
      break;
    case "knowledge":
      document.getElementById("knowledge").innerHTML = knowledge;
      break;
    case "age":
      document.getElementById("age").innerHTML = age;
      break;
    case "money":
      document.getElementById("money").innerHTML = money;
      break;

    case "health":
      document.getElementById("health").innerHTML = health;
      break;

  
    case "inventory":
      clearQueue("inventoryStat");

      var ol = document.getElementById("inventoryStat");

      for(var i in inventory){
        if(inventory[i].owned < 1)
          continue;
        var li1 = document.createElement("li");
        li1.appendChild(document.createTextNode("Rarity: \n"+inventory[i].rarity));
        ol.appendChild(li1); 
        var li2 = document.createElement("li");
        li2.appendChild(document.createTextNode("Name: \n"+ inventory[i].name));
        ol.appendChild(li2); 
        var li3 = document.createElement("li");
        li3.appendChild(document.createTextNode("Description: \n"+inventory[i].ability));
        ol.appendChild(li3); 
        var li4 = document.createElement("li");
        li4.appendChild(document.createTextNode("Owned: \n"+inventory[i].owned));
        ol.appendChild(li4); 
        
        ol.appendChild(document.createElement("li").appendChild(document.createTextNode(" ------\n"))); 
      }     
      break;
    default:
  }
}