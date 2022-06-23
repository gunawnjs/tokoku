async function item(){

    await fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=> {
                
                let container = document.getElementById("container");

                console.log(container);

                container.innerHTML = "";

              console.log(json)
              for (let i=0; i<json.length; i++) {
                
                // let card = `<div class="card" id="${i}">  </div>`

                let card = document.createElement("div");

                card.setAttribute("id", i);
                card.classList.add("card");
                

                // let img = `<img src="${json[i].image}" >`
                let img = document.createElement("img");

                img.setAttribute("src", json[i].image);

                card.append(img)
                
                console.log(card);
                // console.log(img);

                
                let cardContainers = document.createElement("div");
                cardContainers.classList.add("card-container");
                
                let titleLimit = json[i].title
                titleLimit = titleLimit.slice(0, 18) + "...";

                let titleItems = document.createElement("p");
                titleItems.innerHTML = titleLimit;
                
                let priceItems = document.createElement("p");

                let currencyItems = document.createElement("span");
                currencyItems.innerHTML = '$  ';
                
                let nominalItems = document.createElement("span");
                nominalItems.innerHTML = json[i].price;
                nominalItems.classList.add("nominal")

                priceItems.append(currencyItems);
                
                priceItems.append(nominalItems);


                cardContainers.append(titleItems);
                
                cardContainers.append(priceItems);

                card.append(cardContainers);


                container.append(card);

                
              }
            })

    
  }

  item();