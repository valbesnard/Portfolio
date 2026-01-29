<script setup>
import { aboutMe } from "@/data/aboutMe.js";
</script>

<template>
    <section id="AboutMe">
        <h2>Valentin Besnard</h2>
        <img src="/profil.jpg" alt="Image de moi">
        <h3>A propos de moi</h3>
        <table>
            <tbody>
                <tr>
                    <th>Naissance</th>
                    <td>{{ aboutMe.naissance }}</td>
                </tr>    
                <tr>
                    <th>Formations</th>
                    <td>{{ aboutMe.formations }}</td>
                </tr>   
                <tr>
                    <th>Activité</th>
                    <td>{{ aboutMe.activite }}</td>
                </tr> 
                <tr>
                    <th>Période</th>
                    <td>{{ aboutMe.periode }}</td>
                </tr> 
                <tr>
                    <th>Ville</th>
                    <td>{{ aboutMe.ville }}</td>
                </tr> 
                <tr>
                    <th>Hobbies</th>
                    <td>{{ aboutMe.hobbies }}</td>
                </tr> 
                <tr>
                    <th>Engagements associatif</th>
                    <td>{{ aboutMe.engagements_associatif_actif }}</td>
                </tr> 
                <tr>
                    <th>Engagements associatifs passés</th>
                    <td>{{ aboutMe.engagements_associatifs_passes }}</td>
                </tr> 
                <tr>
                    <th>Centre d'intérêts</th>
                    <td>
                        <span
                            v-for="(item, index) in aboutMe.centres_interet"
                            :key="item.id || index"
                        >
                            <a v-if="item.link" :href="item.link">
                            {{ item.title }}
                            </a>
                            <span v-else>
                            {{ item.title }}
                            </span>
                            <span v-if="index < aboutMe.centres_interet.length - 1">, </span>
                        </span>
                    </td>
                </tr> 
                <tr>
                    <th>Expériences professionnelles passés</th>
                    <td>{{ aboutMe.experiences_professionnelles_passe }}</td>
                </tr> 
            </tbody>
        </table>
    </section>
</template>

<style scoped>
p {
    text-indent: 2rem;
    padding-left: 1rem;
    padding-right: 5rem;
}

#AboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
    float: right;
    width: 25em;

    border-style: solid;
    border-width: 1px;
    padding: 1em;

    background-color: rgb(249, 249, 249);
}

img {
    width: 75%;
}

h2 {
    text-align: center;
    background-color: #c8ccd1;
    margin: 0;
    padding: 0.5em 0 0.5em 0;
    width: 100%;
}

h3 {
    text-align: center;
    background-color: #c8ccd1;
    margin: 0;
    padding: 0.25em 0 0.25em 0;
    width: 100%;
}

table {
    width: 100%;
}

th {
    width: 8em;
    padding-right: 1em;
}

td, th {
    text-align: left;
    vertical-align: top;
    padding-top: 1em
}


</style>