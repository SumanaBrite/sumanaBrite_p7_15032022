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
function setArrayOfRecipes(recipes) {
    arrofRecipes = recipes;
}
//for loop with include()
function inputSearchGlobal() {
    var inputSearch;
    inputSearch = document.getElementById("inputSearchTagAll").value;
    inputSearch = inputSearch.toLowerCase();
    arrofFilterRecipes = [];
    let searchArrayList = [];
    if (inputSearch.length < 2 && arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length == 0) {
        arrofFilterRecipes = arrofRecipes;
    }
    if (inputSearch.length > 2) {
                for (let i = 0; i < arrofRecipes.length; i++) {            
            var arr = arrofRecipes[i];         
             if (arr.name.toLowerCase().includes(inputSearch) || arr.appliance.toLowerCase().includes(inputSearch) || arr.ustensils.some(item => item.toLowerCase().includes(inputSearch)) ||  arr.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(inputSearch)) || arr.description.toLowerCase().includes(inputSearch) ) {
                searchArrayList.push(arr);
            }  
        }     
        if (arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length == 0) {
            arrofFilterRecipes = searchArrayList;
        }
    }
    if (arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length == 0) {
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        arrofRecipes.forEach(arr => {
            for(let ingredient of arr.ingredients){
                    for(let selectedItem of arrSelectedIngredients){
                    if (selectedItem == ingredient.ingredient) {
                        arrofFilterRecipes.push(arr);
                    }
                };
            };
        });
    } else if (arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length == 0) { 
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        arrofRecipes.forEach(arr => {
            for(let app of arrSelectedAppliance){
                if (app == arr.appliance) {
                    arrofFilterRecipes.push(arr);
                }
            };
        });
    } else if (arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length > 0) {
        let currentArray= arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        arrofRecipes.forEach(arr => {
            for(let arrUstensils of arr.ustensils){
                    for(let ustensils of arrSelectedUstensils){
                    if (ustensils == arrUstensils) {
                        arrofFilterRecipes.push(arr);
                    }
                };
            };
        });
    } else if (arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length > 0) {
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }      
        arrofRecipes.forEach(arr => {
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
        });
    }
    else if(arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length == 0){
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        arrofRecipes.forEach(arr => {
            for(let ingredient of arr.ingredients){
                    for(let selectedItem of arrSelectedIngredients){
                        for(let app of arrSelectedAppliance){
                        if ((selectedItem == ingredient.ingredient) && (arr.appliance == app)) {
                            arrofFilterRecipes.push(arr);
                        }
                    };
                };
            };
        });
    } else if(arrFilterJson.ingredients.length == 0 && arrFilterJson.appliance.length > 0 && arrFilterJson.ustensils.length > 0){
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        arrofRecipes.forEach(arr => {
            for(let app of arrSelectedAppliance){
                    for(let ustensils of arrSelectedUstensils){
                        for(let utensilItem of arr.ustensils){
                        if ((arr.appliance == app) && (ustensils == utensilItem)) {
                            arrofFilterRecipes.push(arr);
                        }
                    };
                    
                };
            };
        });
    } else if(arrFilterJson.ingredients.length > 0 && arrFilterJson.appliance.length == 0 && arrFilterJson.ustensils.length > 0){
        let currentArray = arrofRecipes;
        if (inputSearchTag.length > 2) {
            currentArray = searchArrayList;
        }
        // while(arr <= currentArray){
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
function getUnique(recipes) {
    recipes.forEach(arr => {
        arr.ingredients.forEach(ingredients => {
            if (arrIngredients.indexOf(ingredients.ingredient) === -1) {
                arrIngredients.push(ingredients.ingredient);
            }
        });
        if (arrAppliance.indexOf(arr.appliance) === -1) {
            arrAppliance.push(arr.appliance);
        }
        if(arrUstensils.indexOf(arr.ustensils) === -1){
            arr.ustensils.forEach(ustensil => {
                arrUstensils.push(ustensil);
                arrUstensils = [...new Set(arrUstensils)]
            })
        }   
    });
}
function displayAllRecipes() {
    document.getElementById('contentImg').innerHTML = `
${arrofRecipes.map(function (food) {
        var arrfood = food.ingredients;
        return `
    <div class="col-4 py-1 cardDisplay " id="card-${food.id}" >
<div class="card-deck">
    <div class="card">
        <img class="card-img-top" src="./assets/img/recipe.webp" alt="Card image cap">
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
                    `}).join('')}   
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
function toggle(toggleSrcRecipes, ulId) {
    var toggelForm = document.getElementById(toggleSrcRecipes);
    var toggleIngredients = document.getElementById(ulId);
    var inputDropdownSearch = document.getElementById("ingredientSearch").value;
    if (toggelForm.getAttribute("src") == "./assets/img/dropdown-icon-down.png") {
        toggelForm.src = "./assets/img/dropdown-icon-up.png";
        toggleIngredients.style.display = "block";
    } else if (toggelForm.getAttribute("src") == "./assets/img/dropdown-icon-up.png") {
        toggelForm.src = "./assets/img/dropdown-icon-down.png";
        toggleIngredients.style.display = "none";
    }
    
}
function selectedTag(liItem) {
    listIndex++;
    liItem.style.pointerEvents = "none";
    if (liItem.parentNode.classList.contains('ingredientsBg')) {
        document.getElementById("tagsList").innerHTML += `
        <button type='button'  class="selectedItems ingredientsBg"><span> ${liItem.innerHTML} </span><img src="./assets/img/remove-icon.png"  onclick="closeSelectedTag('${liItem.id}',this)"  alt="Remove icon"></button>
        `
        if (arrSelectedIngredients.indexOf(liItem.innerHTML) === -1) {
            arrSelectedIngredients.push(liItem.innerHTML);
        }
    }
    if (liItem.parentNode.classList.contains('applianceBg')) {
        document.getElementById("tagsList").innerHTML += `
        <button type='button'  class="selectedItems applianceBg"><span> ${liItem.innerHTML} </span><img src="./assets/img/remove-icon.png"  onclick="closeSelectedTag('${liItem.id}',this)" alt="Remove icon"></button>
        `
        if (arrSelectedAppliance.indexOf(liItem.innerHTML) === -1) {
            arrSelectedAppliance.push(liItem.innerHTML);
            // console.log(arrSelectedAppliance);
        }
    }
    if (liItem.parentNode.classList.contains('ustensilsBg')) {
        document.getElementById("tagsList").innerHTML += `
        <button type='button'  class="selectedItems ustensilsBg"><span> ${liItem.innerHTML} </span><img src="./assets/img/remove-icon.png"  onclick="closeSelectedTag('${liItem.id}',this)" alt="Remove icon"></button>
        `
        if (arrSelectedUstensils.indexOf(liItem.innerHTML) === -1) {
            arrSelectedUstensils.push(liItem.innerHTML);
            // console.log(arrSelectedAppliance);
        }
    }
    // filterCard(liItem.innerHTML);
    // this.filterCardByValue(arrSelectedIngredients);
    inputSearchGlobal();
}
function closeSelectedTag(id, thisButton) {
    var selectedList = document.getElementById(id);
    // console.log(selectedList)
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
    //   if (arrSelectedIngredients.length === 0) {
    //     this.displayAllRecipes();
    // }else{
    //     this.filterCardByValue(arrSelectedIngredients);
    // }
}
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
function init() {
    setArrayOfRecipes(recipesJson);
    getUnique(recipesJson);
    listDropdown();
    displayAllRecipes();
}
init();