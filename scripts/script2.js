let arrofRecipes = [];
let arrIngredients = [];
let arrUstensils = [];
let arrAppliance = [];
let arrSelectedIngredients = [];
let arrSelectedUstensils = [];
let arrSelectedAppliance = [];
let arrofFilterRecipes = [];
var listIndex = 0;
var istoggleshown=true; 
let arrFilterJson = {
    ingredients: arrSelectedIngredients,
    appliance: arrSelectedAppliance,
    ustensils: arrSelectedUstensils,
}
// JSON Array
function setArrayOfRecipes(recipes) {
    arrofRecipes = recipes;
}
//User main input search by text and filter the default recipes by the kewords(for of with match)
function inputSearchGlobal() {
    var inputSearchTag;
    inputSearchTag = document.getElementById("inputSearchTagAll").value;
    arrofFilterRecipes = [];
    let searchArrayList = [];
    if (inputSearchTag.length < 2 && arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length == 0) {
        arrofFilterRecipes = arrofRecipes;
    }
     let reg = new RegExp(inputSearchTag, 'gi');
    if (inputSearchTag.length > 2) {
            for(let arr of arrofRecipes){
            if (arr.name.match(reg) || arr.description.match(reg) || arr.appliance.match(reg) || arr.ustensils.some(item => item.match(reg)) || arr.ingredients.some((ingredient) => ingredient.ingredient.match(reg))) 
            {
                searchArrayList.push(arr);
                // console.log(searchArrayList);
            } 
            else {
                document.getElementById('error').style.display="block";
                // console.log("hi");
            }
            
        };
        if (arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length == 0) {
            arrofFilterRecipes = searchArrayList;
        }
    }
    if (arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length == 0) {
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
            for(let arr of currentArray){
                for(let ingredient of arr.ingredients){
                    for(let selectedItem of arrSelectedIngredients){
                    if (selectedItem == ingredient.ingredient) {
                        arrofFilterRecipes.push(arr);
                    }
                };
            };
        };
    } else if (arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length == 0) { 
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        for(let arr of currentArray){
            for(let app of arrSelectedAppliance){
                if (app == arr.appliance) {
                    arrofFilterRecipes.push(arr);
                }
            };
        };
    } else if (arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length > 0) {
        let currentArray= arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        for(let arr of currentArray){
            for(let arrUstensils of arr.ustensils){
                    for(let ustensils of arrSelectedUstensils){
                    if (ustensils == arrUstensils) {
                        arrofFilterRecipes.push(arr);
                    }
                };
            };
        };
    } else if (arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length > 0) {
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }           
        for(let arr of currentArray){
            for(let ingredient of arr.ingredients){
                    for(let selectedItem of arrSelectedIngredients){
                        for(let app of arrSelectedAppliance){
                            for(let ustensils of arrSelectedUstensils){
                                for(let utensilItem of arr.ustensils){
                                if ((selectedItem == ingredient.ingredient) && (arr.appliance == app) && (ustensils == utensilItem)) {
                                    arrofFilterRecipes.push(arr);
                                }
                            };
                            
                        };
                    };
                };
            };
        };
    }
    else if(arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length == 0){
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        for(let arr of currentArray){
            for(let ingredient of arr.ingredients){
                    for(let selectedItem of arrSelectedIngredients){
                        for(let app of arrSelectedAppliance){
                        if ((selectedItem == ingredient.ingredient) && (arr.appliance == app)) {
                            arrofFilterRecipes.push(arr);
                        }
                    };
                };
            };
        };
    } else if(arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length > 0){
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        for(let arr of currentArray){
            for(let app of arrSelectedAppliance){
                    for(let ustensils of arrSelectedUstensils){
                        for(let utensilItem of arr.ustensils){
                        if ((arr.appliance == app) && (ustensils == utensilItem)) {
                            arrofFilterRecipes.push(arr);
                        }
                    };
                    
                };
            };
        };
    } else if(arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length > 0){
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        for(let arr of currentArray){
            for(let ingredient of arr.ingredients){
                    for(let selectedItem of arrSelectedIngredients){
                        for(let ustensils of arrSelectedUstensils){
                            for(let utensilItem of arr.ustensils){
                            if ((selectedItem == ingredient.ingredient) && (ustensils == utensilItem)) {
                                arrofFilterRecipes.push(arr);
                            }
                        };
                        
                    };
                };
            };
        };
    }
   
    var cardDiv = document.getElementsByClassName('cardDisplay');
    for (let i = 0; i < cardDiv.length; i++) {
        cardDiv[i].style.display = "none";
    }
    arrofFilterRecipes.forEach(element => {
        document.getElementById('card-' + element.id).style.display = "block";
    });
    
}
function displayAllRecipes() {
    document.getElementById('contentImg').innerHTML = `
${arrofRecipes.map(function (food) {
        var arrfood = food.ingredients;
        return `
    <div class="col-4 py-1 cardDisplay " id="card-${food.id}" >
<div class="card-deck" style="height:100%">
    <div class="card">
        <img class="card-img-top" src="./assets/img/bg-recipe.png" alt="Card image cap">
        <div class="card-body">
            <div class="card-title">
                <div class="row">
                    <div class="col-8 recipeNames">${food.name}</div>
                    <div class="col-4 text-right recipeNames"><img src="./assets/img/clock-icon.png"> ${food.time} min</div>
                </div>
            </div>
            <div class="card-text py-3">
                <div class="row">               
                    <div class="col-6 recipeDetails">
                    ${arrfood.map(function (x) {
            return `
                        <span><b>${x.ingredient ? x.ingredient : ''}:</b> ${x.quantity ? x.quantity : ''}${x.unit ? x.unit : ''}</span><br>                    
                    `})}   
                 </div>                
                    <div class="col-6"><p class="recipeDetails">${food.description}</p></div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    `
    }).join('')}
`
}
//Get unique value of each categories
function getUnique(arrofRecipes) {
    arrofRecipes.forEach(arr => {
        arr.ingredients.forEach(ing => {
            if (!arrIngredients.includes(ing.ingredient)) {
                arrIngredients.push(ing.ingredient);
            }
        });
        if (!arrAppliance.includes(arr.appliance)) {
            arrAppliance.push(arr.appliance);
        };
        arr.ustensils.forEach(ustensil=> {
            if (!arrUstensils.includes(ustensil)) {
                arrUstensils.push(ustensil);
            }
        });
       
    });
}
//Display the list of unique values
function listDropdown() {
    let text = "";
    arrIngredients.forEach(item => {
        listIndex++;
        document.getElementById('ingredients').innerHTML =
            text += '<li class="listItem py-4 " id="ingredient-' + listIndex + '" style="pointer-events: auto;" onclick="selectedTag(this)">' + item + '</li>';
    });
    text = "";
    listIndex = 0;
    arrAppliance.forEach(item => {
        listIndex++;
        document.getElementById('appliance').innerHTML =
            text += '<li class="listItem py-4 " id="appliance-' + listIndex + '" style="pointer-events: auto;" onclick="selectedTag(this)">' + item + '</li>';
    });
    text = "";
    listIndex = 0;
    arrUstensils.forEach(item => {
        listIndex++;
        document.getElementById('ustensils').innerHTML =
            text += '<li class="listItem py-4 " id="ustensils-' + listIndex + '" style="pointer-events: auto;" onclick="selectedTag(this)">' + item + '</li>';
    });
}
//Filter the tags by input search
function inputSearchTag(inputIdName, inputSearchTag, toggleSrclist) {
    var inputSearchTagValue=document.getElementById(inputSearchTag).value;
    if(inputSearchTagValue.length >=3 ){      
        document.getElementById(toggleSrclist).src = "./assets/img/dropdown-icon-up.png";
        document.getElementById(inputIdName).style.display = "block";
    }        
    if(istoggleshown){
        if(inputSearchTagValue.length <3){
                document.getElementById(toggleSrclist).src = "./assets/img/dropdown-icon-down.png";
                document.getElementById(inputIdName).style.display = "none";
            }       
    }
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(inputSearchTag);
    filter = input.value.toUpperCase();
    ul = document.getElementById(inputIdName);
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = ul.getElementsByTagName("li")[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
    // var filterWord = $(this).val().toLowerCase();
    // $('select').find('option').show()
    // $('select').find('option').not(':contains('+filterWord+')').hide()
}
//Show and hide list with arrow button
function toggle(toggleSrc, ulId) {
    var toggleImg = document.getElementById(toggleSrc);    
    var toggleImgSrc=toggleImg.getAttribute("src");
    var toggleList = document.getElementById(ulId);   
    toggleImgSrc == "./assets/img/dropdown-icon-down.png"?(toggleImg.src = "./assets/img/dropdown-icon-up.png", toggleList.style.display = "block", istoggleshown=false) : ( toggleImg.src = "./assets/img/dropdown-icon-down.png", toggleList.style.display = "none",istoggleshown=true) ;
}
//Display tags selected 
function selectedTag(thisLiElement) {
    listIndex++;
    thisLiElement.style.pointerEvents = "none";
    if (thisLiElement.parentNode.classList.contains('ingredientsBg')) {
        document.getElementById("tagsList").innerHTML += `
        <button type='button'  class="selectedItems ingredientsBg"><span> ${thisLiElement.innerHTML} </span><img src="./assets/img/remove-icon.png"  onclick="closeSelectedTag('${thisLiElement.id}',this)"  alt="Remove icon"></button>
        `
        if (arrSelectedIngredients.indexOf(thisLiElement.innerHTML) === -1) {
            arrSelectedIngredients.push(thisLiElement.innerHTML);
        }
    }
    if (thisLiElement.parentNode.classList.contains('applianceBg')) {
        document.getElementById("tagsList").innerHTML += `
        <button type='button'  class="selectedItems applianceBg"><span> ${thisLiElement.innerHTML} </span><img src="./assets/img/remove-icon.png"  onclick="closeSelectedTag('${thisLiElement.id}',this)" alt="Remove icon"></button>
        `
        if (arrSelectedAppliance.indexOf(thisLiElement.innerHTML) === -1) {
            arrSelectedAppliance.push(thisLiElement.innerHTML);
        }
    }
    if (thisLiElement.parentNode.classList.contains('ustensilsBg')) {
        document.getElementById("tagsList").innerHTML += `
        <button type='button'  class="selectedItems ustensilsBg"><span> ${thisLiElement.innerHTML} </span><img src="./assets/img/remove-icon.png"  onclick="closeSelectedTag('${thisLiElement.id}',this)" alt="Remove icon"></button>
        `
        if (arrSelectedUstensils.indexOf(thisLiElement.innerHTML) === -1) {
            arrSelectedUstensils.push(thisLiElement.innerHTML);
        }
    }
    inputSearchGlobal();
}
//Hide the tags 
function closeSelectedTag(id, thisButton) {
    var selectedList = document.getElementById(id);
    var deletedItem = selectedList.innerHTML;
    selectedList.style.pointerEvents = "auto";
    thisButton.parentNode.classList.add("displayItemNone");
    if (thisButton.parentNode.classList.contains('ingredientsBg')) {
        let indexClosedItem = arrSelectedIngredients.indexOf(deletedItem);
        arrSelectedIngredients.splice(indexClosedItem, 1);
    } else if (thisButton.parentNode.classList.contains('applianceBg')) {
        let indexClosedItem = arrSelectedAppliance.indexOf(deletedItem);
        arrSelectedAppliance.splice(indexClosedItem, 1);
    } else if (thisButton.parentNode.classList.contains('ustensilsBg')) {
        let indexClosedItem = arrSelectedUstensils.indexOf(deletedItem);
        arrSelectedUstensils.splice(indexClosedItem, 1);
    }
    inputSearchGlobal();
    
}
function init() {
    setArrayOfRecipes(recipesJson);
    getUnique(recipesJson);
    listDropdown();
    displayAllRecipes();
}
init();