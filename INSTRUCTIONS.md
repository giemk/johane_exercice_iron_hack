###### Tâche 1
À l’aide dU npm create-react-app, créez un nouveau projet.
À l’intérieur du src, créez un nouveau dossier ‘components’ pour stocker vos nouveaux composants.
Créez le fichier src/components/User.js

###### Tâche 2
Ajoutez une propriété supplémentaire « bootcamp : ‘Ironhack’ » dans le state du composant racine (‘App.js’).
Passez cette valeur en tant que props et affichez-la dans une balise « h2>» dans le composant « User />» pour qu’elle indique « Welcome to Ironhack’.

###### Tâche 3
Créez la méthode ‘clickHandler() ’ dans le composant racine ‘App.js’ pour changer la propriété ‘state’ ‘backColor’ en une couleur aléatoire tous les 5 clics. Utilisez la fonction « colorMapper » fournie pour obtenir la chaîne de couleurs HEX.

###### Tâche 4
Dans User.js, créez un <h2> qui aura pour titre "Bonjour, suivi du prénom du state dans App.js. Le background doit également renvoyer la couleur aléatoire.
Puis un seconde <h2> qui affiche le nom du bootcamp.

###### Tâche 5
Créez une nouvelle class component « Navbar.js », qui a un state avec une propriété « username : « VOTRE NOM » ».
Affichez cette valeur dans la balise « p> ».

Vous pouvez utiliser l’extrait ci-dessous pour vos composants.
Lorsque vous avez terminé, importez le composant « Navbar » dans le composant « App.js ».

```js
// Navbar.js
   <nav id='navbar'>
     <ul>
       <a href="#"><li>Home</li></a>
       <a href="#"><li>Contact</li></a>
       <a href="#"><li>About</li></a>
     </ul>

     <div className="nav-details">
       <p className="nav-username"> Thierry </p>
     </div>
```


```css
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:  #352275;
  padding: 0px 40px;
}

#navbar li {
  list-style: none;
  display: inline-block;
  margin: 0px 40px; 
  font-size: 22px;
  color:white;
}

div.nav-details > * {
  display: inline-block;
  color: royalblue;
  font-size: 22px;
}