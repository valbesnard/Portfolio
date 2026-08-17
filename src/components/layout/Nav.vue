<template>
    <div class="nav-container">
        <nav>
            <h2>Sommaire</h2>
            <div class="nav-links">
                <a href="#Projects" id="Projects-link">Projets réalisés</a>
                <a href="#Skills" id="Skills-link">Compétences</a>
                <a href="#Experiences" id="Experiences-link">Expériences</a>
                <!-- <a href="#Hobbies" id="Hobies-link">Hobbies</a> -->
            </div>
        </nav>
    </div>
    
</template>

<style scoped>
/* Composants */
h2 {
    text-align: left;

    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: rgb(179, 179, 179);

    margin-top: var(--margin-medium);
    margin-bottom: var(--margin-medium);
}

a {
    box-sizing:border-box;
    margin-bottom: var(--margin-contents);
    color: rgb(0, 0, 238);
}

.active-content {
  color: black;
  font-weight: bold;
}

h2,a {
    font-size: var(--font-size-contents);
}

/* Conteneurs */

nav {
    display: flex;
    flex-direction: column;
    align-content: left;

    box-sizing: border-box; 
    background-color: white; /* A supprimer */

    position: sticky;
    top: 0px;
}

.nav-container {
    padding-left: var(--lft-padding-contents);
    padding-right: var(--rgt-padding-contents);
}

.nav-links {
    display: flex;
    flex-direction: column;
}
</style>